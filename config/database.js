const { Sequelize } = require('sequelize');

// Crée une instance Sequelize connectée à PostgreSQL
const sequelize = new Sequelize('dev_backend', 'quenumgianna', 'DEVBACK123', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, // Désactive les logs SQL dans la console
});

// Tester la connexion
sequelize.authenticate()
    .then(() => {
        console.log('Connexion à la base de données réussie !');
    })
    .catch(err => {
        console.error('Erreur de connexion à la base de données :', err);
    });

module.exports = sequelize;
