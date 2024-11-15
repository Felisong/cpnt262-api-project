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
let cityLocal = localStorage.getItem("city") || "calgary" || "calgary";
let unit = sessionStorage.getItem("unit");
let username = getCookie("username") || null;

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
  saveBtn.addEventListener("click", function () {
    if (saveName.value) {
      username = saveName.value;
      saveCookie("username", username);
    } else {
      greeting.textContent = `Hello, Stranger!`;
    }
  });
  // updated variables for use later + dom manipulation. (greeting to user)
  username = document.cookie.substring(9);
  greeting.textContent = `Hello, ${username}!`;
  unit = sessionStorage.getItem("unit") || "metric";
  // SUBMIT BUTTON GATHER DATA.
  submitBtn.addEventListener("click", function () {
    unit = celsius.checked ? "metric" : "imperial";
    addCity(city.value);
    sessionStorage.setItem("unit", unit);
  });
  // UPDATED VALUES
  unit = sessionStorage.getItem("unit") || "metric";
  cityLocal = getMostRecentCity() || "calgary";

  // FETCH GEO API
  loadCityData();
  // get data from localStorage as an array, then create element for each.
  const cityArr = getCities();

  let title = document.createElement("h3");
  title.textContent = "Previously Searched";
  document.getElementById("cities").appendChild(title);
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
    // console.log(`geocoder response: ` + JSON.stringify(geoData, null, 2));
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
        throw new erorr(error.message);
        return;
      }
      let tempPref;
      if (unit === "imperial") {
        tempPref = "°F";
      } else {
        tempPref = "°C";
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
      const weatherId = weatherData.weather[0].id;
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
      condition.textContent = `Condition: ${weatherdesc}`;

      console.log(`weather id: ${weatherId}`);
      const body = document.body;
      const content = document.querySelector(".temp-container");
      const inputs = document.querySelector(".input-container");

      // console.log(`body : ${body}`);
      // console.log(`content : ${content}`);
      // console.log(inputs);

      // STYLIZATION FOR MODES.

      if (weatherId >= 200 && weatherId <= 232) {
        changeColor("thunder-storm");
      } else if (weatherId >= 300 && weatherId <= 531) {
        changeColor("light-rain");
      } else if (weatherId >= 600 && weatherId <= 622) {
        changeColor("snow");
      } else if (weatherId >= 701 && weatherId <= 741) {
        changeColor("grey-haze");
      } else if (weatherId >= 751 && weatherId <= 781) {
        changeColor("red-grey");
      } else if (weatherId === 800) {
        changeColor("body");
      } else if (weatherId >= 801 && weatherId <= 804) {
        body.style.backgroundColor = "#181717";
        changeColor("cloudy");
      } else {
        changeColor("body");
      }
      // fix later. WEATHER ID IF ORS
    } catch (error) {
      console.log(`Error fetching data` > error);
    }
  } catch (error) {
    console.log(`Error fetching data` > error);
  }
}

function changeColor(classname) {
  let element = document.body;
  element.classList.add(classname);
}
