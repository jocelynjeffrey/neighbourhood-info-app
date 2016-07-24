var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('googleMap'), {
    center: { lat: 43.684820, lng: -79.397876 },
    zoom: 15
  });

  var home = new google.maps.Marker({
    position: { lat: 43.684820, lng: -79.397876 },
    map: map,
    title: 'house!'
  });

  var dogPark = new google.maps.Marker({
    position: {lat: 43.6828344, lng: -79.4087779},
    map: map,
    title: 'dogpark!'
  });

  var rosedaleRavine = new google.maps.Marker({
    position: {lat: 43.68838, lng: -79.38768},
    map: map,
    title: 'ravine!'
  });

    var rosedaleReservoir = new google.maps.Marker({
    position: {lat: 43.685557, lng: -79.390325},
    map: map,
    title: 'reservoir!'
  });

    var summerhill = new google.maps.Marker({
    position: {lat: 43.6803975, lng: -79.3909196},
    map: map,
    title: 'summerhill!'
  });
}