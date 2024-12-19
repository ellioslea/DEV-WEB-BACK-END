const User = require('../models/user');

// Création d'un nouvel utilisateur
const createUser = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const newUser = await User.create({ email, password, role });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Erreur de création de l\'utilisateur' });
  }
};

// Suppression des comptes inactifs
const deleteInactiveUsers = async () => {
  await User.destroy({
    where: {
      lastLogin: { [Sequelize.Op.lt]: new Date() - 30 * 24 * 60 * 60 * 1000 }, // 30 jours d'inactivité
    },
  });
};

module.exports = { createUser, deleteInactiveUsers };
