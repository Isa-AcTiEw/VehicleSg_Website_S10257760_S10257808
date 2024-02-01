// API endpoint for creating a new user
const apiUrl = 'https://api.api-ninjas.com/v1/weather?city=';

// Weather data request to be sent

const City = "Singapore"

// Send GET request to API endpoint

var city = 'london'
$.ajax({
    method: 'GET',
    url: apiurl + city,
    headers: { 'X-Api-Key': '64d3a4502249732abb925e4452f68d45'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

//get the current date and time


getWeatherData(apiUrl);