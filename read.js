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

function loadDoc(){var o="";const n=new XMLHttpRequest;n.open("GET","AIS/AIS.json",!0),n.send(),n.onreadystatechange=function(){if(4==this.readyState&&200==this.status){let n=JSON.parse(this.responseText);for(let o of n)cuentadatos+=1;if(cuentadatos>0){if(mark.length>0){for(i=0;i<=mark.length-1;i++)del(i);mark=[]}for(let c of n){switch(c.y){case 20:userIcon=L.icon({iconUrl:"AIS/ICONOS/bWinglnGround.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]}),o="Wing in ground";break;case 30:userIcon=L.icon({iconUrl:"AIS/ICONOS/bPesca.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]}),o="Pesca";case 31:userIcon=L.icon({iconUrl:"AIS/ICONOS/bTowing.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]}),o="Remolcando";case 33:userIcon=L.icon({iconUrl:"AIS/ICONOS/bDragando.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]}),o="Dragando";case 35:userIcon=L.icon({iconUrl:"AIS/ICONOS/bMilitares.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]}),o="Militar";break;case 36:userIcon=L.icon({iconUrl:"AIS/ICONOS/bVela.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]}),o="Vela";break;case 37:userIcon=L.icon({iconUrl:"AIS/ICONOS/bTuristico.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]}),o="Turístico";break;case 40:userIcon=L.icon({iconUrl:"AIS/ICONOS/bHighSpeed.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]}),o="High Speed";break;case 50:userIcon=L.icon({iconUrl:"AIS/ICONOS/bPilotodePuerto.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]}),o="Piloto de Puerto";break;case 51:userIcon=L.icon({iconUrl:"AIS/ICONOS/bSar.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]}),o="SAR";break;case 52:userIcon=L.icon({iconUrl:"AIS/ICONOS/bTowing.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]}),o="Remolcado";break;case 54:userIcon=L.icon({iconUrl:"AIS/ICONOS/bAntipolucion.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]}),o="Antipolución";break;case 58:userIcon=L.icon({iconUrl:"AIS/ICONOS/bTrasporteMedico.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]}),o="Transporte Médico";break;case 60:userIcon=L.icon({iconUrl:"AIS/ICONOS/bPasajeros.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]}),o="Pasajeros";break;case 70:userIcon=L.icon({iconUrl:"AIS/ICONOS/bCarga.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]}),o="Carga General";break;case 80:case 90:userIcon=L.icon({iconUrl:"AIS/ICONOS/bTanquero.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]}),o="Tanquero";break;default:userIcon=L.icon({iconUrl:"AIS/ICONOS/b.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]}),o="General"}forcrear+=1,add(c.m,c.l,c.g,c.c,c.s,c.h,c.t,c.n,c.i,o,c.a,c.b,c.e,c.p,c.d,c.u,c.o)}}cuentadatos=0}}}
var customPopup = "";

// specify popup options 
var customOptions =
    {
    'maxWidth': '400',
    'width': '200',
    'className' : 'popupCustom'
    }
function add(t,r,d,b,a,e,o,i,n,s,u,m,p,S,g,h,l){var c=L.marker([r,d],{icon:userIcon,rotationAngle:b-90}).addTo(AIS);c.bindPopup("<table><tr><th>DATOS AIS</th></tr><tr><td><b>Name:  </b>"+[i]+"</td></tr><tr><td><b>Timestamp:  </b>"+[o]+"</td></tr><tr><td><b>Callsign:  </b>"+[u]+"</td></tr><tr><td><b>Imo:  </b>"+[n]+"</td></tr><tr><td><b>Mmsi:  </b>"+[t]+"</td></tr><tr><td><b>ShipType:  </b>"+[s]+"</td></tr><tr><td><b>Course:  </b>"+[b]+"</td></tr><tr><td><b>Speed:  </b>"+[a]+"</td></tr><tr><td><b>Heading:  </b>"+[e]+"</td></tr><tr><td><b>Latitude:  </b>"+[r]+"</td></tr><tr><td><b>Longitude:  </b>"+[d]+"</td></tr><tr><td><b>Bow:  </b>"+[m]+"</td></tr><tr><td><b>Stern:  </b>"+[p]+"</td></tr><tr><td><b>Port:  </b>"+[S]+"</td></tr><tr><td><b>Starboard:  </b>"+[g]+"</td></tr><tr><td><b>Draught:  </b>"+[h]+"</td></tr><tr><td><b>Destination:  </b>"+[l]+"</td></tr><tr><td></table>",customOptions),mark.push(c)}
function del(i) {
  AIS.removeLayer(mark[i])
}
function SinterOp() {
  clearInterval(nIntervId);
  nIntervId = null;
}
