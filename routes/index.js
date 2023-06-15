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
router.get("/services", function (req, res, next) {
  res.render("services", { title: "services" });
});

/* GET about page. */
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact Me" });
});

router.post("/contact", (req, res, next) => {
  res.render("index", { title: "Welcome to Jorge Fergusson Portfolio" });
});

module.exports = router;
