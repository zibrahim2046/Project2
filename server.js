require("dotenv").config();
var express = require("express");
// var exphbs = require("express-handlebars");


var db = require("./models");

var app = express();

// Connection to JAWSDB

// var connection = mysql.createConnection({
//   host: "ijj1btjwrd3b7932.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   user: "n6j2fiiymeuvo9ah",
//   password: "ojqlqkjdwu5sxgiw",
//   database: "dz6bprii3iiolknx"
// });

// connection.connect(function(err) {
//   if (err) {
//     throw err;
//   }
//   console.log("Connected!");
// });

var PORT = process.env.PORT || 3000;


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname));

// Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:%s/ in your browser.`);
  });
});

module.exports = app;
