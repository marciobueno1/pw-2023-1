var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/exemploJS", function (req, res, next) {
  res.render("indexJS", { title: "Exemplo JS" });
});

module.exports = router;
