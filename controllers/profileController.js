const Profile = require('../models/profile');

// Création et mise à jour d'un profil
const createOrUpdateProfile = async (req, res) => {
  const { userId } = req.params;
  const { name, bio } = req.body;
  try {
    let profile = await Profile.findOne({ where: { userId } });
    if (profile) {
      profile.name = name;
      profile.bio = bio;
      await profile.save();
    } else {
      profile = await Profile.create({ userId, name, bio });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Erreur de profil' });
  }
};

module.exports = { createOrUpdateProfile };
