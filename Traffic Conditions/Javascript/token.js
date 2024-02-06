const data = JSON.stringify({
    "email": "s10257760@connect.np.edu.sg",
    "password": "IsAcTi4$@%hDk"
  });
  
const xhr = new XMLHttpRequest();
  
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
      if (this.status === 200) {
          console.log("Response:", this.responseText);
      } else {
          console.error("Error:", this.status);
      }
  }
});

  
xhr.open("POST", "https://www.onemap.gov.sg/api/auth/post/getToken");
  
xhr.setRequestHeader("Content-Type", "application/json");
  
xhr.send(data);