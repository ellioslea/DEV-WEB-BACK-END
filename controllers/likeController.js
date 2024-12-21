const { Like } = require('../models');

// Récupérer tous les likes
exports.getLikes = async (req, res) => {
  try {
    const likes = await Like.findAll();
    res.status(200).json(likes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Créer un like
exports.createLike = async (req, res) => {
  try {
    const { userId, likedUserId } = req.body;
    const like = await Like.create({ userId, likedUserId });
    res.status(201).json(like);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
