
let sw = L.latLng(1.144, 103.535);
let ne = L.latLng(1.494, 104.502);
let bounds = L.latLngBounds(sw, ne);

let map = L.map('mapdiv', {
   center: L.latLng(1.2868108, 103.8545349),
   zoom: 16
});

map.setMaxBounds(bounds);

let basemap = L.tileLayer('https://www.onemap.gov.sg/maps/tiles/Night/{z}/{x}/{y}.png', {
   detectRetina: true,
   maxZoom: 19,
   minZoom: 11,

    
   /** DO NOT REMOVE the OneMap attribution below **/
   attribution: '<img src="https://www.onemap.gov.sg/web-assets/images/logo/om_logo.png" style="height:20px;width:20px;"/>&nbsp;<a href="https://www.onemap.gov.sg/" target="_blank" rel="noopener noreferrer">OneMap</a>&nbsp;&copy;&nbsp;contributors&nbsp;&#124;&nbsp;<a href="https://www.sla.gov.sg/" target="_blank" rel="noopener noreferrer">Singapore Land Authority</a>'
});

basemap.addTo(map);

L.marker([1.3484, 103.6356]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();