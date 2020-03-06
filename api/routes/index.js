var express = require("express");
var router = express.Router();
//for now use a filereader with json file for the data
/* GET home page. */
router.get("/invoice", function(req, res, next) {
  res.send("index", { title: "Express" });
});

module.exports = router;
