
class Weather{
    constructor() {
        this.units = 'metric';
        this.appid = 'ae03d6cc012356f425fe221dc8db0fc6';
    }

    
   async getWeatherData(cityName) {
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${this.units}&appid=${this.appid}`);

        const weatherDataResponse = await weatherResponse.json();

        return weatherDataResponse;
    }
}









