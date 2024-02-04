var myHeaders = new Headers();
myHeaders.append("AccountKey", " jRHACKiESaGsYNOFNdxSKw==");
myHeaders.append("accept", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://datamall2.mytransport.sg/ltaodataservice/Traffic-Imagesv2", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

