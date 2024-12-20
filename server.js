const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const sequelize = require('./config/database');

// Charger les variables d'environnement depuis .env
dotenv.config();

const app = express();

// Middleware pour analyser les corps des requêtes JSON
app.use(express.json());

// Utilisation des routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/profiles', profileRoutes);

// Connexion à la base de données avec Sequelize
sequelize.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.log('Database connection error:', err));

// Lancer le serveur sur le port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
