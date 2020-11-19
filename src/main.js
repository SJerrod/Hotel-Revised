//user logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import WeatherTracker from './weatherapi.js';
import CalendarHoliday from './calendarAPI.js';


function getElements(response, holidayResponse) {
  const convertTemp = ((response.main.temp - 273.15) * 9/5 + 32).toFixed(0);
  if (response.main && holidayResponse.status) {
    $('.airTemp').text(`The current air temperature is ${convertTemp} degrees Farhrenheit`); 
    $('.windSpeed').text(`The current wind speed is ${response.wind.speed} m/s`);
    $('.forecast').text(`Todays forecast is ${response.weather[0].description}`);
    $('.holidaze').text(`Holidays in 2019: ${holidayResponse.holidays[0].name}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
    $('.showErrors').text(`There was an error: ${holidayResponse}`);
  }
}

// function autoPlay() {
//   let iframe = document.getElementById("celine");
//   iframe.contentWindow.document.querySelector('[title="Play"]').click();
// }

async function makeApiCall() {
  const response = await WeatherTracker.getWeather();
  const holidayResponse = await CalendarHoliday.getHoliday();
  getElements(response, holidayResponse);
}

$(document).ready(function() {
  $("#weatherButton").click(function() {
    makeApiCall();
    // autoPlay();
    console.log(makeApiCall());
  });
});