// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");

// const now = moment();
// const day = now.format("dddd");
// const currentDay = now.day();

const app = express();

app.use(bodyParser.urlencoded({extended:"true"}));

app.set("view engine", "ejs");

app.get("/", function(req, res){

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("sr", options);

  // if(currentDay === 6 || currentDay === 0){
  // //  day = "Weekend";
  // } else {
  // //  day = "Weekday";
  // }

  res.render("list", {kindOfDay: day});

});

app.post("/", function(req, res){
  var input = req.body.newItem;
    console.log(input);
});

app.listen(3000, function(){
  console.log("Server started in port 3000");
});
