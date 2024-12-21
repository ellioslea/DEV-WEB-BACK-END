const express = require('express');
const sequelize = require('./config/database'); // Connexion Sequelize
const User = require('./models/user'); // Importer les modèles
const Profile = require('./models/profile');
const AuthToken = require('./models/authToken');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Tester la connexion à PostgreSQL
sequelize.authenticate()
    .then(() => {
        console.log('Connexion à la base de données réussie !');

        // Synchroniser les modèles avec la base de données
        sequelize.sync({ force: false }) // Remplace `false` par `true` si tu veux recréer les tables à chaque démarrage (développement uniquement)
            .then(() => {
                console.log('Les tables ont été synchronisées avec succès !');
                
                // Démarrer le serveur une fois la synchronisation réussie
                app.listen(PORT, () => {
                    console.log(`Serveur en écoute sur le port ${PORT}`);
                });
            })
            .catch((err) => {
                console.error('Erreur lors de la synchronisation des modèles :', err);
            });
    })
    .catch((err) => {
        console.error('Impossible de se connecter à la base de données :', err);
    });
