// VARIABLES
const city = document.getElementById("city");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const submitBtn = document.querySelector(".btn");
// variables to make interact
const weatherList = document.getElementById("data-list");
const temperature = document.getElementById("temperature-data");

// GETTING AND PLACING DATA FROM API
document.addEventListener("DOMContentLoaded", async function () {
  let weatherData;
  let geoData;
  let lat;
  let lon;
  let cityName = document.getElementById("city").value;

  // save to local storage

  // get from local storage

  // API key
  const apiKey = `dc20084f2a7551ca41da945c1298f0c7`;
  // API call
  const geoApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

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

    // fetching api data

    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    // first geocoder
    // then i need to give value from those

    // inside the data if it loads, can stylize or add in here

    //

    //
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
  return data;
};

// STORAGE FUNCTIONS
// localStorage Functions
function saveLocalStorage(id) {
  let data = document.getElementById(id).value;
  localStorage.setItem(id, data);
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
function getCookie(name) {
  const cookies = document.cookie;
  name.value = cookies.substring(9);
}
