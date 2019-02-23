const burger = require("./../models/burger.js");
const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let burgObj = {
            burger: data
        };
        console.log(burgObj);
        res.render("index", burgObj);
    });
});

router.post("/api/burger", function (req, res) {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
        req.body.burger_name, 0
      ], function (result) {
        res.json({ id: result.insertId });
      });
  });

router.put("/api/burger/:id", function (req, res) {
  var condition = "id= " + req.params.id;
  burger.updateOne({
    devoured: 1
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;

