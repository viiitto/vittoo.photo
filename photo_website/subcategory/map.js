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
  const location21 = { lat: 52.945293, lng: -4.567213};
  const location22 = { lat: 52.893742, lng: -4.414753};
  const location23 = { lat: 53.221677, lng: -4.204745};
  const location24 = { lat: 51.443570, lng: -0.275319};
  const location25 = { lat: 51.509822, lng: -0.098601};
  const location26 = { lat: 31.460530, lng: -9.728038};
  const location27 = { lat: 13.203137, lng: -61.196997};
  const location28 = { lat: 44.967706, lng: -123.705963};
  const location29 = { lat: 37.777377, lng: -122.424643};
  const location30 = { lat: 51.000599, lng: -0.949632};
  const location31 = { lat: 31.096196, lng: -4.248000};
  const location32 = { lat: 46.459478, lng: 9.799174};
  const location33 = { lat: 41.171260, lng: -8.629987};
  const location34 = { lat: 38.729284, lng: -9.135358};
  const location35 = { lat: 36.576292, lng: 27.855744};
  const location36 = { lat: 20.252127, lng: 105.968446};
  const location37 = { lat: 36.403803, lng: 28.179750};

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
  const marker21 = new google.maps.Marker({
    position: location21,
    map: map,
  });
  const marker22 = new google.maps.Marker({
    position: location22,
    map: map,
  });
  const marker23 = new google.maps.Marker({
    position: location23,
    map: map,
  });
  const marker24 = new google.maps.Marker({
    position: location24,
    map: map,
  });
  const marker25 = new google.maps.Marker({
    position: location25,
    map: map,
  });
  const marker26 = new google.maps.Marker({
    position: location26,
    map: map,
  });
  const marker27 = new google.maps.Marker({
    position: location27,
    map: map,
  });
  const marker28 = new google.maps.Marker({
    position: location28,
    map: map,
  });
  const marker29 = new google.maps.Marker({
    position: location29,
    map: map,
  });
  const marker30 = new google.maps.Marker({
    position: location30,
    map: map,
  });
  const marker31 = new google.maps.Marker({
    position: location31,
    map: map,
  });
  const marker32 = new google.maps.Marker({
    position: location32,
    map: map,
  });
  const marker33 = new google.maps.Marker({
    position: location33,
    map: map,
  });
  const marker34 = new google.maps.Marker({
    position: location34,
    map: map,
  });
  const marker35 = new google.maps.Marker({
    position: location35,
    map: map,
  });
  const marker36 = new google.maps.Marker({
    position: location36,
    map: map,
  });
  const marker37 = new google.maps.Marker({
    position: location37,
    map: map,
  });
}

window.initMap = initMap;
