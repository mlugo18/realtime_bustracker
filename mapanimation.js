// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
  ];
  
  // **REPLACE WITH YOUR OWN MAPBOXGL ACCESS TOKEN** //
  mapboxgl.accessToken = 'pk.eyJ1IjoibWx1Z29taXRjYW1wIiwiYSI6ImNsb2thN25wNjBkNnoycW9hYTZxbXE0NTYifQ.XxGj_PmIrsQx5NyXnXHzLA';
  
  // This is the map instance.
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
  });
  
  // Adds a marker to the map at the first coordinates in the array busStops.
  let marker = new mapboxgl.Marker()
    .setLngLat(busStops[0])
    .addTo(map);
  
  // This counter represents the index of the current bus stop. The function moves the marker on the map every second.
  let counter = 0;
  function move() {
    setTimeout(()=>{
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    },1000);
  
  }