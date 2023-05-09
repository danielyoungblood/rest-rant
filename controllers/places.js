const router = require("express").Router();
const places = require("../models/places.js");

//this defines a route (path) to /places using the GET method
//with express using the name router then a . followed by the http method defines a path
router.get("/", (req, res) => {
  res.render("places/index", { places });
});

router.post("/", (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

//this defines a route (path) to /places/new
//router.get adds the "/places" to this path that ends with "/new" giving us the complete path as "/places/new"
router.get("/new", (req, res) => {
  res.render("places/new");
});

module.exports = router;
