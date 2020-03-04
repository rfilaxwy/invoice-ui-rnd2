var express = require("express");
var router = express.Router();
//for now use a filereader with json file for the data
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
