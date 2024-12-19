const express = require('express');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const { sequelize } = require('./models');  // Importer l'instance Sequelize

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/profiles', profileRoutes);

// Synchroniser la base de données avant de démarrer le serveur
sequelize.sync({ force: false })  // Force true pour réinitialiser la BDD (utiliser avec précaution)
  .then(() => {
    console.log('Database synced!');
    
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
