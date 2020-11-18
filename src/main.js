//user logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import WeatherTracker from './weatherapi.js';


function getElements(response) {
  const convertTemp = ((response.main.temp - 273.15) * 9/5 + 32).toFixed(0);
  if (response.main) {
    $('.airTemp').text(`The current air temperature is ${convertTemp} degrees Farhrenheit`); 
    $('.windSpeed').text(`The current wind speed is ${response.wind.speed} m/s`);
    $('.forecast').text(`Todays forecast is ${response.weather[0].description}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall() {
  const response = await WeatherTracker.getWeather();
  getElements(response);
}

$(document).ready(function() {
  $("#weatherButton").click(function() {
    makeApiCall();
    console.log(makeApiCall());
  });
});