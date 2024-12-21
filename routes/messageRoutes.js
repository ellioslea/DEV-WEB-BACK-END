const express = require('express');
const messageController = require('../controllers/messageController');
const router = express.Router();

// Route pour obtenir tous les messages
router.get('/messages', messageController.getMessages);

// Route pour créer un message
router.post('/messages', messageController.createMessage);

module.exports = router;
