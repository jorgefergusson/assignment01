var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Welcome to Jorge Fergusson Portfolio" });
});

/* GET about page. */
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});

/* GET service page. */
router.get("/services", function (req, res, next) {
  res.render("services", { title: "services" });
});

module.exports = router;
