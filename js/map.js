var map;

function _initMap() {
  map = new google.maps.Map(document.getElementById('googleMap'), {
    center: { lat: 43.684820, lng: -79.397876 },
    zoom: 15
  });

  var locationsArr = [
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

  //loop through arr and set each object as new google.maps.Marker obj
  locationsArr.forEach(function(location){
    var marker = new google.maps.Marker({
      position: location.position,
      map: map,
      title: location.title
    });
  });

  var promise = new Promise(function(resolve, reject) {

    if (locationsArr) {
      resolve(locationsArr);
    }
    else {
      reject(Error("problem with location info"));
    }

  });

  promise.then(function(result) {
    getLocations(result);
  }, function(err) {
    console.log(err);
  });

  return promise;
}

function getLocations(data){
  console.log('successful promise')
  return data;
}











