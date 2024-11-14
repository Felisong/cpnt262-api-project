// VARIABLES
const city = document.getElementById("city");
const radio = document.querySelector("radio-container");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const submitBtn = document.querySelector(".btn");
const greeting = document.querySelector(".header-Intro");
const temperatureData = document.querySelector(".temperature-data-container");
// Local storage/ cookie variables if available.
let cityLocal = sessionStorage.getItem("city");
let unit;
let username = localStorage.getItem("username");

// loose
let geoData;
let weatherData;
let lat;
let lon;
// API key
const apiKey = `dc20084f2a7551ca41da945c1298f0c7`;
// // API call
const geoApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityLocal}&appid=${apiKey}`;
const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;

document.addEventListener("DOMContentLoaded", async function () {
  // Only prompt if username is null or undefined
  greetings();

  unit = document.cookie.substring(5) || "metric";

  // EVENT LISTENER BUTTON CLICK {
  // saves all inputs.
  submitBtn.addEventListener("click", function () {
    unit = celsius.checked ? "metric" : "imperial";
    saveSessionStorage("city");
    saveCookie("unit", unit);
  });
  // UPDATED VALUES
  unit = document.cookie.substring(5) || "metric";
  cityLocal = sessionStorage.getItem("city");

  // FETCH GEO API
  try {
    geoData = await fetchData(geoApi);
    // error in case api is empty
    if (geoData === 0) {
      throw new erorr(error.message);
      return;
    }
    // console.log(`geocoder response: ` + JSON.stringify(geoData, null, 2));
    //  VALUE FOR WEATHER API
    let lat = geoData.coord["lat"];
    let lon = geoData.coord["lon"];
    // console.log(`experiment= ` + unit);

    // TRY FETCH WEATHER with values I now have.
    try {
      weatherData = await fetchData(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`
      );
      unit = "metric" ? (unit = "°C") : (unit = "°F");
      // error in case api is empty
      if (weatherData === 0) {
        throw new erorr(error.message);
        return;
      }
      // temperatureData; is the container for the data
      // console.log(`show me the data: ` + JSON.stringify(weatherData, null, 2));
      console.log(weatherData);

      // variables I want
      // elements I am manipulating
      const whichCity = document.querySelector(".current-city");
      const whichCountry = document.querySelector(".current-country");
      const currentTemperature = document.querySelector(".current-temp");
      const currentFeelsLike = document.querySelector(".feels-like");
      const currentHumidity = document.querySelector(".humidity");
      const currentWind = document.querySelector(".wind-speed");

      //variables from data.
      const weatherMain = weatherData.weather;
      const weatherId = weatherMain[0].id;
      const weatherTrigger = weatherMain[0].main;
      const currentTemp = weatherData.main.temp;
      const feelsLike = weatherData.main.feels_like;
      const humidity = weatherData.main.humidity;
      const wind = weatherData.wind.speed;
      const country = weatherData.sys.country;
      const currentCity = weatherData.name;

      console.log(currentWind);

      // console.log(`typeof test: ${typeof weatherTrigger}`);
      // console.log(`weather Trigger: ${JSON.stringify(weatherData)}`);

      //      const data = document.createElement = "div"
      //      // give classname to element
      //      // fit content of width/ height
      //      // appendChild to temperatureData container
      //      // see the basics of how it looks then stylize.
      //  }
    } catch (error) {
      console.log(`Error fetching data` > error);
    }
  } catch (error) {
    console.log(`Error fetching data` > error);
  }
});
// OPTIMIZATIONS
// get cookie fix to make it simple. I use it 3 times.

//FUNCTIONS

function greetings() {
  if (username === null || username === undefined) {
    username = prompt("Please enter your name:");
    // Only set to localStorage if user entered a name
    if (username !== null && username !== " ") {
      localStorage.setItem("username", username);
    }
  }
  if (username) {
    greeting.textContent = `Hello, ${username}!`;
  } else {
    greeting.textContent = `Hello, Stranger!`;
  }
}

// fetch API
const fetchData = async (url) => {
  const response = await fetch(url);
  // console.log("response:", response);
  const data = await response.json();
  return data;
};

// localStorage Functions
function saveLocalStorage(id) {
  let data = document.getElementById(id).value;
  localStorage.setItem(id, data);
}
function clearLocalStorage(id) {
  localStorage.removeItem(id);
}

// sessionStorage Functions
function saveSessionStorage(id) {
  const data = document.getElementById(id).value;
  sessionStorage.setItem(id, data);
}

// cookies Functions
function saveCookie(key, value) {
  let data = value;
  document.cookie = `${key}=${data}; max-age=300`;
}

function clearCookies(id) {
  document.cookie = "myCookie=; max-age=300";
  document.getElementById(id).innerText = "No data stored.";
}
function getCookie(key) {
  const cookies = document.cookie;
  key.value = cookies.substring(4);
}

// GET TEMPERATURE UNIT WORKING AS INTENDED. ITS BREAKING RIGHT AFTER GET COOKIE WITH CONSOLE LOGS
