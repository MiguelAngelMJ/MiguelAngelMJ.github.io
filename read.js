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
function loadDoc(){const t=new XMLHttpRequest;t.open("GET","GISMAR/AIS/AIS.json",!0),t.send(),t.onreadystatechange=function(){if(4==this.readyState&&200==this.status){let t=JSON.parse(this.responseText);for(let e of t)cuentadatos+=1;if(cuentadatos>0){if(mark.length>0){for(i=0;i<=mark.length-1;i++)del(i);mark=[]}for(let e of t)forcrear+=1,add(e.mmsi,e.lat,e.lon,e.cors,e.speed,e.heading,e.timestamp,e.name,e.imo,e.shiptype,e.callsign)}cuentadatos=0}}}
var customPopup = "";

// specify popup options 
var customOptions =
    {
    'maxWidth': '400',
    'width': '200',
    'className' : 'popupCustom'
    }

function add(t,r,d,b,o,n,e,i,a,p,c){var s=L.marker([r,d],{icon:userIcon,rotationAngle:b-90}).addTo(AIS);s.bindPopup("<table><tr><th>DATOS AIS</th></tr><tr><td><b>Mmsi:  </b>"+[t]+"</td></tr><tr><td><b>Latitude:  </b>"+[r]+"</td></tr><tr><td><b>Longitude:  </b>"+[d]+"</td></tr><tr><td><b>Course:  </b>"+[b]+"</td></tr><tr><td><b>Speed:  </b>"+[o]+"</td></tr><tr><td><b>Heading:  </b>"+[n]+"</td></tr><tr><td><b>Timestamp:  </b>"+[e]+"</td></tr><tr><td><b>Name:  </b>"+[i]+"</td></tr><tr><td><b>Imo:  </b>"+[a]+"</td></tr><tr><td><b>ShipType:  </b>"+[p]+"</td></tr><tr><td><b>Callsign:  </b>"+[c]+"</td></tr></table>",customOptions),mark.push(s)}userIcon=L.icon({iconUrl:"GISMAR/AIS/ICONOS/b.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]});

function del(i) {
  AIS.removeLayer(mark[i])
}
function SinterOp() {
  clearInterval(nIntervId);
  nIntervId = null;
}
