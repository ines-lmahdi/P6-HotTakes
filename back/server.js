const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();

const port = 3000;
const message = "Voici un message depuis le serveur.";

// Connexion à DB

connectDB();
const app = express();

// Middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// Lancer le serveur
app.listen(port, () => {
  console.log("Le server a demarré au port " + port);
});
