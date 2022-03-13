// imports
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const indexRouter = require("./routes/index");

var app = express();

app.use(express.json());
app.use(cors());

// connexion a la base de données mongo
mongoose
    .connect("mongodb://localhost:27017/troov_db", { useNewUrlParser: true })
    .then(() => {
        app.use('/api', indexRouter); // route api
        app.listen(4000, () => {
            console.log("Serveur à l'écoute sur le port 4000")
        })
    })

module.exports = app;