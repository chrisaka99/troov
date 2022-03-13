const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require('../config.json');
const User = require("../models/User");

function hash(password) {
    return bcrypt.hash(password, 10);
}

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