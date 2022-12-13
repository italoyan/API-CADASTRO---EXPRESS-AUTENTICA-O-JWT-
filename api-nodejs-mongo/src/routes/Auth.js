const express = require('express');
const router = express.Router();
const {auth,register} = require('../controllers/AuthController');

router.post('/login', auth);
router.post('/register', register);

module.exports = router;
