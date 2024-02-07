// Extract all the carpark details
// 1. Location
// 2. Lots available

// The traffic updates object should look like this:
// {
//     "carpark-info": {
//     "location": "Carpark A",
//     "lots-available": 100
//     }

// Carpark Js works now just need to display to user

/*Post request using user's input in the search bar Extract each property and get the element by id of the div containing these properties.
*/


// retrive user's input

// First, select the elements
var inputField = document.querySelector('.form-control');
var searchButton = document.querySelector('.btn-outline-success');
var inputValue = "";
//Then, add an event listener to the button
searchButton.addEventListener('click', async function(event) {
    event.preventDefault();
   
    
     // prevent the form from submitting
    inputValue = inputField.value;
    if(inputValue != ""){
        retrievedata(inputValue)
        .then(carparkcsvObj => {
            var resultdata = carparkcsvObj;
            fetchData().then(result => {
                var carpark = result;
                loadData(resultdata, carpark);
                fetchKey().then(result => {
                    locationCoord(result,resultdata)
                }).catch(error => {
                    console.error('Error fetching key:', error);
                });
            }).catch(error => {
                console.error('Error fetching data:', error);
            });
        });
        
                
                

                
                
                


            
            
        }
        
        
    

    else if(inputValue == "")
    {
        alert("Please enter the carpark address")
    }
    
    
    

    
});


// function addtoPage(resultdata) {
    
//     var parentdiv = document.getElementById('carpark-availability')
    
//     console.log(parentdiv)

//     resultdata.forEach(element => {
//         var container = document.createElement('div');
//         container.className = 'carpark-content'
//         var locationDiv = document.createElement('div');
//         locationDiv.className = 'location';
//         locationDiv.innerHTML = `<h1>${element.Address}</h1>`;

//         var lotsAvailableDiv = document.createElement('div');
//         lotsAvailableDiv.className = 'lots-available'
//         lotsAvailableDiv.innerHTML = `<h1>${element.Lotsavail}</h1>`;

//         // Append the new div elements to the container
//         container.appendChild(locationDiv);
//         container.appendChild(lotsAvailableDiv);
//         parentdiv.appendChild(container);
        
        
//     });
    
// }

// retrieve access token
let apiInfo;






function fetchKey() {

    
    return new Promise((resolve, reject) => {
    const data = JSON.stringify({
            "email": "s10257760@connect.np.edu.sg",
            "password": "IsAcTi4$@%hDk"
          });
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response)) 
            
           
        } 
        else {
            reject(false); // Reject with false for failure
        }
        }
    };
    xhr.open("POST", "https://www.onemap.gov.sg/api/auth/post/getToken");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
    });
}        
      
      
    
   






  




function loadData(resultdata,carpark){
    carpark.forEach(element => {
        let carparkInfo = element.carpark_info
        resultdata.forEach(obj =>{
            if(obj.CarparkNumber == element.carpark_number){
                if(carparkInfo.length < 3){
                    obj.Lotsavail = parseInt(carparkInfo[0].lots_available)
                }
            }
        })
        
    });
    return resultdata;
}

function locationCoord(key,carparkcsvObj){
    var myHeaders = new Headers()
    myHeaders.append("Authorization",key.access_key)
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

    carparkcsvObj.forEach(element => {
        address = element.Address;
        var streetName = address.replace(/BLK \d+\/\d+ /, "BLK ")
        fetch(`https://www.onemap.gov.sg/api/common/elastic/search?searchVal=${streetName}&returnGeom=Y&getAddrDetails=Y`,requestOptions)
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.text();
          })
    });

    
}


// var carparkObj;
// // send HTTP request to the API using the user's input
// function processData(inputValue,carparkObj){
//     // GET METHOD to return an array of javascript objects
//     var myHeaders = new Headers();
//     myHeaders.append("AccountKey", "jRHACKiESaGsYNOFNdxSKw==");
    
//     var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//         };

//     fetch("http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2", requestOptions)
//     .then(response => {
//     if (!response.ok) {
//     throw new Error('Network response was not ok');
//     }
//     return response.text();
//     })
//     .then(result => {
//     console.log(result);
//     // Continue processing the result as needed
//     })
//     .catch(error => {
//     console.log('Error:', error);
//     // Handle errors here
//     });
   


    // check if userinput is inside the array address or 





// call carpark availability api

// retrieve all the carpark number with their corresponding lots available and store in js object
async function retrievedata(inputValue) {
    var carparkcsvObj = []
    await fetch("../DataFiles/HDBCarparkInformation.csv")
        .then(response => response.text())
        .then(data => {
            console.log(data);
            const lines = data.split('\n');
            const carparkinfo = lines.splice(1);
            console.log(inputValue);

            for (var i = 0; i < carparkinfo.length; i++) {
                var carparkData = carparkinfo[i].split(','); // Use a different variable name
                var address = carparkData[1];

                try{
                    if (address.includes(inputValue.toUpperCase()) ) {
                        var carparknumber = carparkData[0];
                        const Carpark = {
                            "Address": address,
                            "CarparkNumber": carparknumber,
                            "Lotsavail": 0
                        };
    
                        carparkcsvObj.push(Carpark)
                    }
                    

                    
                }
                catch(error){
                    break;
                    
                }
                
                
            }
            
        });
        return carparkcsvObj;

       
}
// Declare carparknumbers outside the function

// Add an event listener to the button



var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };




async function fetchData(){
    try
    {
        const response = await fetch("https://api.data.gov.sg/v1/transport/carpark-availability",requestOptions);
        const data = await response.json();
        return data.items[0].carpark_data;
          
       
    }
    
    catch(error){
        console.log("Unable to fetch data please ")
    }
}








