// VARIABLES
const city = document.getElementById("city");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const submitBtn = document.querySelector(".btn");
const greeting = document.querySelector(".header-Intro");
const temperatureData = document.querySelector(".temperature-data-container");
let firstName;
// Local storage/ cookie variables if available.
let cityLocal = localStorage.getItem("city");
let c = sessionStorage.getItem("celsius");
let f = sessionStorage.getItem("fahrenheit");
let username = getCookie("username");

// API key
const apiKey = `dc20084f2a7551ca41da945c1298f0c7`;
// API call
const geoApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

// console.log(temperatureData);

document.addEventListener("DOMContentLoaded", async function () {
  // call askName()
  /* function below 
  if (username === undefined){
  let username = prompt("please enter your name.");
  }
  greeting.textContent = `Hello, ${username}`
  }


// EVENT LISTENER BUTTON CLICK {

// saving inputs, and assigning value to variables for use.

function saveLocalStorage("city");
function saveSessionStorage("celsius");
function saveSessionStorage("celsius");

cityLocal = localStorage.getItem("city");
c = sessionStorage.getItem("celsius");
f = sessionStorage.getItem("fahrenheit");

// console log to check values later


// FETCH GEO API
/*

  try {
    geoData = await fetchData(geoApi);

    // error in case api is empty
    if (geoData === 0) {
      weatherList.innerHTML = `<p> unable to fetch data. Please try again later</p>`;
      return;
    }
    // make data into something I can see
    // console.log(`weather response: ` + JSON.stringify(weatherData, null, 2));
    console.log(`geocoder response: ` + JSON.stringify(geoData, null, 2));


    // inside the data if it loads, can stylize or add in here
  } catch (error) {
    console.log(`Error fetching data` > error);
  }
});
/*

}
*/
});

//FUNCTIONS
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
