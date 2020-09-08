const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

var items = [];
let workitems = [];

app.set('view engine', 'ejs'); // WHY SET NOT USE?
app.use(bodyParser.urlencoded({extended: true})); // needed code to use parser
app.use(express.static("public"));

app.get("/", function(req, res){

    let day = date;

    res.render("list", {listTitle: day, newListItems: items}); // render a file "list"(has extension ejs) in folder views (automatic) and for the key "kindOfDay"

});




/* var currentDay = today.getDay();
var day = "";

switch (currentDay) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
  console.log("error");
};
*/



app.post("/", function(req, res){

  let item = req.body.newItem; // grabing value what is in the form "name"= newItem, tapping into te value - have to have body parser (line 7)

  if (req.body.title === "work"){
  workitems.push(item);
  res.redirect("/work");
} else {
  items.push(item);
  res.redirect("/"); //redirects to the app.get part where it finds the res.render and executes that code
}

});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workitems});
});
/*
if (currentDay === 6 || currentDay === 0) { //getDay gets the day of the week as a number
  // res.write("Yay its the weekend"); // response is to send the message
  day = "weekend";
} else {
  day = "weekday";
}
res.render("list", {kindOfDay: day}) // render a file "list"(has extension ejs) in folder views (automatic) and for the key "kindOfDay"
});
*/
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
