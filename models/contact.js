let mongoose = require("mongoose");

// create a model class

let contactSchema = mongoose.Schema(
  {
    fname: String,
    lname: String,
    contact: String,
    email: String,
    message: String
  },
  {
    collection: "favourite_things"
  }
);

module.exports = mongoose.model("prateek", contactSchema);
