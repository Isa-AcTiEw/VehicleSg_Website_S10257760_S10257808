# Introduction to the project
Welcome to VehicleSG a one-stop platform to serve the needs and requirements of Singapore motorists as well as educate them on road safety and driving rules in an interractive quiz

 
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
- OneMap Authentication API from [OneMap] ()



## Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X
