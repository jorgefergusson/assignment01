let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//connect to model

let Project = require("../models/project");

//manage all routes

router.get("/list", (req, res, next) => {
  Project.find((err, projectlist) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(productlist);
      res.render("project/list", {
        title: "Projects Info",
        ProjectList: projectlist,
      });
    }
  });
});

router.get("/", (req, res, next) => {
  res.render("project/list", { title: "Projects Info" });
});

router.get("/add", (req, res, next) => {
  res.render("project/add", { title: "Add Project" });
});

router.post("/add", (req, res, next) => {
  //getting data from form
  let newProject = Project({
    pTitle: req.body.ptitle,
    pDescription: req.body.pdescription,
    pCost: req.body.pcost,
    pDeadline: req.body.pdeadline,
  });

  console.log(newProject);
  //insert data:
  Project.create(newProject, (err, Project) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      console.log("Add:" + newProject);
      res.redirect("/project");
    }
  });
});

//Retrieve data from MongoDB and Open it in view (FORM)
router.get("/edit/:id", (req, res, next) => {
  let id = req.params.id;

  Project.findById(id, (err, projectToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //write code to display data in view
      res.render("project/edit", {
        title: "Edit Project",
        project: projectToEdit,
      });
    }
  });
});

//write code to store updated data into MongoDB
router.post("/edit/:id", (req, res, next) => {
  let id = req.params.id;

  let updatedProject = Project({
    _id: id,
    pTitle: req.body.ptitle,
    pDescription: req.body.pdescription,
    pCost: req.body.pcost,
    pDeadline: req.body.pdeadline,
  });

  Project.updateOne({ _id: id }, updatedProject, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/project");
    }
  });
});

router.get("/delete/:id", (req, res, next) => {
  let id = req.params.id;

  Project.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/project");
    }
  });
});
module.exports = router;
