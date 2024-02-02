var api_key = "jRHACKiESaGsYNOFNdxSKw==";
var apiurl = "http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2";

api_url = `${apiurl}?AccessKey=${api_key}`;
condsole.log(apiurl)
fetch(apiUrl)
  .then(response => {
    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    // Handle the data received from the API
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });
