const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.json("Bienvenue sur l'API");
  // res.status(300).json({ message: "Bienvenue sur l'API" });
});
// app.use("/api/movies", require("../server/routes/Movies.Routes"));
app.use("/api/auth", require("../server/routes/Auth.Routes"));

// ROUTES UNDEFINED
app.all("*", (req, res) => {
  res.status(404).json({ message: "Cette route n'existe pas" });
});

module.exports = app;
