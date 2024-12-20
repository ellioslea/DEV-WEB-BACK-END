const express = require('express');
require('dotenv').config(); // Charger les variables d'environnement
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Ajouter vos routes ici, par exemple :
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const userRoutes = require('./routes/userRoutes');

// Utilisation des routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/users', userRoutes);

// Définir le port depuis .env ou utiliser un port par défaut
const PORT = process.env.PORT || 3000;

// Mettre le serveur en écoute
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Exporter l'application pour les tests
