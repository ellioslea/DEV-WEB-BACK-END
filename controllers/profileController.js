const Profile = require('../models/profile');

// Fonction pour obtenir un profil par ID
const getProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await Profile.findOne({ where: { userId: id } });
    if (!profile) {
      return res.status(404).json({ message: 'Profil non trouvé.' });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du profil.' });
  }
};

// Fonction pour créer ou mettre à jour un profil
const createOrUpdateProfile = async (req, res) => {
  const { id } = req.params;
  const { name, bio } = req.body;
  try {
    let profile = await Profile.findOne({ where: { userId: id } });
    if (profile) {
      profile.name = name;
      profile.bio = bio;
      await profile.save();
      res.status(200).json(profile);
    } else {
      profile = await Profile.create({ userId: id, name, bio });
      res.status(201).json(profile);
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur de création ou de mise à jour du profil.' });
  }
};

module.exports = { getProfile, createOrUpdateProfile };
