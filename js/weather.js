const weather = document.querySelector(".jsWeather");

const COORDS = "coords";
const API_KEY = "00ae3bf7fdb0a35c20a8a6ea11c60f98";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp,
        place = json.name,
        weatherSummary = json.weather[0].main;
      weather.innerHTML = `It is ${weatherSummary} today</br>${temperature}℃</br>@ ${place} `;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(position) {
  console.log("Can't access");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoord = localStorage.getItem(COORDS);
  if (loadedCoord === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoord);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
