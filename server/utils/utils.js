const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require('../config.json');
const User = require("../models/User");

// hash du mot de passe
function hash(password) {
    return bcrypt.hash(password, 10);
}

// on recupère l'utilisateur inscrit par son  e-mail
// son compare le mot de passe entré et celui d'origine, s'ils matchent on cré un token de connexion qu'on retourne au client
async function login({ email, password }) {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
        return {
            ...user.toJSON(),
            token
        };
    }
}

module.exports = { hash, login };