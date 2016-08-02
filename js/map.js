
var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('googleMap'), {
		center: { lat: 43.684820, lng: -79.397876 },
		zoom: 14
	});

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var locations = [
  ['Home', 43.684820, -79.397876, 4],
  ['Deer Park Dog Park', 43.6828344, -79.4087779, 5],
  ['Rosedale Ravine', 43.68838, -79.4087779, 3],
  ['Rosedale Reservoir', 43.685557, -79.390325, 2],
  ['Summerhill', 43.6803975, -79.3909196, 1]
];

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
  ];

function setMarkers(map) {

 for (var i = 0; i < locations.length; i++) {
    var location = locations[i];
    var marker = new google.maps.Marker({
      position: {lat: location[1], lng: location[2]},
      map: map,
      title: location[0]
    });
  }
}

// function addMarkers(location){
// 	var marker = new google.maps.Marker({
// 		position: location.position,
// 		title: location.title
// 	});

// }

