// This is a simple *viewmodel* - JavaScript that defines 
//the data and behavior of your UI

$(function(){

var AppViewModel = {
	init: function(){
  	this.location = ko.observable("Toronto");
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