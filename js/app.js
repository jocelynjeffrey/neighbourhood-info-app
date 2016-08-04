var mapLocations = locations;

var Location = function(locationObj){
  this.name = ko.observable(locationObj.name);
  this.title = ko.observable(locationObj.title);
};

function Product(name, rating) {
    this.name = name;
    this.userRating = ko.observable(rating || null);
}

var AppViewModel = function(){
  var self = this;
  self.query = ko.observable('');
  self.locationsList = ko.observableArray();
  self.products = ko.observableArray(); // Start empty

  mapLocations.forEach(function(locationItem){
    self.locationsList.push( new Location (locationItem));
  });

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


  self.addProduct = function() {
      var name = 'Product ' + (this.products().length + 1);
      this.products.push(new Product(name));
  };
   
  // ko.applyBindings(new MyViewModel());
   
  ko.components.register('like-widget', {
      viewModel: function(params) {
          // Data: value is either null, 'like', or 'dislike'
          this.chosenValue = params.value;
           
          // Behaviors
          this.like = function() { this.chosenValue('like'); }.bind(this);
          this.dislike = function() { this.chosenValue('dislike'); }.bind(this);
      },
      template:
          '<div class="like-or-dislike" data-bind="visible: !chosenValue()">\
              <button data-bind="click: like">Like it</button>\
              <button data-bind="click: dislike">Dislike it</button>\
          </div>\
          <div class="result" data-bind="visible: chosenValue">\
              You <strong data-bind="text: chosenValue"></strong> it\
          </div>'
  });


}

ko.applyBindings(new AppViewModel());

 