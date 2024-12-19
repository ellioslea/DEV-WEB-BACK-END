// authController.js

// Fonction de connexion (login)
exports.login = (req, res) => {
  const { username, password } = req.body;

  // Logique de connexion, par exemple, vérifier si les informations sont valides
  if (username === 'user' && password === 'password') {
      return res.status(200).json({ message: 'Connexion réussie !' });
  } else {
      return res.status(401).json({ message: 'Nom d’utilisateur ou mot de passe incorrect.' });
  }
};

// Fonction d'enregistrement (register)
exports.register = (req, res) => {
  const { username, password } = req.body;

  // Logique d'enregistrement, par exemple, vérifier si le nom d'utilisateur existe déjà
  if (username === 'existingUser') {
      return res.status(400).json({ message: 'Nom d’utilisateur déjà utilisé.' });
  } else {
      // Enregistrer l'utilisateur (ici une simulation)
      return res.status(201).json({ message: 'Enregistrement réussi !' });
  }
};
