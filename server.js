var express = require("express");
var bodyParser = require("body-parser");
// var methodOverride = require("method-override");

var app = express();

app.use(express.static(process.cwd()+ "/public" ));

app.use(bodyParser.urlencoded({ extended: false}));

var exphs = require("express-handlebars");
app.engine("handlebars", exphs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var router = require("./controllers/burgers_controllers.js");
app.use("/", router);

var port = process.env.PORT || 4444;
app.listen(port);