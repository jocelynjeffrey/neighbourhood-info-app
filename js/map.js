var googleMap = (function(){
var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('googleMap'), {
		center: { lat: 43.684820, lng: -79.397876 },
		zoom: 14
	});

  setMarkers(map);
}


function setMarkers(map) {

 locations.forEach(function(location){
      var marker = new google.maps.Marker({
      name:location.name,
      position: {lat: location.position.lat, lng: location.position.lng},
      map: map,
      title: location.title,
    });
 });
}

var locations = [
    {
      name: 'Home',
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
  ];

return {
  locations: function(){
    return locations;
  },
  initMap: function(){
    initMap();
  }
};

}());

