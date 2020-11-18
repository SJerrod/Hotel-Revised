//user logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherTracker from './weatherapi.js';

function getElements(response) {
  if (response.main) {
    $('.waterTemp').text();
    $('.airTemp').text(response.airTemperature.noaa);
    $('.windSpeed').text();
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

$(document).ready(function() {
  $('.click').click(function() {
    WeatherTracker.getWeather()
    .then(function(response){
      getElements(response);
    });
  });
});