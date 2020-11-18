export default class WeatherTracker {  
  static async getWeather() {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=-90.00&lon=45.00&appid=${process.env.API_KEY}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}