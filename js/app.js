var mapLocations = locations;

var Location = function(data){
	this.name = ko.observable(data);
};

var AppViewModel = function(){
	var self = this;

	self.locationsList = ko.observableArray();

	mapLocations.forEach(function(locationItem){
		self.locationsList.push( new Location (locationItem));
	})

	self.currentLocation = ko.observableArray( self.locationsList()) ;

};

ko.applyBindings(new AppViewModel());
