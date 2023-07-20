let mongoose = require("mongoose");

//Create model of product
let projectModel = mongoose.Schema(
  {
    pTitle: String,
    pDescription: String,
    pCost: Number,
    pDeadline: String,
  },
  {
    collection: "project",
  }
);

module.exports = mongoose.model("Project", projectModel);
