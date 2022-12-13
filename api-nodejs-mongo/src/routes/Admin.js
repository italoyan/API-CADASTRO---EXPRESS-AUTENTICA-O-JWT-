const express = require('express');
const router = express.Router();
const {getUsers} = require('../controllers/AdminController');
const authenticateMiddleware = require("../middlewares/authenticate");

router.get('/',authenticateMiddleware, getUsers);

module.exports = router;
