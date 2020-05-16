function theNews() {
    var queryURL = "https://finnhub.io/api/v1/news?category=general&token=bqsv227rh5re54ulror0";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response;

        for (var i = 0; i < results.length; i++) {

          var newsDiv = $("<div>");

          var h4 = $("<h4>").text(results[i].headline);

        //   var readMore = $(`<a href=" ${ + results[i].url + } ">Read More...</a>`);

          var newsImage = $("<img>");
          newsImage.attr("src", results[i].image);
          newsImage.attr("style", "width:250px");

          newsDiv.append(h4);
        //   newsDiv.append(readMore);
          newsDiv.append(newsImage);

          $("#allNews").append(newsDiv);
        }
      });
  };

  theNews();