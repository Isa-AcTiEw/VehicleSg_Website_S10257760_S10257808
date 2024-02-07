const datas = JSON.stringify({
  "email": "s10257760@connect.np.edu.sg",
  "password": "IsAcTi4$@%hDk"
});

const xhrs = new XMLHttpRequest();

xhrs.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(JSON.parse(this.response))
  }
});

xhrs.open("POST", "https://www.onemap.gov.sg/api/auth/post/getToken");

xhrs.setRequestHeader("Content-Type", "application/json");

xhrs.send(datas);