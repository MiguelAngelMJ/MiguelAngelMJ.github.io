
var nIntervId;
var mark = [];
var AIS = new L.LayerGroup();
///var OTRO = new L.LayerGroup();
let constlatitude=0;
let control1=true;
///otro([35.9516516666667,-5.56096833333333])
///otro([35.96516666667, -5.70])
L.Control.Layers.include({
  getOverlays: function() {
    var control, layers;
    layers = {};
    control = this;
    control._layers.forEach(function(obj) {
      var layerName;
      if (obj.overlay) {
        layerName = obj.name;
        return layers[layerName] = control._map.hasLayer(obj.layer);
      }
    });
    return layers;
  }
});

function interv() {
  loadDoc();
  // comprobar si ya se ha configurado un intervalo
  if (!nIntervId) {
    nIntervId = setInterval(function () { loadDoc(); }, 10000);
  }
}
function loadDoc() {
  if (mark.length > 0) {
    for (i = 0; i <= mark.length - 1; i++) {
      del(i)
    }
    mark = [];
  }
add([35.9516516666667, constlatitude+-5.56096833333333])
add([35.96516666667, constlatitude+-5.70])
constlatitude=constlatitude+0.2
}
function add(coordinates) {
var marker = L.marker(coordinates).addTo(AIS);
marker.bindPopup('Position:     '+coordinates)
mark.push(marker)
}
function otro(coordinates) {
  var marker = L.marker(coordinates).addTo(OTRO);
  marker.bindPopup('Position:     '+coordinates)
  //mark.push(marker)
  }
function del(i) {
  AIS.removeLayer(mark[i])
}
function SinterOp() {
  clearInterval(nIntervId);
  // liberar nuestro inervalId de la variable
  nIntervId = null;
}
