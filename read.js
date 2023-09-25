
var nIntervId,mark=[],AIS=new L.LayerGroup;let constlatitude=0,control=!0,cuentadatos=0,forcrear=0;
L.Control.Layers.include({
  getOverlays: function () {
    var control, layers;
    layers = {};
    control = this;
    control._layers.forEach(function (obj) {
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
  if (!nIntervId) {
    nIntervId = setInterval(function () { loadDoc(); }, 60000);
  }
}
function loadDoc() {
  add([35.9516516666667, 5.56096833333333])
  add([35.96516666667, -5.70])
}

function SinterOp() {
  clearInterval(nIntervId);
  // liberar nuestro inervalId de la variable
  nIntervId = null;
}

function add(coordinates) {
  var marker = L.marker(coordinates).addTo(AIS);
  marker.bindPopup('Position:     '+coordinates)
  mark.push(marker)
  }
function del(i) {
 console.log(i)
}