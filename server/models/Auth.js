const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    age: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
