var cteData = [
    {
        "Location":"Ang Mo Kio Ave 1 Flyover",
        "Latitude": 1.35296,
        "Longitude": 103.85719,
    },

    {
        "Location":"Ang Mo Kio Ave 5 Flyover",
        "Latitude": 1.375925022,
        "Longitude": 103.8587986,


    },

    {
        "Location":"Yio Chu Kang Flyover",
        "Latitude": 1.38861,
        "Longitude": 103.85806,
    },

    {
        "Location":"Braddell Flyover",
        "Latitude": 1.34355015,
        "Longitude": 103.8601984,
    },

    {
        "Location":"Moulmein Flyover",
        "Latitude": 1.323604823,
        "Longitude": 103.8587802,
    },

    {
        "Location":"Bukit Merah Flyover",
        "Latitude": 1.28036584335876,
        "Longitude": 103.830451146503,
    },

    {
        "Location":"Chin Swee Road Entrance",
        "Latitude": 1.28569398886979,
        "Longitude": 103.837524510188
    },

    {
        "Location":"Exit 6 Bukit Timah Road",
        "Latitude": 1.31384231654635,
        "Longitude": 103.845603032574,
    },
    {
        "Location":"St George Road",
        "Latitude": 1.32814722194857,
        "Longitude": 103.862203282048,
    }


]


var trafficData = []

var myHeaders = new Headers();
myHeaders.append("accept", "*/*");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

async function fetchData() {
    try {
      const response = await fetch("https://api.data.gov.sg/v1/transport/traffic-images", requestOptions);
      const data = await response.json();
      return data.items[0];
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }
  
  fetchData()
    .then(response => {
      if (response) {
        trafficData = response
        getData(trafficData, cteData);
      }
    });
  
  function getData(trafficData, cteData) {
    var cameras = trafficData.cameras;
    cameras.forEach(element => {
        var longitude = element.location.longitude;
        var lattitude = element.location.latitude;
        cteData.forEach(cams =>{
            if(cams.Longitude == longitude && cams.Latitude == lattitude){
                cams.image = element.image;
                cams.timestamp = element.timestamp
            }
        })
    });
  }


link = document.getElementById('CTE');

link.addEventListener('click', function() {
  createData(cteData);
});

function createData(cteData) {
  var container = document.getElementById('traff-row')
  console.log(container);
  console.log(cteData);
  console.log(container);
  cteData.forEach(cams => {
    column = document.createElement('div');
    column.className = 'col-md-6';
    card = document.createElement('div');
    card.className = 'card';
    cardHeader = document.createElement('div');
    cardHeader.className = 'card-text p-3 border-box bg-light';
    cardImage = document.createElement('div');
    cardImage.className = "card-img";
    heading = document.createElement('h1');
    heading.textContent = cams.Location;
    cardHeader.appendChild(heading);
    image = document.createElement('img');
    image.setAttribute('src', cams.image);
    cardImage.appendChild(image);
    cardTimestamp = document.createElement('div');
    cardTimestamp.className = "card-text p-3 border-box bg-light";
    cardTimestamp.id = "card-timestamp";  
    time = new Date(cams.timestamp).toLocaleString();
    timetext = document.createElement('h2');
    timetext.textContent = time;
    cardTimestamp.appendChild(timetext);
    card.appendChild(cardHeader);
    card.appendChild(cardImage);
    card.appendChild(cardTimestamp);
    column.appendChild(card);
    container.appendChild(column);
    
  });
}
