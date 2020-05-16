// Get references to page elements

// The API object contains methods for each kind of request we'll make
var API = {
  saveUser: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/user",
      data: JSON.stringify(user)
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

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
$("#submit").click(function(event) {
  event.preventDefault();

  var user = {
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
      .trim()

    // description: $exampleDescription.val().trim()
  };

  // description: $exampleDescription.val().trim()

  // if (!(example.text && example.description)) {
  //   alert("You must enter an example text and description!");
  //   return;
  // }

  API.saveUser(user).then(function() {
    refreshUser();
  });

  // $exampleDescription.val("");
});

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
