const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

// const userSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   birthDate: {
//     type: Date,
//   },
// });

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
