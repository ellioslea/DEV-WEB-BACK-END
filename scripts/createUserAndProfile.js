const sequelize = require('../config/database'); // Connexion à la BDD
const User = require('../models/user'); // Import du modèle User
const Profile = require('../models/profile'); // Import du modèle Profile

(async () => {
    try {
        // Synchroniser les tables avec la base de données
        await sequelize.sync({ force: true }); // ATTENTION : Efface toutes les données existantes

        // Créer un utilisateur
        const user = await User.create({
            email: 'test@example.com',
            password: 'password123',
            username: 'testuser'
        });

        // Créer un profil associé à cet utilisateur
        await Profile.create({
            user_id: user.id, // Liaison avec l'utilisateur
            bio: 'Ceci est un profil de test.',
            age: 25,
            location: 'Paris'
        });

        console.log('Utilisateur et profil créés avec succès !');
    } catch (err) {
        console.error('Erreur lors de la création :', err);
    } finally {
        await sequelize.close(); // Fermer la connexion
    }
})();
