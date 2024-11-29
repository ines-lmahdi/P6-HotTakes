const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const message = "Voici un message depuis le serveur.";

// app.get("/post", (req, res) => {
//   res.json({ message });
// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// Lancer le serveur
app.listen(port, () => {
  console.log("Le server a demarré au port " + port);
});
