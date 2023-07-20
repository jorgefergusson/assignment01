let mongoose = require("mongoose");

//Create model of product
let contactModel = mongoose.Schema(
  {
    FirstName: String,
    LastName: String,
    Email: String,
    Message: String,
  },
  {
    collection: "contact",
  }
);

module.exports = mongoose.model("Contact", contactModel);
