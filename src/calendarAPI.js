//business logic
export default class CalendarHoliday {
  static async getHoliday(){
    try {
      const response = await fetch(`https://holidayapi.com/v1/holidays/?pretty&key=${process.env.CALENDER_API_KEY}&country=US&year=2019, {mode: 'no-cors }`);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}