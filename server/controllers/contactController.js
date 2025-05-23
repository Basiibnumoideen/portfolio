const Contact = require('../models/Contact');
const { sendEmail } = require('../utils/email');
const axios = require('axios');

const submitContact = async (req, res) => {
  try {
    console.log('Received request body:', req.body); // Debug incoming data
    
    const { name, email, subject, message } = req.body;

    // Validate all fields including subject
    if (!name || !email || !subject || !message) {
      console.warn('Missing fields in submission:', {
        name: !name, 
        email: !email,
        subject: !subject,
        message: !message
      });
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required',
        receivedData: req.body // Include received data for debugging
      });
    }

    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    console.log('Contact saved to DB with subject:', subject); // Debug DB save

    // 1. Send email (unchanged)
    const emailSent = await sendEmail(newContact);
    if (!emailSent) {
      console.warn('Email failed to send');
    }

    // 2. Enhanced WhatsApp notification with error handling
    try {
      console.log('Sending to WhatsApp bot:', { name, email, subject, message });
      
      const whatsappResponse = await axios.post(
        process.env.WHATSAPP_BOT_URL, 
        {
          name,
          email,
          subject, // Explicitly included
          message
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 5000 // 5 second timeout
        }
      );
      
      console.log('WhatsApp bot response:', whatsappResponse.data);
    } catch (whatsappError) {
      console.error('WhatsApp notification failed:', {
        message: whatsappError.message,
        response: whatsappError.response?.data,
        config: whatsappError.config?.data
      });
    }

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: newContact
    });
  } catch (error) {
    console.error('Server error:', {
      message: error.message,
      stack: error.stack,
      receivedData: req.body
    });
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      errorDetails: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Update the contact recent command handler to include subject
async function handleContactCommand(cmd, sock, sender) {
    const subCommand = cmd.split(' ')[1];
    
    switch(subCommand) {
        case 'recent':
            const recentContacts = contacts.slice(0, 5)
                .map((c, i) => 
                    `${i+1}. ${c.name} (${c.email})\n` +
                    `   Subject: ${c.subject}\n` +
                    `   Message: "${c.message.substring(0, 30)}${c.message.length > 30 ? '...' : ''}"`
                )
                .join('\n\n');
            
            await sock.sendMessage(sender, {
                text: `📝 *Recent Contact Submissions*\n\n${recentContacts || 'No submissions yet'}`
            });
            return true;
            
        case 'stats':
            await sock.sendMessage(sender, {
                text: `📊 *Contact Stats*\n\n` +
                      `• Total submissions: ${contacts.length}\n` +
                      `• Last submission: ${contacts[0]?.timestamp.toLocaleString() || 'None'}`
            });
            return true;
            
        default:
            await sock.sendMessage(sender, {
                text: `📋 *Contact Command Help*\n\n` +
                      `• /contact recent - Show recent submissions\n` +
                      `• /contact stats - Show statistics\n` +
                      `• /contact search [query] - Search contacts (coming soon)`
            });
            return true;
    }
}

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = {
  submitContact,
  getContacts
};