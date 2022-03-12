const mongoose = require("mongoose");
const ItemSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    }
});
const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;