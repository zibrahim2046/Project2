// Get references to page elements

var name = $("#name");
var salary = $("#salary");
var rent = $("#rent");
var gas = $("#gas");
var groceries = $("#groceries");
var utilities = $("#utilities");
var phone = $("#phone");
var car = $("#car");
var misc = $("#misc");
var entertainment = $("#entertainment");

var user = {
  name: name.val().trim(),
  salary: salary.val().trim(),
  rent: rent.val().trim(),
  gas: gas.val().trim(),
  groceries: groceries.val().trim(),
  utilities: utilities.val().trim(),
  phone: phone.val().trim(),
  car: car.val().trim(),
  misc: misc.val().trim(),
  entertainment: entertainment.val().trim()

  // description: $exampleDescription.val().trim()
};


// The API object contains methods for each kind of request we'll make
var API = {
  saveUser: function(userInfo) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/user",
      data: JSON.stringify(userInfo)
    });
  },
  getUser: function() {
    return $.ajax({
      url: "api/user",
      type: "GET"
    });
  },
  deleteUser: function(id) {
    return $.ajax({
      url: "api/user/" + id,
      type: "DELETE"
    });
  }
};

// refreshUser gets new user from the db and repopulates the list
var refreshUser = function() {
  API.getUser().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  

    // description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  name.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
