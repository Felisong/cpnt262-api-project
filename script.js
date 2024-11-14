// VARIABLES
const city = document.getElementById("city");
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
let geodata;
let weatherData;
let lat;
let lon;
// API key
const apiKey = `dc20084f2a7551ca41da945c1298f0c7`;
// // API call
const geoApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityLocal}&appid=${apiKey}`;
const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;

// console.log(`current:${username}`);

document.addEventListener("DOMContentLoaded", async function () {
  // Only prompt if username is null or undefined
  greetings();

  // TO DO LATER FIND WHY UNIT IS NULL AND NOT GETTING ANYTHING CHECKED
  // EVENT LISTENER BUTTON CLICK {
  submitBtn.addEventListener("click", function () {
    // radio
    // make into function?
    if (celsius.checked) {
      unit = "metric";
    } else if (fahrenheit.checked) {
      unit = "imperial";
    } else {
      unit = "metric";
      celsius.checked = true;
    }
    console.log(`unit before cookie = ` + unit);
    saveSessionStorage("city");
    saveCookie("unit", unit);
    getCookie("unit");
    unit = unit.value;
    console.log(`unit after cookie = ` + unit);
  });

  // // update values / keeps if they were already there.
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
    //     //value to fetch api
    lat = geoData.coord["lat"];
    lon = geoData.coord["lon"];
    // if both  name and value = 'celsius' it will go metric if true, imperial if false.

    //     // TRY FETCH {
    //     weatherData= await fetchData(weatherApi);
    //     // error in case api is empty
    //     if (weatherData === 0) {
    //       throw new erorr(error.message)
    //       return;
    //     }
    //      // make data into something I can see
    // console.log(`weather response: ` + JSON.stringify(weatherData, null, 2));
    //      // create forEach() to show data for primitively
    //      {
    //      const data = document.createElement = "div"
    //      // give classname to element
    //      // fit content of width/ height
    //      // appendChild to temperatureData container
    //      // see the basics of how it looks then stylize.
    //  }
  } catch (error) {
    console.log(`Error fetching data` > error);
  }
});

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
