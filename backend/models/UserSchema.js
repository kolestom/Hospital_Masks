const mongoose = require("mongoose");
import Hospital from "./Hospital";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  hospitalIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",   //ez kell-e vagy kivehetjük????
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
