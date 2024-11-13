// VARIABLES
const city = document.getElementById("city");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const submitBtn = document.querySelector(".btn");
const greeting = document.querySelector(".header-Intro");
const temperatureData = document.querySelector("temperature-data-container");
let firstName;
// Local storage/ cookie variables
let cityLocal = localStorage.getItem("city");
let cdegrees = localStorage.getItem("celsius");
let fdegrees = localStorage.getItem("fahrenheit");
let username = getCookie("username");

console.log(username);

document.addEventListener("DOMContentLoaded", async function () {
  // call askName(()
  /*
  if (username === null){
  let username = prompt("please enter your name.");
  }
  greeting.textContent = `Hello, ${username}`
}

let cityLocal = localStorage.getItem("city");


// EVENT LISTENER BUTTON CLICK {
// call is isCityLStorage()
if (cityLocal.value === null) {
let cityLocal = city.value;
let c = celsius;
let f = fahrenheit;
}

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
