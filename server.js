const express = require('express');
const sequelize = require('./config/database');
const User = require('./models/user');
const Profile = require('./models/profile');
const AuthToken = require('./models/authToken');
const Message = require('./models/message');
const Like = require('./models/like');
const authRoutes = require('./routes/authRoutes'); // Import des routes d'authentification

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/api/auth', authRoutes);

// Synchronisation des modèles avec la base de données
sequelize.sync({ force: true })  // Ceci va recréer toutes les tables à chaque démarrage du serveur (attention, les données seront perdues)
    .then(() => {
        console.log('Base de données synchronisée avec succès !');
        // Démarrer le serveur
        app.listen(PORT, () => {
            console.log(`Serveur en écoute sur le port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Impossible de synchroniser la base de données :', err);
    });
