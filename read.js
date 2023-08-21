



//setInterval(function () { loadDoc(); }, 6000);

var AIS = L.marker([35.9516516666667, -5.56096833333333]);
var popup = AIS.bindPopup('Prueba')
function loadDoc() {
  alert("Ejecutando función")
}




L.Control.Layers.include({
  getOverlays: function() {
    // create hash to hold all layers
    var control, layers;
    layers = {};
    control = this;
    // loop thru all layers in control
    control._layers.forEach(function(obj) {
      var layerName;
      // check if layer is an overlay
      if (obj.overlay) {
        // get name of overlay
        layerName = obj.name;
        // store whether it's present on the map or not
        return layers[layerName] = control._map.hasLayer(obj.layer);
      }
    });
    return layers;
  }
});
