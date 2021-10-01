const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
require("./userModele");

app.use(cors())
app.use(bodyParser.json());

const mongoose = require("mongoose");

const User = mongoose.model("User");

const uri = "mongodb+srv://test:test@gestionutilisateur.idqh0.mongodb.net/GestionUtilisateur";



mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true}).then(() => {
  console.log("Connexion à la base réussie");
})
  .catch((error) => {
      console.log("Connexion à la base echouée");
      console.error(error);
      process.exit(1);
  });

app.get('/', (req, res) => {
  res.send("tout est ok")
});

app.get("/users", (req, res) => {
  User.find().then((user) => {
      console.log('Users : ', user)
      res.json(user);
  }).catch((err) => {
      if (err) {
          throw err;
      }
  });
});

app.listen(3000, () => {
  console.log("Cela fonctionne");
});


