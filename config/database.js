const { Sequelize } = require('sequelize');

// Connexion à PostgreSQL
const sequelize = new Sequelize('dating_app', 'quenumgianna', 'DEVBACK123', {
    host: 'localhost',      // Hôte local où PostgreSQL est installé
    dialect: 'postgres',    // Type de base de données utilisé
    logging: false,         // Désactiver les logs SQL dans la console (optionnel)
});

// Exporter l'instance Sequelize pour être utilisée dans d'autres fichiers
module.exports = sequelize;
