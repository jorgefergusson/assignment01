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

/* GET project page. */
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Relevant Projects" });
});

/* GET service page. */
router.get("/service", function (req, res, next) {
  res.render("index", { title: "service" });
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
