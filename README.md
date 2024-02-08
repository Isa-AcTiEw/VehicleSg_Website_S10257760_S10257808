# Introduction to the project
Welcome to VehicleSG a one-stop platform to serve the needs and requirements of Singapore motorists as well as educate them on road safety and driving rules in an interractive quiz

## Our Team
Our team of developers consist of Isaac Tiew and MingQi who have taken up roles such as a UI/UX designer, API engineer throughout the process of the project

### Distribution of WorkLoad
- Isaac: Carpark Availability Page, Traffic Conditions Page
- MingQi: Quiz Page, Checkpoint Conditions Page, Home page
 
## Design Process
 
As a team we first thought about what features would be useful for motorists and came up with a selection of ideas such as a COE tracker, carpark availability search, Live updates
from TUAS and WOODLANDS Checkpoint as well as the current traffic flow and conditions on the road as seen through our Idea Brief. 

We utilised the web application Figma as it allows for ease of integration and is readily accessible for collaborative works compared to Adobe XD as well as a plethora of plugins
to aid in the design process of the low fidelity wireframes

Here is the link to our figma wireframe: [Figma](https://www.figma.com/file/KfDpdyELxdICHP7zi0SLYd/VehicleSG?type=design&node-id=0%3A1&mode=design&t=c263ky6W2egumvHc-1)


## Features

After deliberating we managed to come up with 3 features which we believe are essential in culvating road readiness andd well informed motorists

 
### Existing Features
- Feature 1 - Allow motorists to get real time lots available through searching in the input field in carpark availability page
- Feature 2 - Allow motorists to view real time checkpoint conditions on the checkpoint conditions page
- Feature 3 - Allow motorists to view traffic conditions which includes the traffic flow on the map, traffic images from CTE and PIE expressways respectively and traffic incidents


## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [lottieAnimation](https://lottiefiles.com/)
  **The project uses lottieAnimation js and css files for embeding lottie animations to our website**

- [leafletJs](https://leafletjs.com/)
  **This project utilises leaflet js library for building maps as well as adding markers on the map from long and lat coordinates**

- [OneMap](https://www.onemap.gov.sg/apidocs/)
  **Project utilises leaflet js tiles from OneMap servers via a Content Delivery Network for the map of Singapore**

- [Bootstrap](https://getbootstrap.com/)
  **Utilised bootstrap styles and classes as well as javascript for the nav**

### Data Files used
[HDBCarparksInfo](https://beta.data.gov.sg/datasets/d_23f946fa557947f93a8043bbef41dd09/view)
**Project utilises the hdbCarparks csv information to retrive corresponding carparks and link to CarparkAvailabilityAPI**


### API's Used

- CarparkAvailability API from [Data sg](https://beta.data.gov.sg/collections/85/view) for CarparkAvailability Feature
- TrafficImages API from [Data sg](https://beta.data.gov.sg/collections/354/view) for CheckPoint conditions and Traffic Conditions feature
- Tom Tom Traffic Flow API from [TomTom Developers](https://developer.tomtom.com/traffic-api/documentation/traffic-flow/traffic-flow-service)
  **To retrieve the raster tiles within a long lat boundary to display accurate traffic flow information speed of traffic**
- OneMap RetrieveThemes API from [OneMap](https://www.onemap.gov.sg/apidocs/apidocs/#getAllThemeInfo)
  **For mapping the police cameras location on the map in the traffic conditions page**
- OneMap Authentication API from [OneMap](https://www.onemap.gov.sg/apidocs/apidocs/#getAllThemeInfo)
  **Retrieve authentication details for account registered with OneMap**
- DataMall Traffic Incidents API from [DataMall LTA](https://datamall.lta.gov.sg/content/datamall/en/dynamic-data.html)




## Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Carpark Availability:
    1. Go to the Carpark Availability Page
    2. Try to submit the empty search field and alert message appear telling users you are unable to submit and empty request
    3. Once submitting an address in the search field results are shown

    ### Bugs
    - Once submitted an error appears due to unhandles promise in .then() statement rendering the next input as undefined hence i caught the error using and try catch block

 2. Map on traffic Conditions Page
    1. Go to the traffic conditions page and click on the various options from the dropdown menu
    2. If CTE/SLE is clicked it loads the respective real time traffic images
    3. If TrafficIncidents is clicked it reads from the JSON file that is retrived from the traffic-incidents API from datamall LTA

 3. Quiz
    1. Go to the Quiz page click on start quiz
    2. Attempt to answer all 10 questions
    3. LottieAnimation displayed and the user's score is also displayed


 4. Checkpoint Conditions
    1. Go to the checkpoint conditions page
    2. Automatically loads the real time images from the checkpoint
    



## Credits

### Content
- The text for traffic conditions for the traffic images were taken from [OneMotoring LTA](https://onemotoring.lta.gov.sg/content/onemotoring/home/driving/traffic_information/traffic-cameras.html)

### Media
- The photos for the traffic incidents section were retrived from [OneMotoring LTA](https://onemotoring.lta.gov.sg/content/onemotoring/home/driving/traffic_information/traffic-smart.html)
- The photo background for the traffic conditions page was retrived from [Always Arround the World](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alwaysaroundtheworld.com%2Fsingapore%2Fsingapore-skyline%2F&psig=AOvVaw2uFf7YVVgEH0soIM7UbI8P&ust=1707491518335000&source=images&cd=vfe&opi=89978449&ved=0CBUQjhxqFwoTCNi04dyDnIQDFQAAAAAdAAAAABAE)
- The lottie animation for the Carpark Availability Page was retrived from [LottieFiles](https://lottiefiles.com/animations/parking-spots-1JxnjiZoIc)

### Acknowledgements

- I received inspiration for the traffic condtions page from [OneMotoring LTA](https://onemotoring.lta.gov.sg/content/onemotoring/home/driving/traffic_information/traffic-cameras.html)
- Recieved inspiration for the logic behind mapping the markers to the map on traffic conditions using leaflet js from [OpenAI ChatGPT](https://chat.openai.com/c/9b10b3b0-f46e-45a3-989e-5d52ac49b2c4)
