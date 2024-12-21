const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assurez-vous que le chemin est correct

const Message = sequelize.define('Message', {
    sender_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users', // Nom de la table "Users" référencée
            key: 'id',
        }
    },
    receiver_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users', // Nom de la table "Users" référencée
            key: 'id',
        }
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
}, {
    timestamps: false, // Désactive les champs `updatedAt` et `createdAt` automatiques si tu veux gérer manuellement
    tableName: 'Messages', // Nom de la table dans la BDD
});

module.exports = Message;
