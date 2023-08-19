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
  const location11 = { lat: -8.486213839770638, lng: 119.88061778014243};
  const location12 = { lat: -8.5891905, lng: 119.4624119};
  const location13 = { lat: 20.95330810546875, lng: 107.05642700195312};
  const location14 = { lat: 22.3359668, lng: 103.8426575};
  const location15 = { lat: 20.5723171, lng: 102.6090663};
  const location16 = { lat: 11.568271, lng: 104.9224426};
  const location17 = { lat: 10.4021539, lng: 104.2650618};
  const location18 = { lat: 10.6314754, lng: 104.132637};
  const location19 = { lat: 19.8887438, lng: 102.135898}; 
  const location20 = { lat: 13.7524938, lng: 100.4935089};
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
  const marker11 = new google.maps.Marker({
    position: location11,
    map: map,
  });
  const marker12 = new google.maps.Marker({
    position: location12,
    map: map,
  });
  const marker13 = new google.maps.Marker({
    position: location13,
    map: map,
  });
  const marker14 = new google.maps.Marker({
    position: location14,
    map: map,
  });
  const marker15 = new google.maps.Marker({
    position: location15,
    map: map,
  });
  const marker16 = new google.maps.Marker({
    position: location16,
    map: map,
  });
  const marker17 = new google.maps.Marker({
    position: location17,
    map: map,
  });
  const marker18 = new google.maps.Marker({
    position: location18,
    map: map,
  });
  const marker19 = new google.maps.Marker({
    position: location19,
    map: map,
  });
  const marker20 = new google.maps.Marker({
    position: location20,
    map: map,
  });
}

window.initMap = initMap;
