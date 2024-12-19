const { Profile } = require('../models');

exports.getProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({ where: { userId: req.params.userId } });
        if (!profile) return res.status(404).json({ message: 'Profile not found' });
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
