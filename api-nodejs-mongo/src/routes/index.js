const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        rotas : {
            index:'localhost:3001',
            users:'localhost:3001/users',
            Registrar:'localhost:3001/register',
            Autenticar:'localhost:3001/authenticate',
        }
    })
});

module.exports = router;
