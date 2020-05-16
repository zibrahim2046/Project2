var path = require("path");

module.exports = function(app) {
  // viewed at http://localhost:3000
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views", "sandbox.html"));
  });
  app.get("/tipcalc", function(req, res) {
    res.sendFile(path.join(__dirname, "../views", "sandbox-tip-calc.html"));
  });
  app.get("/currency", function(req, res) {
    res.sendFile(path.join(__dirname, "../views", "currency-converter.html"));
  });

  app.get("/stocks", function(req, res) {
    res.sendFile(path.join(__dirname, "../views", "sandbox-stocks.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../views", "404-sandbox.html"));
  });
};
