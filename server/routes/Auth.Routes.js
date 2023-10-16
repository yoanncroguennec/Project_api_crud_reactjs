const router = require("express").Router();
// CONTROLLERS
const authCtrl = require("../controllers/AuthCtrl");

// router.get("/", (req, res) => {
//   res.json("Bienvenue sur l'API");
// });
router.post("/signup", authCtrl.signup);

module.exports = router;
