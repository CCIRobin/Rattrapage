const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json());




const uri = "mongodb+srv://test:test@gestionutilisateur.idqh0.mongodb.net/GestionUtilisateur";


//Load mongoose
const mongoose = require("mongoose");

require("./userModele");
const Customer = mongoose.model("User");


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true}).then(() => {
    console.log("Connexion à la base ok");
})
    .catch((error) => {
        console.log("Connexion à la base échoué");
        console.error(error);
        process.exit(1);
    });

app.get('/', (req, res) => {
    res.send("Bonjour tout est ok")
});



app.get("/lastusers", (req, res) => {
    Customer.find().limit(3).then((customers) => {
        res.json(customers);
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
});


app.listen(3000, () => {
    console.log("tout est ok");
});