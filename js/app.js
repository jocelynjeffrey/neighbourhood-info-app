// var nytHeader$ = $('#nytHeader');
// var nytsnippet$ = $('#nytsnippet');

// var nytimesURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '&sort=newest&api-key=ae725b912afe40a38533ade8b5a38592';
// $.getJSON(nytimesURL, function (data){
//   nytHeader$.text('NYT articles about ' + cityStr );
//   nytsnippet$.text('test');

//   articles = data.response.docs;
//   articles.forEach(function(article){
//     nytsnippet$.text(article.headline.main);
//     // console.log(article.headline.main);
//   });
// }).fail(function(e){
//   nytHeader$.text('NYT article could not be loaded');
// });

var cityStr = 'Toronto';
var wikiElm$ = $('#wikiElm');
var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='
 + cityStr +
 '&format=json&callback=wikiCallback';

$.ajax({
  url: wikiUrl,
  dataType: "jsonp",
  //by default, jsonp is set as callback when jsonp is set as data type
  //jsonp: "callback",
  success: function(response) {
    var articleList = response[1];
    for(var i = 0; i < articleList.length; i++){
      articleStr = articleList[i];
      var url = 'http://en.wikipedia.org/wiki/' + articleStr;
      wikiElm$.append('<li><a href="' + url + '">' + 
        articleStr + '</a></li>');
    };
  }
})


var Location = function(locationObj){
  this.name = ko.observable(locationObj.name);
  this.title = ko.observable(locationObj.title);
  this.imgSrc = ko.observable(locationObj.imgSrc);
  this.imgAttribution = ko.observable(locationObj.imgAttribution);
  
  this.locationInfo = ko.computed(function() {
      
  }, this);

};


var AppViewModel = function(){
  var mapLocations = locations;
  var self = this;

  self.query = ko.observable(''); 
  self.locationsList = ko.observableArray([]);

  mapLocations.forEach(function(locationItem){
    self.locationsList.push( new Location (locationItem));
  });

  this.currentLocation = ko.observable( self.locationsList()[0]);

  self.showLocationInfo = function(clickedLocation){
    self.currentLocation(clickedLocation);
  }

  self.search = function(value) {
    // remove all the current locations, which removes them from the view
   self.locationsList.removeAll();

    for(var x in mapLocations) {            
      if(mapLocations[x].name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        self.locationsList.push(mapLocations[x]);
      }
    }
  
  }

  self.query.subscribe(self.search);

};

ko.applyBindings(new AppViewModel());


