var map;
var myLatLong = { lat: 43.684820, lng: -79.397876 };
function initMap() {
  map = new google.maps.Map(document.getElementById('googleMap'), {
    center: myLatLong,
    zoom: 16
  });

  var marker = new google.maps.Marker({
  	position: myLatLong,
  	map: map, 
  	title: 'house!'
  });
}