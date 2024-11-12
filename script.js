// VARIABLES
const city = document.getElementById("city");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const submitBtn = document.querySelector(".btn");
// variables to make interact
const weatherList = document.getElementById("data-list");
const temperature = document.getElementById("temperature-data");
let lat = 51;
let lon = 114;
let cityName = `calgary`;

// API key
const apiKey = `dc20084f2a7551ca41da945c1298f0c7`;
// API call
const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
const geoApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

// GETTING AND PLACING DATA FROM API
document.addEventListener("DOMContentLoaded", async function getData() {
  // variable for incoming data

  // try to get data, catch if it doesn't load
  const responses = await Promise.all([fetch(weatherApi), fetch(geoApi)]);

  const weatherData = await responses[0].json();
  const geoData = await responses[1].json();

  console.log(`test: ` + weatherData);
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

// fetch API
const fetchData = async () => {
  const response = await fetch(endpoint);
  console.log("response:", response);
  const data = await response.json();
  return data.data;
};
