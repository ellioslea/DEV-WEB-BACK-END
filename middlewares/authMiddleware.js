const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Récupérer le token depuis l'en-tête Authorization
  const token = req.headers['authorization']?.split(' ')[1];

  // Si aucun token n'est fourni, renvoyer un message d'erreur
  if (!token) {
    return res.status(403).json({ message: 'Accès interdit : aucun token fourni' });
  }

  // Vérifier le token avec la clé secrète
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token invalide' });
    }

    // Si tout est OK, décoder le token et l'ajouter à `req.user`
    req.user = decoded;
    next(); // Passer à la prochaine fonction middleware ou route
  });
};

module.exports = authMiddleware;
