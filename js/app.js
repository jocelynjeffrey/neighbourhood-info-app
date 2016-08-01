
var mapLocations = [
    {
      name: 'home',
      position: { lat: 43.684820, lng: -79.397876 },
      title: 'house!'
    },
    {
      name: 'Deer Park dog park',
      position: {lat: 43.6828344, lng: -79.4087779},
      title: 'dog park!'
    },
    {
      name: 'Rosedale Ravine',
      position: {lat: 43.68838, lng: -79.38768},
      title: 'ravine!'
    },
    {
      name: 'Rosedale Reservoir',
      position: {lat: 43.685557, lng: -79.390325},
      title: 'reservoir!'
    },
    {
      name: 'Summerhill',
      position: {lat: 43.6803975, lng: -79.3909196},
      title: 'summerhill!'
    },
  ]

// var mapLocations = getLocations();

var Location = function(data){
	this.name = ko.observable(data.name);
};

var AppViewModel = function(){
	var self = this;

	this.locationsList = ko.observableArray([]);

	mapLocations.forEach(function(locationItem){
		self.locationsList.push( new Location (locationItem));
	})

	// this.currentLocation = ko.observableArray( this.locationsList()[0]) ;

};

ko.applyBindings(new AppViewModel());
