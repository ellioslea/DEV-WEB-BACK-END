const { Message } = require('../models');

// Récupérer tous les messages
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Créer un message
exports.createMessage = async (req, res) => {
  try {
    const { content, userId } = req.body;
    const message = await Message.create({ content, userId });
    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
