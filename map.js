var statesData = {"type":"FeatureCollection","features":[
  {"type":"Feature","id":"01","properties":{"name":"Latin America"},"geometry":{"type":"Polygon","coordinates":[[[-111.97, 37.16, -18.11, -66.51]]]}},
  {"type":"Feature","id":"02","properties":{"name":"Western Europe"},"geometry":{"type":"Polygon","coordinates":[[[84.72, 81.39, 41.90, -84.90]]]}},
  {"type":"Feature","id":"03","properties":{"name":"North Africa"},"geometry":{"type":"Polygon","coordinates":[[[42.585, 30.410, 14.477, -11.162]]]}},
  {"type":"Feature","id":"04","properties":{"name":"West Africa"},"geometry":{"type":"Polygon","coordinates":[[[30.714, 16.084, -0.220, -25.488]]]}},
  {"type":"Feature","id":"05","properties":{"name":"Central Africa"},"geometry":{"type":"Polygon","coordinates":[[[22.391, 22.236, -9.492, -19.336]]]}},
  {"type":"Feature","id":"05","properties":{"name":"East Asia"},"geometry":{"type":"Polygon","coordinates":[[[54.52, 151.00, 0.26, 67.85]]]}},



  var mapboxAccessToken = {your access token here};
var map = L.map('map').setView([37.8, -96], 4);
//don't know how to find coordinates 

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
    id: 'mapbox/light-v9',
    attribution: ...,
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

// from https://leafletjs.com/examples/map-panes/
var map = L.map('map');
map.createPane('labels');
map.getPane('labels').style.zIndex = 650;

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
}).addTo(map);

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
}).addTo(map);

var geojson = L.geoJson(GeoJsonData, geoJsonOptions).addTo(map);

geojson.eachLayer(function (layer) {
  layer.bindPopup(layer.feature.properties.name);
});

map.fitBounds(geojson.getBounds());
