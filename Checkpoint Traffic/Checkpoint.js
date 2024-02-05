fetch("https://api.data.gov.sg/v1/transport/traffic-images")
            .then(response => response.json())
            .then(data => {
                const woodlandsCP = data.items[0].cameras.find(item => item.camera_id === "2701"); // view from woodlands checkpoint
                const woodlandsCW = data.items[0].cameras.find(item => item.camera_id === "2702"); // view from woodlands causeway
                const secondlink = data.items[0].cameras.find(item => item.camera_id === "4703"); // view from second-link
                const tuasCP = data.items[0].cameras.find(item => item.camera_id === "4713"); // view from tuas checkpoint


                displayImage(woodlandsCP, "View from Woodlands Checkpoint");
                displayImage(woodlandsCW, "View from Woodlands Causeway");
                displayImage(secondlink, "View from Second Link at Tuas");
                displayImage(tuasCP, "View from Tuas Checkpoint");

                function displayImage(cameraDetails, altText) {
                    if (cameraDetails) {
                        const imageUrl = cameraDetails.image;
                        const timestamp = new Date(cameraDetails.timestamp).toLocaleString();

                        document.getElementById('result-container').innerHTML += `
                            <div class="card">
                                <div class="trf-desc">${altText}</div>
                                <div class="timestamp">
                                    <span class="left">${timestamp}</span>
                                </div>
                                <img width="400px" src="${imageUrl}" alt="${altText}">
                            </div>
                        `;
                    } else {
                        console.log(`No image found for camera ID ${cameraDetails.camera_id}`);
                    }
                }
            })
            .catch(error => console.log('error', error));