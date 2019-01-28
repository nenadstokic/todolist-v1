// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");

const now = moment();
const day = now.format("dddd");
const currentDay = now.day();

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){

  if(currentDay === 6 || currentDay === 0){
  //  day = "Weekend";
  } else {
  //  day = "Weekday";
  }

  res.render("list", {kindOfDay: day});

});

app.listen(3000, function(){
  console.log("Server started in port 3000");
});
