
var mark = [];
var AIS = new L.LayerGroup();
let constlatitude = 0;
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
function loadDoc() {
  if (mark.length > 0) {
    for (i = 0; i <= mark.length - 1; i++) {
      del(i)
    }
    mark = [];
  }
  add([35.9516516666667, constlatitude + -5.56096833333333]); add([35.96516666667, constlatitude + -5.7]); constlatitude = constlatitude + .2; add([35.9516516666667, constlatitude + -5.56096833333333]); add([35.96516666667, constlatitude + -5.7]);
}
function add(n) { var t = L.marker(n).addTo(AIS); t.bindPopup("Position:     " + n); mark.push(t) }
function del(n) { AIS.removeLayer(mark[n]) }

