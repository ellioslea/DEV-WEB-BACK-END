const { Sequelize } = require('sequelize');

// Configurer la connexion à la base de données
const sequelize = new Sequelize('dating_app', 'DB_USER', 'DB_PASSWORD', {
    host: 'localhost',
    dialect: 'mysql', // ou 'postgres', 'sqlite', etc.
});

module.exports = sequelize;
