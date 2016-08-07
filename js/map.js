var googleMap = (function(){
var map;
var marker;

function initMap() {
	map = new google.maps.Map(document.getElementById('googleMap'), {
		center: { lat: 43.6748488, lng: -79.4092801},
		zoom: 15
	});

  setMarkers(map);
}


function setMarkers(map) {
 locations.forEach(function(location){
      marker = new google.maps.Marker({
      name:location.name,
      position: {lat: location.position.lat, lng: location.position.lng},
      map: map,
      title: location.title,
    });

      // marker.addListener('click', toggleBounce);
 });

}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

return {
  initMap: function(){
    initMap();
  }
};

}());

