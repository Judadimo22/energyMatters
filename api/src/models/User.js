const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    roll: {
      type: String,
      enum: ["admin", "user", "superAdmin"],
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);