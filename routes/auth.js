const express = require('express');
const { verifyToken } = require('../controllers/authController');

const router = express.Router();

router.post('/verifyToken', verifyToken);

module.exports = router;
