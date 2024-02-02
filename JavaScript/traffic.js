var myHeaders = new Headers();
myHeaders.append("AccountKey", "jRHACKiESaGsYNOFNdxSKw==");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


var trafficdoc = document.getElementsByClassName('traffic-updates')
console.log(trafficdoc)
var trafficObj;
fetch("http://datamall2.mytransport.sg/ltaodataservice/TrafficIncidents", requestOptions)
  .then(response => response.json())
  .then (data => {
    console.log(data);
    traffic = data
  });
  
trafficObj.array.forEach(element => {
    const container = document.createElement('div')
    container.ClassName = 'traff-container'
    if(element.Type = "RoadWork"){
        image = document.createElement('img')
        paratext = document.createElement('p')
        paratext.textContent = element.Message
        container.appendChild(image)
        container.appendChild(paratext)
        trafficdoc.appendChild(container)


    }

    else if(element.Type == "Vehicle Breakdown"){
        image = document.createElement('img')
        paratext = document.createElement('p')
        paratext.textContent = element.Message
        container.appendChild(image)
        container.appendChild(paratext)
        trafficdoc.appendChild(container)
    }

    else if(element.Type == "Accident"){
        image = document.createElement('img')
        paratext = document.createElement('p')
        paratext.textContent = element.Message
        container.appendChild(image)
        container.appendChild(paratext)
        trafficdoc.appendChild(container)
    }

    else{
        heading = document.createElement(h1)
        heading.textContent = element.Type
        updatespara = document.createElement('p')
        updatespara.textContent = element.Message
        container.appendChild(heading)
        container.appendChild(updatespara)
        trafficdoc.appendChild(container)
    }
});
  
  