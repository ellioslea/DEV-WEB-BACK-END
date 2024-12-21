const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assurez-vous que le chemin est correct

const Like = sequelize.define('Like', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users', // Nom de la table "Users" référencée
            key: 'id',
        }
    },
    liked_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users', // Nom de la table "Users" référencée
            key: 'id',
        }
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
}, {
    timestamps: false, // Désactive les champs `updatedAt` et `createdAt` automatiques si tu veux gérer manuellement
    tableName: 'Likes', // Nom de la table dans la BDD
});

module.exports = Like;
