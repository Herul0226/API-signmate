const admin = require('../config/firebaseConfig');

const verifyFirebaseToken = async (idToken) => {
    return await admin.auth().verifyIdToken(idToken);
};

module.exports = { verifyFirebaseToken };
