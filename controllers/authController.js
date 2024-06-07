const { verifyFirebaseToken } = require('../services/firebaseService');

const verifyToken = async (req, res) => {
    const idToken = req.body.idToken;

    try {
        const decodedToken = await verifyFirebaseToken(idToken);
        res.status(200).send(decodedToken);
    } catch (error) {
        res.status(401).send('Invalid token');
    }
};

module.exports = { verifyToken };
