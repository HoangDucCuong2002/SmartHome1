let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 21.030653, lng: 105.847130 },
    zoom: 8,
  });
}

window.initMap = initMap;