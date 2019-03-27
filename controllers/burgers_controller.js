//Inside the burgers_controller.js file, import the following:

// Express
var express = require("express");
var router = express.Router();

// import the model to use its database functions burger.js
var burger = require("../models/burger.js");

console.log("made it to burger_controller.js");

// Create the router for the app, and export the router at the end of your file.

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burger", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
            req.body.burger_name, req.body.devoured
        ], function () {
            res.redirect("/");
        });
        console.log(req.body.devoured+" this is req.body.devoured");
});
router.put("/:id", function (req, res) {
    console.log(req);
    var condition = "id = " + req.params.id;
    console.log(condition + "put");
    console.log("condition", condition);
    burger.update({
        devoured: req.body.devoured
    }, condition, function () {
        res.redirect("/");

    });
});
router.delete("/:id", function (req, res) {
    var condition = "id = " + req.params.id;
console.log(condition+ "delete");
    burger.delete(condition, function () {
        res.redirect("/");
    });
});
//export routes for server.js
module.exports = router;