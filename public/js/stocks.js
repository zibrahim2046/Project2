function theNews() {
    var queryURL = "https://finnhub.io/api/v1/news?category=general&token=bqsv227rh5re54ulror0";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response;

        for (var i = 0; i < 5; i++) {

          var newsDiv = $("<div>")
          .addClass("news");

          var h4 = $("<h4>").text(results[i].headline);

          var links = $("<h6>").text(results[i].url);

          var links = $("<a>")
          .text("Read More")
          .addClass("btn-primary btn-stocks-link")
          .attr("href", results[i].url)

          var rule = '<hr />'


          var newsImage = $("<img>");

          newsImage.attr("src", results[i].image);

          newsImage.attr("style", "width:500px");

          newsDiv.append(h4);
        //   newsDiv.append(readMore);
          newsDiv.append(newsImage);

          newsDiv.append(links);


          $("#allNews").append(newsDiv);
          $("#allNews").append(rule);


        }
      });
  };

  theNews();