//business logic
export default class CalendarHoliday {
  static async getHoliday(){
    try {
      const response = await fetch(`https://holidayapi.com/v1/holidays/?pretty&key=25c11a57-a9d6-47e2-bdc2-968cb70cdc44&country=US&year=2019`, {mode: 'no-cors' });
      if(!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}