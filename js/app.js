$(function(){

var model = initMap();

var AppViewModel = {
	init: function(){
  	this.location = ko.observable("Toronto");
		ko.applyBindings(AppViewModel);
		view.init();

		$.each(model, function(i, model){
			return function(){
				console.log(model.name)
			}(model)
		});
	}

};

var view = {
  init: function() {
  	// console.log('view initialized');

  },

};

AppViewModel.init();
});