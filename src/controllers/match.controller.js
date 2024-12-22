const { Match, User } = require('../models');

exports.createMatch = async (req, res) => {
  try {
    const match = await Match.create({
      initiatorId: req.user.id,
      receiverId: req.body.receiverId
    });
    res.status(201).json(match);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateMatchStatus = async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }
    if (match.receiverId !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    await match.update({ status: req.body.status });
    res.json(match);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserMatches = async (req, res) => {
  try {
    const matches = await Match.findAll({
      where: {
        [Op.or]: [
          { initiatorId: req.user.id },
          { receiverId: req.user.id }
        ],
        status: 'accepted'
      },
      include: [
        { model: User, as: 'initiator', attributes: { exclude: ['password'] } },
        { model: User, as: 'receiver', attributes: { exclude: ['password'] } }
      ]
    });
    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.unmatch = async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }
    if (match.initiatorId !== req.user.id && match.receiverId !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    await match.destroy();
    res.json({ message: 'Unmatched successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};