const { Message, User } = require('../models');

exports.sendMessage = async (req, res) => {
  try {
    const message = await Message.create({
      content: req.body.content,
      senderId: req.user.id,
      receiverId: req.body.receiverId
    });
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getConversations = async (req, res) => {
  try {
    const messages = await Message.findAll({
      where: {
        [Op.or]: [
          { senderId: req.user.id },
          { receiverId: req.user.id }
        ]
      },
      include: [
        { model: User, as: 'sender', attributes: { exclude: ['password'] } },
        { model: User, as: 'receiver', attributes: { exclude: ['password'] } }
      ],
      order: [['createdAt', 'DESC']]
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const message = await Message.findByPk(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    if (message.receiverId !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    await message.update({ read: true });
    res.json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByPk(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    if (message.senderId !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    await message.destroy();
    res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};