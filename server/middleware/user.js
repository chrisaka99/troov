module.exports = {
    validateRegister: async (req, res, next) => {
        body = req.body;

        if (!body.password || body.password.length < 5) {
            res.send({
                msg: "Le mot de passe doit avoir au moins 5 caractères",
            });
        }

        if (!body.email) {
            res.send({
                msg: "Entrez une adresse mail",
            });
        } else {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(body.email) === false) {
                return res.send({
                    msg: "Entrez une adresse mail valide",
                });
            }
        }

        next();
    },
};