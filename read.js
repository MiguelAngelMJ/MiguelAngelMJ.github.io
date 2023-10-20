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
function loadDoc(){const o=new XMLHttpRequest;o.open("GET","AIS/AIS.json",!0),o.send(),o.onreadystatechange=function(){if(4==this.readyState&&200==this.status){let o=JSON.parse(this.responseText);for(let n of o)cuentadatos+=1;if(cuentadatos>0){if(mark.length>0){for(i=0;i<=mark.length-1;i++)del(i);mark=[]}for(let n of o){switch(n.shiptype){case 80:userIcon=L.icon({iconUrl:"AIS/ICONOS/bTanquero.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]});break;case 30:userIcon=L.icon({iconUrl:"AIS/ICONOS/bPesca.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]});break;case 37:userIcon=L.icon({iconUrl:"AIS/ICONOS/bTuristico.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]});break;case 51:userIcon=L.icon({iconUrl:"AIS/ICONOS/bSar.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]});break;case 60:userIcon=L.icon({iconUrl:"AIS/ICONOS/bPasajeros.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]});break;default:userIcon=L.icon({iconUrl:"AIS/ICONOS/b.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]})}forcrear+=1,add(n.mmsi,n.lat,n.lon,n.cors,n.speed,n.heading,n.timestamp,n.name,n.imo,n.shiptype,n.callsign)}}cuentadatos=0}}}
var customPopup = "";

// specify popup options 
var customOptions =
    {
    'maxWidth': '400',
    'width': '200',
    'className' : 'popupCustom'
    }
function add(t,d,r,b,e,o,a,i,n,s,m){var p=L.marker([d,r],{icon:userIcon,rotationAngle:b-90}).addTo(AIS);p.bindPopup("<table><tr><th>DATOS AIS</th></tr><tr><td><b>Mmsi:  </b>"+[t]+"</td></tr><tr><td><b>Latitude:  </b>"+[d]+"</td></tr><tr><td><b>Longitude:  </b>"+[r]+"</td></tr><tr><td><b>Course:  </b>"+[b]+"</td></tr><tr><td><b>Speed:  </b>"+[e]+"</td></tr><tr><td><b>Heading:  </b>"+[o]+"</td></tr><tr><td><b>Timestamp:  </b>"+[a]+"</td></tr><tr><td><b>Name:  </b>"+[i]+"</td></tr><tr><td><b>Imo:  </b>"+[n]+"</td></tr><tr><td><b>ShipType:  </b>"+[s]+"</td></tr><tr><td><b>Callsign:  </b>"+[m]+"</td></tr></table>",customOptions),mark.push(p),console.log(s)}
function del(i) {
  AIS.removeLayer(mark[i])
}
function SinterOp() {
  clearInterval(nIntervId);
  nIntervId = null;
}
