const express = require("express");
const router = express.Router();

function getUsers(req, res, next) {
    return res.json({
        users:['Teste']
    });
}

module.exports = {
    getUsers
};