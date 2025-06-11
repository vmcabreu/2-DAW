const db = require("../config/database");
var express = require('express');
var router = express.Router();

/* Home  */
router.get("/", async function (req, res, next) {
  const { rows: wished } = await db.query(
    "SELECT * FROM places WHERE visited=false"
  );
  const { rows: visited } = await db.query(
    "SELECT * FROM places WHERE visited=true"
  );
  res.render("index", { wished, visited });
});
/*Wished*/
router.get("/wished", async function (req, res, next) {
  const { rows: wished } = await db.query(
    "SELECT * FROM places WHERE visited=false"
  );
  res.render("wished", { wished });
});
/*Visited*/
router.get("/visited", async function (req, res, next) {
  const { rows: visited } = await db.query(
    "SELECT * FROM places WHERE visited=true"
  );
  res.render("visited", {visited });
});
module.exports = router;
