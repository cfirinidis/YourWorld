componentDidMount() {
  const polygon = [
    { lat: 3.1336599385978805, lng: 101.31866455078125 },
    { lat: 3.3091633559540123, lng: 101.66198730468757 },
    { lat: 3.091150714460597,  lng: 101.92977905273438 },
    { lat: 2.7222113428196213, lng: 101.74850463867188 },
    { lat: 2.7153526167685347, lng: 101.47933959960938 },
    { lat: 3.1336599385978805, lng: 101.31866455078125 } // last point has to be same as first point
  ];
 
  navigator.geolocation.getCurrentPosition(
    (position) => {
      let point = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
 
      GeoFencing.containsLocation(point, polygon)
        .then(() => console.log('point is within polygon'))
        .catch(() => console.log('point is NOT within polygon'))
    },
    (error) => alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
}