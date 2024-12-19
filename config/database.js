const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME, // Nom de la base de données
    process.env.DB_USER, // Utilisateur de la base de données
    process.env.DB_PASSWORD, // Mot de passe de l'utilisateur
    {
        host: process.env.DB_HOST, // Hôte de la base de données
        dialect: 'mysql', // Type de base de données (MySQL, PostgreSQL, etc.)
        logging: false, // Désactiver les logs SQL pour éviter l'encombrement
        pool: {
            max: 5, // Nombre maximum de connexions dans le pool
            min: 0, // Nombre minimum de connexions dans le pool
            acquire: 30000, // Temps maximum (en ms) pour acquérir une connexion
            idle: 10000, // Temps maximum (en ms) qu'une connexion peut rester inactive avant d'être libérée
        },
        dialectOptions: {
            timezone: 'Z', // Gestion du fuseau horaire pour MySQL
        },
        define: {
            timestamps: true, // Ajoute automatiquement createdAt et updatedAt à chaque modèle
        },
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;