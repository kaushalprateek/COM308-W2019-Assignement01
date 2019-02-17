//Prateek  kaushal 300985002 SEC: 008
let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("templates/home.ejs", { title: "Home" });
});
router.get("/about", function(req, res, next) {
  res.render("templates/about.ejs", { title: "About" });
});
router.get("/contact", function(req, res, next) {
  res.render("templates/contact.ejs", { title: "Contacts" });
});
router.get("/projects", function(req, res, next) {
  res.render("templates/projects.ejs", { title: "Projects" });
});
router.get("/services", function(req, res, next) {
  res.render("templates/services.ejs", { title: "Services" });
});
module.exports = router;
