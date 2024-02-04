// Extract all the carpark details
// 1. Location
// 2. Lots available

// The traffic updates object should look like this:
// {
//     "carpark-info": {
//     "location": "Carpark A",
//     "lots-available": 100
//     }

/*Post request using user's input in the search bar Extract each property and get the element by id of the div containing these properties.
*/


// retrive user's input

// First, select the elements
var inputField = document.querySelector('.form-control');
var searchButton = document.querySelector('.btn-outline-success');
let inputValue;

//Then, add an event listener to the button
searchButton.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the form from submitting
    inputValue = inputField.value;
    if(inputValue != ""){
        retrievedata(carparkcsvObj,inputValue)
        retrivelots(carparkcsvObj)
        
    }
    else{
        alert("Please enter the carpark address")
    }
    
    
    

    
});

function someFunction() {
    console.log("Value outside the event listener:", inputValue);
}

someFunction();

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
carparkcsvObj = []
function retrievedata(carparkcsvObj,inputValue){
    fetch("DataFiles/HDBCarparkInformation.csv")
    .then(response => response.text())
    .then(data => {
        const lines = data.split('\n');
        const carparkinfo = lines.splice(1);
        for(var i = 0; i < carparkinfo.length; i++){
            var data = carparkinfo[i].split(',');
            address = data[1];
            if(address.includes(inputValue.toUpperCase())){
                carparknumber = data[0];
                const caraprkinfo = {
                    "Address":address,
                    "CarparkNumber": carparknumber,
                    "Lotsavail": 0
                }
                carparkcsvObj.push(caraprkinfo)

                

            }
            
        }
        return carparkcsvObj

    })
    .catch(error => console.error('Error:', error));
    
}
// Declare carparknumbers outside the function
console.log(carparkcsvObj);
// Add an event listener to the button



var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
function retrivelots(carparkcsvObj){
    fetch("https://api.data.gov.sg/v1/transport/carpark-availability", requestOptions)
    .then(response => response.text())
    .then(data => {
        const items = JSON.parse(data).items[0];
        const carpark_data = items.carpark_data;
        carpark_data.forEach(element => {
            carparkcsvObj.forEach(obj =>{
                if(element.carpark_number == obj.CarparkNumber){
                    
                    obj.Lotsavail = element.carpark_info[0].lots_available
                    
                }
            })
        return carparkcsvObj
        });
    })
    
}

console.log(carparkcsvObj);

