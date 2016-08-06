// ko.components.register('like-widget', {
//     viewModel: function(params) {
//         // Data: value is either null, 'like', or 'dislike'
//         this.chosenValue = params.value;
         
//         // Behaviors
//         this.like = function() { this.chosenValue('like'); }.bind(this);
//         this.dislike = function() { this.chosenValue('dislike'); }.bind(this);
//     },
//     template:
//         '<div class="like-or-dislike" data-bind="visible: !chosenValue()">\
//             <button data-bind="click: like">Like it</button>\
//             <button data-bind="click: dislike">Dislike it</button>\
//         </div>\
//         <div class="result" data-bind="visible: chosenValue">\
//             You <strong data-bind="text: chosenValue"></strong> it\
//         </div>'
// });

// ko.components.register('like-or-dislike', {
//     viewModel: { require: 'files/component-like-widget' },
//     template: { require: 'text!files/component-like-widget.html' }
// });

var mapLocations = googleMap.locations();

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

      self.products = [
        new Product('Garlic bread'),
        new Product('Pain au chocolat'),
        new Product('Seagull spaghetti', 'like') // This one was already 'liked'
    ];

  self.query = ko.observable('');

  self.locationsList = ko.observableArray();

  mapLocations.forEach(function(locationItem){
    console.log(locationItem.name)
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
};

ko.applyBindings(new AppViewModel());


// ko.components.get(like-or-dislike, callback)
ko.components.defaultLoader.getConfig('like-or-dislike', callback)
// ko.components.defaultLoader.loadComponent(name, componentConfig, callback)
// ko.components.defaultLoader.loadTemplate(name, templateConfig, callback)
// ko.components.defaultLoader.loadViewModel(name, viewModelConfig, callback)

