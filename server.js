const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const sequelize = require('./config/database');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/profiles', profileRoutes);

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Database connection error:', err));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
