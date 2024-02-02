var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.getpostman.com/collections/12ece9e1-2abf-4edc-8e34-de66e74114d2", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));