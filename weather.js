// API endpoint for creating a new user
const apiUrl = 'https://api.data.gov.sg/v1/environment/24-hour-weather-forecast';

// Weather data request to be sent

const currentDateTime = getDate();

// Send GET request to API endpoint

function getWeatherData(){
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    /*Get the forecast*/
    /*Get the temperature*/
    .then(response => response.json())
    .then(data =>{
        const generalObject = data.items["general"]["forecast"]; // Access the nested object
        console.log(generalObject);
        
    });

}

//get the current date and time
function getDate() {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes();
    let dateTime = date + 'T' + time;
    return dateTime;
}

getWeatherData(apiUrl);