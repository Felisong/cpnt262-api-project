// VARIABLES
const city = document.getElementById("city");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const submitBtn = document.querySelector(".btn");
// variables to make interact
const temperature = document.getElementById("temperature-data");
const humidity = document.getElementById("humidity");
const feelsLike = document.getElementById("feelsLike");
const condition = document.getElementById("condition");

// get from Storage/ cookies or session.
// let cityName = getCookie("city");
// let PrefTemp = some function to get localstorage of this (if condition c or f)
console.log(city);

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
function saveCookie(id) {
  let data = document.getElementById(id).value;
  document.cookie = `myCookie=${data}; max-age=300`;
}
function getCookie() {
  const cookies = document.cookie;
  username.value = cookies.substring(9);
}
function clearCookies(id) {
  document.cookie = "myCookie=; max-age=300";
  document.getElementById(id).innerText = "No data stored.";
}
