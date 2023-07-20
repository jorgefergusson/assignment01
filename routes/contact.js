let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//connect to model

let Contact = require("../models/contact");

//manage all routes

router.get("/", (req, res, next) => {
  console.log("Test / ");
  res.render("contact/add", { title: "Contact Me" });
});

router.get("/add", (req, res, next) => {
  console.log("Test /add ");
  res.render("contact/add", { title: "Contact me" });
});

router.post("/add", (req, res, next) => {
  //getting data from form
  let newContact = Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    message: req.body.message,
  });

  console.log(newContact);
  //insert data:
  Contact.create(newContact, (err, Contact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      console.log("Add:" + newContact);
      res.redirect("/contact");
    }
  });
});
router.post("/", (req, res, next) => {
  //getting data from form
  let newContact = Contact({
    FirstName: req.body.firstname,
    LastName: req.body.lastname,
    Email: req.body.email,
    Message: req.body.message,
  });

  console.log(req.body);
  //insert data:
  Contact.create(newContact, (err, Contact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      console.log("Add:" + newContact);
      res.redirect("/contact");
    }
  });
});

module.exports = router;
