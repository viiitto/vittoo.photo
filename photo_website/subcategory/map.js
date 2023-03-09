function initMap() {
  const location1 = { lat: 18.834038, lng: 53.396088 };
  const location2 = { lat: -8.829143, lng: 115.084908 };
  const location3 = { lat: -8.513660, lng: 115.260757 };
  const location4 = { lat: -8.275193, lng: 115.166205 };
  const location5 = { lat: -8.364439, lng: 115.119519 };
  const location6 = { lat: 5.411736, lng: 100.340366 };
  const location7 = { lat: 5.414706, lng: 100.338275 };
  const location8 = { lat: 23.1277667, lng: 57.3086893};
  const location9 = { lat: 1.355741, lng: 103.819857};
  const location10 = { lat: 1.290291, lng: 103.851378};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: location8,
  });
  const marker1 = new google.maps.Marker({
    position: location1,
    map: map,
  });
  const marker2 = new google.maps.Marker({
    position: location2,
    map: map,
  });
  const marker3 = new google.maps.Marker({
    position: location3,
    map: map,
  });
  const marker4 = new google.maps.Marker({
    position: location4,
    map: map,
  });
  const marker5 = new google.maps.Marker({
    position: location5,
    map: map,
  });
  const marker6 = new google.maps.Marker({
    position: location6,
    map: map,
  });
  const marker7 = new google.maps.Marker({
    position: location7,
    map: map,
  });
  const marker8 = new google.maps.Marker({
    position: location8,
    map: map,
  });
  const marker9 = new google.maps.Marker({
    position: location9,
    map: map,
  });
  const marker10 = new google.maps.Marker({
    position: location10,
    map: map,
  });
}

window.initMap = initMap;
