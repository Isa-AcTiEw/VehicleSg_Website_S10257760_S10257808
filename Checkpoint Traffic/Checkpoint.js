fetch("https://api.data.gov.sg/v1/transport/traffic-images")
.then(response => response.json())
.then(data => {
    const woodlandsCP = data.items[0].cameras.find(item => item.camera_id === "2701"); // view from woodlands checkpoint
    const woodlandsCW = data.items[0].cameras.find(item => item.camera_id === "2702"); // view from woodlands causeway
    const secondlink = data.items[0].cameras.find(item => item.camera_id === "4703"); // view from second-link
    const tuasCP = data.items[0].cameras.find(item => item.camera_id === "4713"); // view from tuas checkpoint

    displayImage(woodlandsCP, "View from Woodlands Checkpoint",woodlandsCW, "View from Woodlands Causeway");
    displayImage(secondlink, "View from Second Link at Tuas",tuasCP, "View from Tuas Checkpoint");
    
    function displayImage(cameraDetails, altText, cameraDetails2, altText2) {
        if (cameraDetails) {
            const timestamp = new Date(cameraDetails.timestamp).toLocaleString();
    
            document.getElementById('result-container').innerHTML += `
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="trf-desc">${altText}</div>
                            <div class="timestamp">${timestamp}</div>
                            <img class="img-fluid" src="${cameraDetails.image}" alt="${altText}">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="trf-desc">${altText2}</div>
                            <div class="timestamp">${timestamp}</div>
                            <img class="img-fluid" src="${cameraDetails2.image}" alt="${altText2}">
                        </div>
                    </div>
                </div>
            `;
        } else {
            console.log(`No image found for camera ID ${cameraDetails.camera_id}`);
        }
    }
})
.catch(error => console.log('error', error));
