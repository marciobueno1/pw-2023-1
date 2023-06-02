var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Got a GET request");
});

router.post("/", function (req, res, next) {
  res.send("Got a POST request");
});

router.put("/", function (req, res, next) {
  res.send("Got a PUT request");
});

router.delete("/", function (req, res, next) {
  res.send("Got a DELETE request");
});

module.exports = router;
