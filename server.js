const express = require('express');
const sequelize = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Tester la connexion à PostgreSQL
sequelize.authenticate()
    .then(() => {
        console.log('Connexion à la base de données réussie !');
        // Démarrer le serveur si la connexion réussit
        app.listen(PORT, "localhost",() => {
            console.log(`Serveur en écoute sur le port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Impossible de se connecter à la base de données :', err);
    });
