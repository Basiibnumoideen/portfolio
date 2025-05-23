// utils/email.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

async function sendEmail(contact) {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: `New Contact: ${contact.subject}`,
            text: `
                Name: ${contact.name}
                Email: ${contact.email}
                Subject: ${contact.subject}
                Message: ${contact.message}
                
                Received: ${new Date().toLocaleString()}
            `,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${contact.name}</p>
                <p><strong>Email:</strong> ${contact.email}</p>
                <p><strong>Subject:</strong> ${contact.subject}</p>
                <p><strong>Message:</strong></p>
                <p>${contact.message}</p>
                <p><em>Received: ${new Date().toLocaleString()}</em></p>
            `
        };

        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error('Email sending error:', error);
        return false;
    }
}

module.exports = { sendEmail };