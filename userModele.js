const mongoose = require("mongoose");

mongoose.model("User", {
    id: {
        type: String,
        require: false
    },
    nom: {
        type: String,
        require: false
    },
    prenom: {
        type: String,
        require: false
    },
    age: {
        type: String,
        require: false
    }
}, 'User')