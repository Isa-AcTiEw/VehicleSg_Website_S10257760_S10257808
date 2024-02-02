var myHeaders = new Headers();
myHeaders.append("AccountKey", "jRHACKiESaGsYNOFNdxSKw==");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://datamall2.mytransport.sg/ltaodataservice/EstTravelTimes", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));