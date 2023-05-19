const router = require("express").Router();
const db = require("../models");

//this defines a route (path) to /places using the GET method
//with express using the name router then a . followed by the http method defines a path
router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

//this defines a route (path) to /places/new
//router.get adds the "/places" to this path that ends with "/new" giving us the complete path as "/places/new"
router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});


router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});

router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

module.exports = router;
