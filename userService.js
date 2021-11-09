const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
require("./userModele");

app.use(cors())
app.use(bodyParser.json());

const mongoose = require("mongoose");

const User = mongoose.model("User");

//const uri = "mongodb+srv://test:test@cesi.idqh0.mongodb.net/Users";
const uri = "mongodb://admin:root@mongo/test?authSource=admin";



app.get('/', (req, res) => {
  res.send("Hello tout le monde !")
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

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Connexion à la base réussie");
    app.listen(3000, () => {
      console.log("Cela fonctionne");
    });
  })
.catch((error) => {
      console.log("Connexion à la base echouée");
      console.error(error);
      process.exit(1);
  })

