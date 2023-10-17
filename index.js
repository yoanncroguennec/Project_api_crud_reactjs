// const app = require("../app/app");
require("dotenv").config();
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

// ROUTES UNDEFINED
app.all("*", (req, res) => {
  res.status(404).json({ message: "Cette route n'existe pas" });
});


//  MONGODB
// const mongoose = require("mongoose");
// mongoose.connect(
//   process.env.MONGODB_URI,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log("Connected to MongoDB");
//   }
// );
// mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGODB_URI);

// RUN SERVER
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server started 🧦 ${PORT}`);
});
