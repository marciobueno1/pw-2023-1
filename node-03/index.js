const express = require("express");
const app = express();

let contador = 0;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/ola", function (req, res) {
  res.send("Olá Mundo!");
});

app.get("/contador", function (req, res) {
  ++contador;
  res.send({ contador });
});

app.listen(3000);
