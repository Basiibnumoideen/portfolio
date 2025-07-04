const express = require('express');
const { submitContact, getContacts } = require('../controllers/contactController');

const router = express.Router();

router.post('/', submitContact);
router.get('/', getContacts);

module.exports = router; // ✅ MUST EXPORT THE ROUTER
