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
import users from '../DataFiles/traffic-incidents.json' assert {type: 'json'}
trafficObj = users.value

console.log(typeof trafficObj); // Outputs: "object"

for(var i = 0; i<trafficObj.length ;i++){
    console.log(trafficObj[i]);
}

    // fix create div and append to div 
    trafficObj.forEach(element => {
        if (element !== null) {
            console.log("Not null");
        }
    
        const container = document.createElement('div');
        container.className = 'traff-container';
    
        // once its fixed remember to replace with api caling and add other categories
        if (element.Type == "Roadwork") {
            const image = document.createElement('img')
            image.src = "Assets/traffic_1 1.png"
            const paratext = document.createElement('p')
            paratext.textContent = element.Message.replace(/^\(\d+\/\d+\)/, '').trim()
            console.log(paratext)
            container.appendChild(image)
            container.appendChild(paratext);
            trafficdoc.appendChild(container);
            console.log(container)
            
        }
    });


    
    



console.log(trafficdoc)