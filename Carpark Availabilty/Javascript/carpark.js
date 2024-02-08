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
    // Assuming 'parentdiv' is the container holding carpark-content divs
    var parentdiv = document.getElementById('carpark-availability');

// Select all elements with the class 'carpark-content' within the parent
    var carparkDivs = parentdiv.querySelectorAll('.carpark-content');

// reset all carpark divs
    carparkDivs.forEach(function(carparkDiv) {
        carparkDiv.remove();
    });

    
     // prevent the form from submitting
    inputValue = inputField.value;
    if(inputValue != ""){
        retrievedata(inputValue)
        .then(carparkcsvObj =>{
            var resultdata = carparkcsvObj
            var resultdata = carparkcsvObj
            fetchData()
            .then(result =>{
                var carpark = result
                loadData(resultdata,carpark)
                addtoPage(resultdata);
                
                
            })

            
            
        })
        
        
    }

    else if(inputValue == "")
    {
        alert("Please enter the carpark address")
    }
    
    
    

    
});


function addtoPage(resultdata) {
    
    var parentdiv = document.getElementById('carpark-availability')
    
    console.log(parentdiv)

    resultdata.forEach(element => {
        var container = document.createElement('div');
        container.className = 'carpark-content'
        var locationDiv = document.createElement('div');
        locationDiv.className = 'location';
        locationDiv.innerHTML = `<h1>${element.Address}</h1>`;

        var lotsAvailableDiv = document.createElement('div');
        lotsAvailableDiv.className = 'lots-available'
        lotsAvailableDiv.innerHTML = `<h1>${element.Lotsavail}</h1>`;

        // Append the new div elements to the container
        container.appendChild(locationDiv);
        container.appendChild(lotsAvailableDiv);
        parentdiv.appendChild(container);
        
        
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
                    console.error("Error is ",error.message)
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








