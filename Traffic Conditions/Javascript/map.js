
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
var traffic = L.tileLayer('https://api.tomtom.com/traffic/map/4/tile/flow/relative0/{z}/{x}/{y}.png?key=3oIzm5vOKY6JctxpQq9BTh3dl6SvYA0k')
traffic.addTo(map);

L.marker([1.3484, 103.6356]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

// retrieve data for segments of the expressway
fetch('https://api.tomtom.com/traffic/services/4/flowSegmentData/relative0/16/json?key=3oIzm5vOKY6JctxpQq9BTh3dl6SvYA0k&point=1.3615,103.6785&unit=kmph')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // or response.text(), response.blob(), etc. based on response type
  })
  .then(data => {
    // Handle the data received from the server
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch operation
    console.error('There was a problem with the fetch operation:', error);
  });



      
const data = JSON.stringify(false);
      
const xhr = new XMLHttpRequest(); 
function createPopUp(response){
    console.log(response);
    response.forEach(element =>{
        console.log(element);
        var lat = element.LATITUDE;
        var long = element.LONGITUDE
        var location = element.NAME
        var customIcon = L.icon({
            iconUrl: "traff-assets/Speed_Camera_jpg.svg", // URL of the marker icon/image
            iconSize: [30, 30], // Size of the icon
            popupAnchor: [0, -15] // Offset of the popup relative to the icon
        });
        var marker = L.marker([lat, long],{icon: myIcon}).addTo(map);
        var popupContent = `
        <div>
            <p>${location}</p>
        </div>

    `;
    marker.bindPopup(popupContent);
    })
}
xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
         if (this.status === 200) {
            var traffcam = JSON.parse(this.response);
            createPopUp(traffcam);
            
            
        } else {
            console.error("Error:", this.status);
        }
        }
      });
      
      // retrieve all locations of LTA cameras
      xhr.open("GET", "https://www.onemap.gov.sg/api/public/themesvc/retrieveTheme?queryName=spf_fsc");
      
      
xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjYWFmZWQwNWUzNGZjOTA5MzRhM2I1NjY0MGY3ZjQyYSIsImlzcyI6Imh0dHA6Ly9pbnRlcm5hbC1hbGItb20tcHJkZXppdC1pdC0xMjIzNjk4OTkyLmFwLXNvdXRoZWFzdC0xLmVsYi5hbWF6b25hd3MuY29tL2FwaS92Mi91c2VyL3Bhc3N3b3JkIiwiaWF0IjoxNzA3MDQ3NTIzLCJleHAiOjE3MDczMDY3MjMsIm5iZiI6MTcwNzA0NzUyMywianRpIjoicUxQQ2pkZnp1enZnRFkyRiIsInVzZXJfaWQiOjIzMjgsImZvcmV2ZXIiOmZhbHNlfQ.9EFoXkhg3rd1CMQfA5LxwrzatUxqqQyIYgNmfVCUUgU");
      
xhr.send(data);
console.log(traffcam);


//Get all themes
// const newdata = JSON.stringify(false);
      
// const xhr = new XMLHttpRequest();
      
// xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === this.DONE) {
//         if (this.status === 200) {
//            console.log("Response:", this.responseText);
//        } else {
//            console.error("Error:", this.status);
//        }
//        }
//      });
      
// xhr.open("GET", "https://www.onemap.gov.sg/api/public/themesvc/getAllThemesInfo?moreInfo=Y");
      
// xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjYWFmZWQwNWUzNGZjOTA5MzRhM2I1NjY0MGY3ZjQyYSIsImlzcyI6Imh0dHA6Ly9pbnRlcm5hbC1hbGItb20tcHJkZXppdC1pdC0xMjIzNjk4OTkyLmFwLXNvdXRoZWFzdC0xLmVsYi5hbWF6b25hd3MuY29tL2FwaS92Mi91c2VyL3Bhc3N3b3JkIiwiaWF0IjoxNzA3MDQ3NTIzLCJleHAiOjE3MDczMDY3MjMsIm5iZiI6MTcwNzA0NzUyMywianRpIjoicUxQQ2pkZnp1enZnRFkyRiIsInVzZXJfaWQiOjIzMjgsImZvcmV2ZXIiOmZhbHNlfQ.9EFoXkhg3rd1CMQfA5LxwrzatUxqqQyIYgNmfVCUUgU");
      
// xhr.send(data);
