var mapLocations = locations;

var Location = function(locationObj){
  this.name = ko.observable(locationObj.name);
  this.title = ko.observable(locationObj.title);

  
  this.locationInfo = ko.computed(function() {
      alert(this)
  }, this);


};


var AppViewModel = function(){
  var self = this;
  self.query = ko.observable('');
  
  self.locationsList = ko.observableArray([]);
  // this.catList = ko.observableArray([]);

  mapLocations.forEach(function(locationItem){
    self.locationsList.push( new Location (locationItem));
  });

  this.currentLocation = ko.observable( self.locationsList()[0]);

  self.updateLocation = function(clickedLocation){
    self.currentLocation(clickedLocation);
  }

  this.showLocationInfo = function(){
    self.currentLocation().locationInfo();
  };


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


