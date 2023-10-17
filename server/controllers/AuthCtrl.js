const UserModel = require("../models/Auth");

const authCtrl = {
  signup: async (req, res, next) => {
    try {
      const user = await UserModel.findOne({ email: req.body.email });
      if (user) {
        res.status(409).json({ message: "Cette email est déjà prise." });
      } else {
        // l'user a bien envoyé les infos requises ?
        if (
          // Les champs OBLIGATOIRE a remplir
          req.body.name &&
          req.body.email &&
          req.body.age
        ) {
          // STEP 2 : créer le nouvel utilisateur
          const newUser = new UserModel({
            // Les champs que l'user à remplit (pas forcément obligatoire)
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
          });

          // STEP 3 : sauvegarder ce nouvel user dans la BDD
          await newUser.save();
          // ATTENTION !! Affiche le résultat sur Postman que quand on lance le server depuis l'api direct et non par la dépendance concurrently"" de Front-end (client)
          res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            age: newUser.age,
            email: newUser.email,
          });
          // return res.status(400).json(res);
          // res.json(res);
        } else {
          // l'utilisateur n'a pas envoyé les informations requises ?
          res.status(400).json({ message: "Missing parameters" });
        }
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  updateUserViaBodyId: async (req, res, next) => {
    try {
      const userUpdate = await UserModel.findByIdAndUpdate(
        req.body.id,
        {
          name: req.body.name,
          age: req.body.age,
          email: req.body.email,
        },
        { new: true }
      );

      console.log(userUpdate);
      res.json({ message: "user success updated" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateUserViaParamsId: async (req, res, next) => {
    try {
      const userUpdate = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          age: req.body.age,
          email: req.body.email,
        },
        { new: true }
      );

      console.log(userUpdate);
      res.json({ message: "user success updated" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  ///////////////////////
  //// GET ALL USERS ////
  ///////////////////////
  getAllUsers: async (req, res, next) => {
    try {
      // Second Step
      const users = await UserModel.find();

      // Compte les Docs correspondant au filtre
      const count = await UserModel.countDocuments();

      const response = {
        count: count,
        users: users,
      };

      res.json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = authCtrl;
