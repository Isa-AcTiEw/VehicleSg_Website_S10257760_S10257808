var pieData = [
    {
        "Location":"Paya Lebar Flyover",
        "Latitude": 1.322875288,
        "Longitude": 103.8910793
    },

    {
        "Location":"Kim Keat Link",
        "Latitude": 1.329334,
        "Longitude": 103.858222


    },

    {
        "Location":"Thomson Flyover",
        "Latitude": 1.328899,
        "Longitude": 103.84121
    },

    {
        "Location":"Mount Pleasent",
        "Latitude": 1.32657403632366,
        "Longitude": 103.826857295633
    },

    {
        "Location":"Eunos Flyover",
        "Latitude": 1.326024822,
        "Longitude": 103.905625
    },

    {
        "Location":"WoodsVille Flyover",
        "Latitude": 1.328171608,
        "Longitude": 103.8685191
    },

    {
        "Location":"Adam Road",
        "Latitude": 1.332124,
        "Longitude": 103.81768
    },

    {
        "Location":"Bukit Timah Expressway",
        "Latitude": 1.349428893,
        "Longitude": 103.7952799
    },
    {
        "Location":"Nanyang Flyover",
        "Latitude": 1.345996,
        "Longitude": 103.69016
    },
    {
        "Location":"Jln Anak Bukit Entrance",
        "Latitude": 1.344205,
        "Longitude": 103.78577
    },
    {
        "Location":"Entrance to PIE from ECP Changi",
        "Latitude": 1.33771,
        "Longitude": 103.977827
    },

    {
        "Location":"Exit 27 to Clementi Ave 6",
        "Latitude": 1.332691,
        "Longitude": 103.770278
    },

    {
        "Location":"Exit 35 to KJE",
        "Latitude": 1.361742,
        "Longitude": 103.703341
    },

    {
        "Location":"Hong Kah Flyover",
        "Latitude": 1.356299,
        "Longitude": 103.716071
    },

    {
        "Location":"Tuas Flyover",
        "Latitude": 1.322893,
        "Longitude": 103.6635051
        
    },

    {
        "Location":"Kallang Way",
        "Latitude": 1.32036078126842,
        "Longitude": 103.877174116489
    },

    {
        "Location":"Entrance from Simei Ave",
        "Latitude": 1.340298,
        "Longitude": 103.945652
    },

    {
        "Location":"Bedok North",
        "Latitude": 1.3309693,
        "Longitude": 103.9168616
    },

]



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
        getData(trafficData, pieData);
      }
    });
  
  function getData(trafficData, pieData) {
    var cameras = trafficData.cameras;
    cameras.forEach(element => {
        var longitude = element.location.longitude;
        var lattitude = element.location.latitude;
        pieData.forEach(cams =>{
            if(cams.Longitude == longitude && cams.Latitude == lattitude){
                cams.image = element.image;
                cams.timestamp = element.timestamp
            }
        })
    });
  }


linker = document.getElementById('PIE');
console.log(linker);
linker.addEventListener('click', function() {
    var targetdiv = document.getElementById("traff-row")
    targetdiv.innerHTML = ''; // Clear the content of targetdiv
    
    createData(pieData);
  
   
  });

  function createData(pieData) {
    var container = document.getElementById('traff-row')
    console.log(container);
    console.log(pieData);
    console.log(container);
    pieData.forEach(cams => {
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

