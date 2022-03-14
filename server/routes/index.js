const express = require('express')
const User = require("../models/User");
const Item = require('../models/Item')
const { hash } = require('../utils/utils')

const { login } = require('../utils/utils')

const {
    validateRegister
} = require("../middleware/user");

const router = express.Router()



router.get('/', (req, res, next) => {
    console.log('index');
});

// inscription d'un utilisateur
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

// connexion utilisateur
router.post("/login", async function (req, res, next) {
    login(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Les identifiants sont incorrects' }))
        .catch(err => next(err));
});

// ajout d'un objet
router.post("/addItem", function (req, res, next) {
    const nom = req.body.nom;
    const description = req.body.description;

    const item = Item({
        nom: nom,
        description: description
    })

    item
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Erreur de création de l'objet",
            });
        });
});


// affichage d'objets
router.get("/listItems", function (req, res, next) {
    Item.find()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Erreur lors de la recupération des objets",
            });
        })
});

module.exports = router;