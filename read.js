
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
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", 'AIS.json', true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText)
     for (let ind of datos) {
        cuentadatos = cuentadatos + 1;
        }
      if (cuentadatos > 0) {
        if (mark.length > 0) {
          for (i = 0; i <= mark.length - 1; i++) {
            del(i)
          }
          mark = [];
        }
        for (let ind of datos) {
          forcrear = forcrear + 1
          add(ind.lat, ind.lon,ind.cors)
        }
      }
      cuentadatos = 0;
    }
  }
}

function add(lat, long, course) {
 console.log(lat,long,course)
}
function del(i) {
 console.log(i)
}