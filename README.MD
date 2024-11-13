# Hello! Welcome to my basic Web Weather App.

This is a web app to tell you the temperature according to your inputs. It is practice to get the hang of writing code and pulling from an API. I am making this for a class assignment, to show I can make an html basis, style it with css and script its functionality/ interactivity with Javascript.

I will be using cookies, local storage and session storage. I will also be manipulating the DOM according to the data I recieve from the API

## API 's

- [openeathermap.org](https://openweathermap.org)
- [openweathermap geocoding](https://openweathermap.org/api/geocoding-api)

To access the site please go to:

```
 link here
```

[repository link](https://github.com/Felisong/cpnt262-api-project.git)

I will be adding more to this later. I am just creating this so I can start work on it soon.

## Attributes

- [iconify](https://icon-sets.iconify.design/?query=celsius)

- my mom for helping me realize how to kind of flowchart.

- [dev.tp](https://dev.to/alexmercedcoder/making-multiple-api-calls-in-javascript-kip)

- [perplexity.ai](https://www.perplexity.ai) for specific questions on specific pieces of code.

https://icon-sets.iconify.design/hugeicons/celsius/

https://icon-sets.iconify.design/hugeicons/fahrenheit/

## Psuedo Code

// VARIABLES
const city = document.getElementById("city");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const submitBtn = document.querySelector(".btn");
// variables to make interact
const weatherList = document.getElementById("data-list");
const temperature = document.getElementById("temperature-data");

// API call
const weatherApi = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${weatherApiKey}`;
// API key
const weatherApiKey = `personalized webkey`;

// API CALL for geo
// API Key for geo
// https://openweathermap.org/api/geocoding-api
// get this api working as well so i can enter the city and it gets the co-ordinates for the weather map

// GETTING AND PLACING DATA FROM API
document.addEventListener("DOMContentLoaded", async function getData() {
// variable for incoming data
let weatherData;
let geoData;

// try to get data, catch if it doesn't load
// inside the data if it loads, can stylize or add in here

// catch
// const fetch data async () = > copy and paste from temi,
//should be a way to load the global and geo api into their respective variables for us later
});

// how do i want to start the actual work

//is user name in cookies?
//if not, alert here as soon as user loads in "Please input your name".
// save name input into cookies

// if so, load name from cookie.

// make user name appear in header.

// is there local storage of the last city/ temperature input?

// if so load the page with all inputs. Final step.

// if not, input city in form

// is the temperature celsius?

// if not go to fahrenheit

// if so you may submit preferences
// save inputs in local storage.

// is the temperature fahrenheit?

// if not- invalid. cannot be submitted

// if so, you may submit preferences
// save inputs in local storage.

// apply data to page.

// depending on keywords, interactive background if I have time.

//FUNCTIONS BELOW
