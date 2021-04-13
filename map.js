var statesData = {"type":"FeatureCollection","features":[
  {"type":"Feature","id":"01","properties":{"name":"Latin America"},"geometry":{"type":"Polygon","coordinates":[[[-111.97, 37.16, -18.11, -66.51]]]}},
  {"type":"Feature","id":"02","properties":{"name":"Western Europe"},"geometry":{"type":"Polygon","coordinates":[[[84.72, 81.39, 41.90, -84.90]]]}},
  {"type":"Feature","id":"03","properties":{"name":"North Africa"},"geometry":{"type":"Polygon","coordinates":[[[42.585, 30.410, 14.477, -11.162]]]}},
  {"type":"Feature","id":"04","properties":{"name":"West Africa"},"geometry":{"type":"Polygon","coordinates":[[[30.714, 16.084, -0.220, -25.488]]]}},
  {"type":"Feature","id":"05","properties":{"name":"Central Africa"},"geometry":{"type":"Polygon","coordinates":[[[22.391, 22.236, -9.492, -19.336]]]}},
  {"type":"Feature","id":"05","properties":{"name":"East Asia"},"geometry":{"type":"Polygon","coordinates":[[[54.52, 151.00, 0.26, 67.85]]]}},

//I don't know the correct way to get the coordinates but I went to https://www.openstreetmap.org > Export > go to the area I want and there are coordinates 


  var mapboxAccessToken = {your access token here};
var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
    id: 'mapbox/light-v9',
    attribution: ...,
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

L.geoJson(statesData).addTo(map);



function getColor(d) {
  return d > 1000 ? '#800026' :
         d > 500  ? '#BD0026' :
         d > 200  ? '#E31A1C' :
         d > 100  ? '#FC4E2A' :
         d > 50   ? '#FD8D3C' :
         d > 20   ? '#FEB24C' :
         d > 10   ? '#FED976' :
                    '#FFEDA0';
}