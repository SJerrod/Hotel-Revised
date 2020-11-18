export default class WeatherTracker {
  static async getWeather() {
    try {
      const response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=32.99&lng=26.99&params=waterTemperature,airTemperature,windSpeed`, {
        headers: {
          'Authorization': `${process.env.API_KEY}`
        }
      })
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}

// From website 
// const lat = 58.7984;
// const lng = 17.8081;
// const params = 'windSpeed';

// fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
//   headers: {
//     'Authorization': 'example-api-key'
//   }
// }).then((response) => response.json()).then((jsonData) => {
//   // Do something with response data.
// });