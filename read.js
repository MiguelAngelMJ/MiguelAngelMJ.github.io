
var nIntervId,mark=[],AIS=new L.LayerGroup;let constlatitude=0,controlais=!0,cuentadatos=0,forcrear=0;

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
  add([35.9516516, 5.560968])
}

function SinterOp() {
 clearInterval(nIntervId);
  // liberar nuestro inervalId de la variable
  nIntervId = null;
}

function add([lat, long]) {
  var markerais = L.marker([lat, long]).bindPopup('Position:     ' + [lat, long])
  markerais.addTo(AIS)
  //mark.push(marker)
 // console.log ("latitude          "+ markerais)
  console.log ("marcador      "+markerais)
  //console.log ("AISlayer    "+AISlayergroup)
  }
function del(i) {
 console.log(i)
}
//add(35.96516666667, -5.70)
