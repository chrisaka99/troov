const express = require('express')
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Item = require('../models/Item')

const router = express.Router()



router.get('/', (req, res, next) => {
    console.log('index');
})


module.exports = router;