const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json());


const uri = "mongodb+srv://test:test@gestionutilisateur.idqh0.mongodb.net/GestionUtilisateur?retryWrites=true&w=majority";


//Load mongoose
const mongoose = require("mongoose");

const Users = mongoose.model('User', mongoose.Schema({
    id: String,
    nom: String,
    prenom: String,
    age: String
  }));



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
    res.send("Bonjour")
});



app.get("/lastusers",  (req, res) => {
  /*  Customer.find().then((customers) => {
        console.log(customers)
        res.json(customers);
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });*/
    let toto =  Users.find()
    console.log(toto)
    res.json(toto)
});


app.listen(3000, () => {
    console.log("tout est ok");
});
