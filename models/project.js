let mongoose = require("mongoose");

//Create model of product
let projectModel = mongoose.Schema(
  {
    name: String,
    company: String,
    price: Number,
  },
  {
    collection: "Projects",
  }
);

module.exports = mongoose.model("Project", projectModel);
