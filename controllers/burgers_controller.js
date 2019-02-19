const burger = require("./models/burger.js");
const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        let burgObj = {
            burger: data
        };
        console.log(burgObj);
        res.render("index", burgObj);
    });
});



