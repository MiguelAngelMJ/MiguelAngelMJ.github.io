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
function loadDoc(){const t=new XMLHttpRequest;t.open("GET","AIS.json",!0),t.send(),t.onreadystatechange=function(){if(4==this.readyState&&200==this.status){let t=JSON.parse(this.responseText);for(let e of t)cuentadatos+=1;if(cuentadatos>0){if(mark.length>0){for(i=0;i<=mark.length-1;i++)del(i);mark=[]}for(let e of t)forcrear+=1,add(e.lat,e.lon,e.cors)}cuentadatos=0}}}
var customPopup = "";

// specify popup options 
var customOptions =
    {
    'maxWidth': '400',
    'width': '200',
    'className' : 'popupCustom'
    }
// bind the custom popup 

function add(o,i,c){var n=L.marker([o,i],{icon:userIcon,rotationAngle:c-90}).addTo(AIS);n.bindPopup('<div class="cabecera">DATOS AIS</div><br><div class="L1"><br><b>Posicion: </b>'+[o,i]+'</div><div class="L2"><br><b>Rumbo: </b><br>'+c+"</br></div>",customOptions),mark.push(n)}userIcon=L.icon({iconUrl:"Vessel.png",iconSize:[27,25],iconAnchor:[20,10],popupAnchor:[-3,-20]});

function del(i) {
  AIS.removeLayer(mark[i])
}
function SinterOp() {
  clearInterval(nIntervId);
  nIntervId = null;
}
(function () {
var proto_initIcon=L.Marker.prototype._initIcon,proto_setPos=L.Marker.prototype._setPos,oldIE="msTransform"===L.DomUtil.TRANSFORM;
  L.Marker.addInitHook(function () {
    var iconOptions = this.options.icon && this.options.icon.options;
    var iconAnchor = iconOptions && this.options.icon.options.iconAnchor;
    if (iconAnchor) {
      iconAnchor = (iconAnchor[0] + 'px ' + iconAnchor[1] + 'px');
    }
    this.options.rotationOrigin = this.options.rotationOrigin || iconAnchor || 'center bottom';
    this.options.rotationAngle = this.options.rotationAngle || 0;
    this.on('drag', function (e) { e.target._applyRotation(); });
  });
  L.Marker.include({
    _initIcon: function () {
      proto_initIcon.call(this);
    },
    _setPos: function (pos) {
      proto_setPos.call(this, pos);
      this._applyRotation();
    },
    _applyRotation: function () {
      if (this.options.rotationAngle) {
        this._icon.style[L.DomUtil.TRANSFORM + 'Origin'] = this.options.rotationOrigin;

        if (oldIE) {
          this._icon.style[L.DomUtil.TRANSFORM] = 'rotate(' + this.options.rotationAngle + 'deg)';
        } else {
          this._icon.style[L.DomUtil.TRANSFORM] += ' rotateZ(' + this.options.rotationAngle + 'deg)';
        }
      }
    },
    setRotationAngle: function (angle) {
      this.options.rotationAngle = angle;
      this.update();
      return this;
    },
    setRotationOrigin: function (origin) {
      this.options.rotationOrigin = origin;
      this.update();
      return this;
    }
  });
})();
