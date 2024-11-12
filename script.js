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
  let weatherData;
  let geoData;

  try {
    // fetching api data
    weatherData = await fetchData(weatherApi);
    geoData = await fetchData(geoApi);
    console.log(geoData);

    // error in case api is empty
    if (weatherData === 0 || geoData === 0) {
      weatherList.innerHTML = `<p> unable to fetch data. Please try again later</p>`;
    }

    // inside the data if it loads, can stylize or add in here
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
  } catch (error) {
    console.log(`Error fetching data` > error);
  }
});

//FUNCTIONS BELOW

// fetch API
const fetchData = async (url) => {
  const response = await fetch(url);
  console.log("response:", response);
  const data = await response.json();
  return data.data;
};
