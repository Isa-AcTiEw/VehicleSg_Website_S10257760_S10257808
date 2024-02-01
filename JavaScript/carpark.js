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

// Then, add an event listener to the button
searchButton.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the form from submitting
    inputValue = inputField.value; // retrieve the input value
    console.log(inputValue);

    // send HTTP request to the API using the user's input
});

//Retrieve today's date and time

var CurrentDateTime = new Date();

var formattedDateTime = CurrentDateTime.toISOString().slice(0, 19);

console.log(formattedDateTime);


