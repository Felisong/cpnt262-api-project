// API call
const weatherApi = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${weatherApiKey}`;
// API key
const weatherApiKey = `dc20084f2a7551ca41da945c1298f0c7`;

// API CALL for geo
// API Key for geo
// https://openweathermap.org/api/geocoding-api
// get this api working as well so i can enter the city and it gets the co-ordinates for the weather map

// VARIABLES
const city = document.getElementById("city");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const submitBtn = document.querySelector(".btn");
// variables to make interact
const weatherList = document.getElementById("data-list");
const temperature = document.getElementById("temperature-data");

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
