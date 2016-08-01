$(function(){

var model = initMap();

var Location = function(data){
	this.name = ko.observable(data.name);
	this.locations = ko.observableArray(data.names);
};

var AppViewModel = {

	init: function(){
  	this.location = ko.observable("Toronto");
  	
  // 	this.model = ko.observableArray([		
  // 		$.each(model, function(i, model){
		// 		return function(){
		// 			console.log(model.name)
		// 		}(model)
		// 	})
		// ]);
 
		ko.applyBindings(AppViewModel);
		view.init();
	
	}

};

var view = {
  init: function() {
  	console.log('view initialized');

  },

};

AppViewModel.init();
});