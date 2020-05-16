var user = {};

var API = {
  saveUser: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json",
      },
      type: "POST",
      url: "api/user",
      data: JSON.stringify(user),
    });
  },
  getUser: function() {
    return $.ajax({
      url: "api/user",
      type: "GET",
    });
  },
  deleteUser: function(id) {
    return $.ajax({
      url: "api/user/" + id,
      type: "DELETE",
    });
  },
};

$("#submit").click(function(event) {
  event.preventDefault();

  user = {
    name: $("#name")
      .val()
      .trim(),
    salary: $("#salary")
      .val()
      .trim(),
    rent: $("#rent")
      .val()
      .trim(),
    gas: $("#gas")
      .val()
      .trim(),
    groceries: $("#groceries")
      .val()
      .trim(),
    utilities: $("#utilities")
      .val()
      .trim(),
    phone: $("#phone")
      .val()
      .trim(),
    car: $("#car")
      .val()
      .trim(),
    misc: $("#misc")
      .val()
      .trim(),
    entertainment: $("#entertainment")
      .val()
      .trim(),
  };

  API.saveUser(user);
  budgetCalc();
});

//var calculation;

function budgetCalc() {
  var reducer = function(accumulator, currentValue) {
    accumulator + currentValue;
  };
  // var monthlySalary = user.salary / 12;
  var rawTotalExpenses = [
    user.rent,
    user.gas,
    user.groceries,
    user.utilities,
    user.phone,
    user.car,
    user.misc,
    user.entertainment
  ];

  var newTotalExpenses = [];

  for (var i = 0; i < rawTotalExpenses.length; i++) {
    var parsed = parseInt(rawTotalExpenses[i]);
    newTotalExpenses.push(parsed);
  }
  console.log(newTotalExpenses.reduce(reducer));
  // var calculation = monthlySalary - totalExpenses;
  console.log(newTotalExpenses);
}
