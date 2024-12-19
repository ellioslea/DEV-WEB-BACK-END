const crypto = require('crypto');

/**
 * Génère un avatar par défaut pour un utilisateur
 * @param {string} username - Le nom d'utilisateur.
 * @returns {string} - URL de l'avatar généré.
 */
const generateAvatar = (username) => {
    const hash = crypto.createHash('md5').update(username).digest('hex');
    return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
};

/**
 * Calcule la distance entre deux coordonnées géographiques
 * Utilise la formule de haversine pour calculer la distance.
 * @param {number} lat1 - Latitude du point 1.
 * @param {number} lon1 - Longitude du point 1.
 * @param {number} lat2 - Latitude du point 2.
 * @param {number} lon2 - Longitude du point 2.
 * @returns {number} - Distance en kilomètres.
 */
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degrees) => (degrees * Math.PI) / 180;
    const R = 6371; // Rayon moyen de la Terre en km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance en km
};

/**
 * Valide un email au format correct
 * @param {string} email - Adresse email.
 * @returns {boolean} - True si l'email est valide, sinon false.
 */
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Vérifie si un mot de passe respecte les critères de sécurité
 * @param {string} password - Le mot de passe.
 * @returns {boolean} - True si le mot de passe est sécurisé, sinon false.
 */
const isValidPassword = (password) => {
    // Doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
};

/**
 * Formate les données utilisateur pour garantir une cohérence
 * @param {Object} user - Données utilisateur brutes.
 * @returns {Object} - Données utilisateur formatées.
 */
const normalizeUserData = (user) => {
    return {
        username: user.username.trim(),
        email: user.email.toLowerCase(),
        bio: user.bio?.trim() || '',
        location: user.location?.trim() || '',
    };
};

module.exports = {
    generateAvatar,
    calculateDistance,
    isValidEmail,
    isValidPassword,
    normalizeUserData,
};
