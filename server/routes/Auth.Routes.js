const router = require("express").Router();
// CONTROLLERS
const authCtrl = require("../controllers/AuthCtrl");

// router.get("/", (req, res) => {
//   res.json("Bienvenue sur l'API");
// });
router.route("/").get(authCtrl.getAllUsers);
router.post("/signup", authCtrl.signup);
router.put("/updateUserViaBodyId", authCtrl.updateUserViaBodyId);
router.put("/updateUserViaParamsId/:id", authCtrl.updateUserViaParamsId);
module.exports = router;
