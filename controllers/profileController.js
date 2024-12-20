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
  const { id } = req.params; // on suppose que `id` dans l'URL correspond à `userId`
  const { name, bio, age, location } = req.body;
  try {
    let profile = await Profile.findOne({ where: { userId: id } });
    if (profile) {
      // Si le profil existe déjà, on le met à jour
      profile.name = name || profile.name;
      profile.bio = bio || profile.bio;
      profile.age = age || profile.age;
      profile.location = location || profile.location;
      await profile.save();
      return res.status(200).json(profile); // Profil mis à jour
    } else {
      // Si le profil n'existe pas, on le crée
      profile = await Profile.create({ userId: id, name, bio, age, location });
      return res.status(201).json(profile); // Profil créé
    }
  } catch (error) {
    console.error(error); // Ajout d'un log d'erreur pour le débogage
    res.status(500).json({ message: 'Erreur de création ou de mise à jour du profil.' });
  }
};

module.exports = { getProfile, createOrUpdateProfile };
