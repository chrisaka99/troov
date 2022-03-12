// imports
const express = require("express");
const cors = require("cors");
const indexRouter = require("./routes/index");

var app = express();

app.use(express.json());
app.use(cors());

// app.use("/api", indexRouter);
// // gérer les erreurs 404
// app.use(function (req, res, next) {
//     next(createError(404));
// });

app.use('/api', indexRouter);

// port
app.listen(4000, () => {
    console.log("Serveur à l'écoute sur le port 4000")
})

module.exports = app;