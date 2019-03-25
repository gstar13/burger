//nside burger.js, import orm.js into burger.js

//Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
var orm = require("../config/orm.js");
console.log("made it to models.burger.js");
var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
      console.log(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};



//Export the database functions for the controller at the end of the burger.js file.
module.exports = burger;