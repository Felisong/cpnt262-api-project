// VARIABLES
const city = document.getElementById("city");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const submitBtn = document.querySelector(".btn");
const greeting = document.querySelector(".header-Intro");
const temperatureData = document.querySelector(".temperature-data-container");
// Local storage/ cookie variables if available.
let cityLocal = sessionStorage.getItem("city");
let c = getCookie("celsius");
let f = getCookie("fahrenheit");
let username = localStorage.getItem("username");

// loose
let geodata;
let weatherData;
let lat;
let lon;
let unit;
// API key
const apiKey = `dc20084f2a7551ca41da945c1298f0c7`;
// // API call
const geoApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityLocal}&appid=${apiKey}`;
const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;

console.log(`current:${username}`);

document.addEventListener("DOMContentLoaded", async function () {
  // Only prompt if username is null or undefined
  greetings();

  console.log(`checking: ${username}`);
  // EVENT LISTENER BUTTON CLICK {
  submitBtn.addEventListener("click", function () {
    // saving inputs, and assigning value to variables for use.
    // function saveLocalStorage("city");
    // function saveSessionStorage("celsius");
    // function saveSessionStorage("celsius");
    // // end of button?
  });

  // // update values / keeps if they were already there.
  // cityLocal = localStorage.getItem("city");
  // c = sessionStorage.getItem("celsius");
  // f = sessionStorage.getItem("fahrenheit");
  // // console log to check values later
  // // FETCH GEO API
  //   try {
  //     geoData = await fetchData(geoApi);
  //     // error in case api is empty
  //     if (geoData === 0) {
  //       throw new erorr(error.message)
  //       return;
  //     }
  //     // make data into something I can see
  //     // console.log(`weather response: ` + JSON.stringify(weatherData, null, 2));
  //     console.log(`geocoder response: ` + JSON.stringify(geoData, null, 2));
  //     //value to fetch api
  //     let lan = weather.path to lang
  //     let lon = weather. path to lon
  //     // TO SELECT C OR F IN DATA.
  // // switch ()
  // case `fahrenheit` {
  // unit = `imperial`}
  // case `celsius` {
  // unit = `metric`}
  // ;
  //     // TRY FETCH {
  //     weatherData= await fetchData(weatherApi);
  //     // error in case api is empty
  //     if (weatherData === 0) {
  //       throw new erorr(error.message)
  //       return;
  //     }
  //      // make data into something I can see
  //      // create forEach() to show data for primitively
  //      {
  //      const data = document.createElement = "div"
  //      // give classname to element
  //      // fit content of width/ height
  //      // appendChild to temperatureData container
  //      // see the basics of how it looks then stylize.
  //      }
  //   } catch (error) {
  //     console.log(`Error fetching data` > error);
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
  console.log("response:", response);
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
function saveCookie(key, id) {
  let data = document.getElementById(id).value;
  document.cookie = `${key}=${data}; max-age=300`;
}
function getCookie(key) {
  const cookies = document.cookie;
  key.value = cookies.substring(9);
}
function clearCookies(id) {
  document.cookie = "myCookie=; max-age=300";
  document.getElementById(id).innerText = "No data stored.";
}
