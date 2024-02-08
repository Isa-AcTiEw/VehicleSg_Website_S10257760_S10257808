// var myHeaders = new Headers();
// myHeaders.append("AccountKey", "jRHACKiESaGsYNOFNdxSKw==");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("http://datamall2.mytransport.sg/ltaodataservice/TrafficIncidents", requestOptions)
//   .then(response => response.json())
//   .then (data => {
//     console.log(data);
//     traffic = data
//   })


var trafficdoc = document.getElementById('traffic-updates')
console.log(trafficdoc)
var trafficObj;




  



"use-strict"
import users from '../../DataFiles/traffic-incidents.json' assert {type: 'json'}
trafficObj = users.value

console.log(typeof trafficObj); // Outputs: "object"

var button = document.getElementById("ti")

button.addEventListener('click', function() {
    
    event.preventDefault()
    var targetdiv = document.getElementById("traffic-updates")
    var childDivs = targetdiv.querySelectorAll('.traff-container')
    childDivs.forEach(function(child) {
        childDivs.remove(child);
    });

});


// got rid of extra foreach loop that keeps on appending to parent div
function getTraff(trafficObj){
    if (trafficObj.length != 0) {
        for (var i = 0; i < trafficObj.length; i++) {
            console.log(trafficObj[i]);
    
            const element = trafficObj[i]; // Get the current element
    
           
    
            const container = document.createElement('div');
            container.className = 'traff-container';
    
            // Once it's fixed remember to replace with API calling and add other categories
            if (element.Type == "Roadwork") {
                const image = document.createElement('img')
                image.src = "Assets/traffic_1 1.png"
                const paratext = document.createElement('p')
                paratext.textContent = element.Message.replace(/^\(\d+\/\d+\)/, '').trim()
                console.log(paratext)
                container.appendChild(image)
                container.appendChild(paratext);
            } else if (element.Type == "Accident") {
                const image = document.createElement('img')
                image.src = "../../Assets/Accident.png"
                const paratext = document.createElement('p')
                paratext.textContent = element.Message.replace(/^\(\d+\/\d+\)/, '').trim()
                console.log(paratext)
                container.appendChild(image)
                container.appendChild(paratext);
            } else if (element.Type == "Heavy Traffic") {
                const image = document.createElement('img')
                image.src = "../../Assets/HeavyTraffic.png"
                const paratext = document.createElement('p')
                paratext.textContent = element.Message.replace(/^\(\d+\/\d+\)/, '').trim()
                console.log(paratext)
                container.appendChild(image)
                container.appendChild(paratext);
            } else if (element.Type == "Vehicle breakdown") {
                const image = document.createElement('img')
                image.src = "../../Assets/VehicleBreakdown.png"
                const paratext = document.createElement('p')
                paratext.textContent = element.Message.replace(/^\(\d+\/\d+\)/, '').trim()
                console.log(paratext)
                container.appendChild(image)
                container.appendChild(paratext);
            }
    
            trafficdoc.appendChild(container);
        }
    }
}

