const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message.controller');
const { authenticateToken } = require('../middleware/auth.middleware');

router.post('/', authenticateToken, messageController.sendMessage);
router.get('/', authenticateToken, messageController.getConversations);
router.put('/:id', authenticateToken, messageController.markAsRead);
router.delete('/:id', authenticateToken, messageController.deleteMessage);

module.exports = router;