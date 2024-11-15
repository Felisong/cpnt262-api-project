# Hello! Welcome to my basic Web Weather App

I am Carolina, I am a student at SAIT (Southern Alberta Institute of Technology). I am making this for a class assignment, to show I can make an html basis, style it with css and script its functionality/ interactivity with Javascript.

This is a web app to tell you the temperature according to your inputs. It is practice to get the hang of writing code and pulling from an API.

I will be using cookies, local storage and session storage. I will also be manipulating the DOM according to the data I receive from the API

## API 's

- [openeathermap.org](https://openweathermap.org)
- [openweathermap geocoding](https://openweathermap.org/api/geocoding-api)

To access the site please go to:

[Weather Web App](https://felisong.github.io/cpnt262-api-project/)

[repository link](https://github.com/Felisong/cpnt262-api-project.git)

it works once you fill out the form with a city. Please provide your name in the input, a city, and select your desired unit of temperature.

## Attributes

- [iconify](https://icon-sets.iconify.design/?query=celsius)

- my mom for helping me realize how to kind of flowchart.

- [dev.tp](https://dev.to/alexmercedcoder/making-multiple-api-calls-in-javascript-kip)

- [perplexity.ai](https://www.perplexity.ai) for guidance when I could not find documentation related, or for issues troubleshooting.

- [stackoverflow.com](https://stackoverflow.com/)
  -specifically [this one](https://stackoverflow.com/questions/58211513/how-can-i-display-a-javascript-prompt-once-on-website-load)

## Psuedo Code

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

console.log(`current:${celsius.value}`);

document.addEventListener("DOMContentLoaded", async function () {
// call askName()
/ function below
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

// end of button?

// update values / keeps if they were already there.
cityLocal = localStorage.getItem("city");
c = sessionStorage.getItem("celsius");
f = sessionStorage.getItem("fahrenheit");

// console log to check values later
// FETCH GEO API

try {
geoData = await fetchData(geoApi);

    // error in case api is empty
    if (geoData === 0) {
      throw new erorr(error.message)
      return;
    }
    // make data into something I can see
    // console.log(`weather response: ` + JSON.stringify(weatherData, null, 2));
    console.log(`geocoder response: ` + JSON.stringify(geoData, null, 2));

    //value to fetch api
    let lan = weather.path to lang
    let lon = weather. path to lon

    // TO SELECT C OR F IN DATA.

// switch ()
case `fahrenheit` {
unit = `imperial`}
case `celsius` {
unit = `metric`}
;

    // TRY FETCH {
    weatherData= await fetchData(weatherApi);
    // error in case api is empty
    if (weatherData === 0) {
      throw new erorr(error.message)
      return;
    }
     // make data into something I can see
     // create forEach() to show data for primitively
     {
     const data = document.createElement = "div"
     // give classname to element
     // fit content of width/ height
     // appendChild to temperatureData container
     // see the basics of how it looks then stylize.
     }

} catch (error) {
console.log(`Error fetching data` > error);
}
});

//FUNCTIONS

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
