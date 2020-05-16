function theNews() {
    var queryURL = "https://finnhub.io/api/v1/news?category=general&token=bquu67nrh5rcepltr9jg";

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


          var newsImage = $("<img>");

          newsImage.attr("src", results[i].image);

          newsImage.attr("style", "width:500px");

          newsDiv.append(h4);
          newsDiv.append(links);
          newsDiv.append(newsImage);
          newsDiv.append("<hr>");

          newsDiv.append(links);


          $("#allNews").append(newsDiv);


        }
      });
  };

  theNews();



//   function companyProfile() {
//     var stockCompanies = ["MSFT", "AAPL", "NVDA", "CSCO", "NFLX", "INTC"];
//     var queryURL = "https://finnhub.io/api/v1/stock/profile2?symbol=" + stockCompanies + "&token=bquu67nrh5rcepltr9jg";

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//       .then(function(response) {
//         var results = response;

//         for (var i = 0; i < results.length; i++) {

//           var profileDiv = $("<div>");

//           var companyLogo = $("<img>");
//           companyLogo.attr("src", results[i].logo);
//           companyLogo.attr("style", "width:100px");

//           var companyName = $("<h2>").text(results[i].name);

//           var companyTicker = $("<h2>").text(results[i].ticker);

//           var companyExchange = $("<h2>").text(results[i].exchange);

//           var companyShareOutstanding = $("<h2>").text(results[i].shareOutstanding);

          
//           profileDiv.append(companyLogo);
//           profileDiv.append(companyName);
//           profileDiv.append(companyTicker);
//           profileDiv.append(companyExchange);
//           profileDiv.append(companyShareOutstanding);
//           profileDiv.append("<hr>");

//           $("#companyProfiles").append(profileDiv);
//         }
//       });
//   };

//   companyProfile();