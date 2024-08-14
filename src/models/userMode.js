const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "admin", "superAdmin"],
    default: "admin",
  },
});

const userModel = model("users", userSchema);

module.exports = userModel;

// what are the this.props.

// Schema ->

//     username -> string , required:true
//     email: string , requried:true
//     password:
