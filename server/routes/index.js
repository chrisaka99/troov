const express = require('express')
const User = require("../models/User");
const Item = require('../models/Item')
const hash = require('../utils/utils')
const {
    validateRegister
} = require("../middleware/user");

const router = express.Router()



router.get('/', (req, res, next) => {
    console.log('index');
});

// ajout d'utilisateur
router.post('/addUser', validateRegister, async (req, res, next) => {
    var email = req.body.email;
    var pass = await hash(req.body.password);
    const user = new User({
        email: email,
        password: pass,
    });

    user
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Erreur de création de l'utilisateur",
            });
        });
});


module.exports = router;