// VARIABLES
const city = document.getElementById("city");
const radio = document.querySelector("radio-container");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const submitBtn = document.querySelector(".submitBtn");
const greeting = document.querySelector(".header-Intro");
const saveBtn = document.querySelector(".save-name");
const saveName = document.getElementById("user-name");
// Local storage/ cookie variables if available.
let cityLocal = localStorage.getItem("city") || "calgary";
let unit = sessionStorage.getItem("unit") || "metric";
let username = getCookie("username") || null;

// loose
let geoData;
let weatherData;
let lat;
let lon;

// API key
const apiKey = `__API_KEY__`;
// // API call
const geoApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityLocal}&appid=${apiKey}`;
const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;

document.addEventListener("DOMContentLoaded", async function () {
  // save username
  saveBtn.addEventListener("click", function () {
    if (saveName.value) {
      username = saveName.value;
      saveCookie("username", username);
      greeting.textContent = `Hello, ${username}!`;
    }
  });
  // updated variables for use later + dom manipulation. (greeting to user)
  username = document.cookie.substring(9);
  greeting.textContent = `Hello ${username}!`;
  unit = sessionStorage.getItem("unit") || "metric";

  // SUBMIT BUTTON GATHER DATA.
  submitBtn.addEventListener("click", function () {
    unit = celsius.checked ? "metric" : "imperial";
    addCity(city.value);
    sessionStorage.setItem("unit", unit);
  });
  console.log(`first unit check: `, unit);
  // UPDATED VALUES
  unit = sessionStorage.getItem("unit") || "metric";
  cityLocal = getMostRecentCity() || "calgary";
  console.log(`second unit check: `, unit);
  // FETCH GEO API
  loadCityData();
  console.log(`third unit check: `, unit);
  // get data from localStorage as an array, then create element for each.
  const cityArr = getCities();
  if (cityArr !== null) {
    let title = document.createElement("h3");
    title.textContent = "Previously Searched";
    document.getElementById("cities").appendChild(title);
  }
  // showing previous cities as button.
  cityArr.forEach((element) => {
    let container = document.createElement("div");
    container.className = "grid-button";
    let button = document.createElement("button");
    button.className = "btn-city";
    let card = document.createElement("div");
    card.className = "btn-city";
    let text = document.createElement("p");
    text.textContent = element;
    button.appendChild(text);
    container.appendChild(button);
    document.getElementById("cities").appendChild(container);

    // console.log(`is cityLocal correct?: ${cityLocal}`);
    button.addEventListener("click", async function () {
      cityLocal = element;
      await loadCityData();
    });
  });
});

//FUNCTIONS

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
function getCookie(user) {
  const cookies = document.cookie;
  user.value = cookies.substring(9);
}
// test for storage
// Function to add a new city
function addCity(cityName) {
  let cities = JSON.parse(localStorage.getItem("cities")) || [];

  if (cities.length > 4) {
    cities.shift();
  }

  cities.push(cityName); // Add the new city
  localStorage.setItem("cities", JSON.stringify(cities));
}

// Function to get all stored cities
function getCities() {
  return JSON.parse(localStorage.getItem("cities")) || [];
}
function getMostRecentCity() {
  let cities = getCities();
  return cities.length > 0 ? cities[cities.length - 1] : null;
}

async function loadCityData() {
  try {
    geoData = await fetchData(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityLocal}&appid=${apiKey}`
    );
    // error in case api is empty
    if (geoData === 0) {
      throw new erorr(error.message);
      return;
    }
    // console.log(`geocoder response: ` + JSON.stringify(geoData));
    //  VALUE FOR WEATHER API
    let lat = geoData.coord["lat"];
    let lon = geoData.coord["lon"];

    // TRY FETCH WEATHER with values I now have.
    try {
      weatherData = await fetchData(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`
      );
      // error in case api is empty
      if (weatherData === 0) {
        throw new Erorr(error.message);
        return;
      }
      let tempPref;
      if (unit === "metric") {
        tempPref = "°C";
      } else {
        tempPref = "°F";
      }
      // console.log(`show me the data: ` + JSON.stringify(weatherData, null, 2));
      // VARIABLES
      const whichCity = document.querySelector(".current-city");
      const whichCountry = document.querySelector(".current-country");
      const currentTemperature = document.querySelector(".current-temp");
      const currentFeelsLike = document.querySelector(".feels-like");
      const currentHumidity = document.querySelector(".humidity");
      const condition = document.querySelector(".descript");

      //variables from data.
      const weatherdesc = weatherData.weather[0].description;
      const currentTemp = weatherData.main.temp;
      const feelsLike = weatherData.main.feels_like;
      const humidity = weatherData.main.humidity;
      const country = weatherData.sys.country;
      const currentCity = weatherData.name;

      // DOM MANIPULATION
      whichCity.textContent = `${currentCity}`;
      whichCountry.textContent = `${country}`;
      currentTemperature.textContent = `${currentTemp}${tempPref} `;
      currentFeelsLike.textContent = `Feels Like: ${feelsLike}${tempPref}`;
      currentHumidity.textContent = `Humidity: ${humidity}%`;

      // STYLIZATION FOR MODES.
      condition.textContent = `Condition: ${weatherdesc}`;

      // fix later. WEATHER ID IF ORS
    } catch (error) {
      console.log(`Error fetching data` > error);
    }
  } catch (error) {
    console.log(`Error fetching data` > error);
  }
}
