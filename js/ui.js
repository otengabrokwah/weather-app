class UI{
    constructor() {
        this.cityName = document.querySelector('.city-name h3');
        this.description = document.querySelector('.description p');
        this.temperature = document.querySelector('.temperature figure');
        this.icon = document.querySelector('.icon img');
        this.humidity = document.querySelector('.humidity li');
        this.pressure = document.querySelector('.pressure li');
        this.feelsLike = document.querySelector('.feels-like li');
        this.wind = document.querySelector('.wind li');
        this.hideAndShows = document.querySelector('.hide-and-show');
        this.loader = document.querySelector('.loader');
    }

    // Hide UI
    hide() {
        this.hideAndShows.style.display = 'none';
    }

    // Show UI
    show() {
        this.hideAndShows.style.display = 'block';
    }

    // Results
    weatherResults(city) {
        this.cityName.textContent = `${city.name}`;
        this.temperature.innerHTML = `${city.main.temp} &deg;C`;
        this.humidity.textContent = `Humidity : ${city.main.humidity} %`;
        this.pressure.textContent = `Pressure : ${city.main.pressure} hpa`;
        this.feelsLike.innerHTML = `Feels Like : ${city.main.feels_like} &deg;C`;
        this.wind.textContent = `Wind Speed : ${city.wind.speed} m/s`
        

        city.weather.forEach((cityCondition) => {
            this.description.textContent = `${cityCondition.description}`;
            this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${cityCondition.icon}@2x.png`)
            
        })

    }


    // Alert
    showAlerts(message, className) {
        // Dont Repeat Alert
        this.dontrepeatAlert();

        // Create Alert Element
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

        const weatherContent = document.querySelector('#weather-content');
        const weatherHeader = document.querySelector('.weather-header');

        weatherContent.insertBefore(div, weatherHeader)

        // TimeOut
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000)
    }


    // Dont Repeat Alert
    dontrepeatAlert() {
       const currentAlert =  document.querySelector('.alert')
       if(currentAlert) {
           currentAlert.remove();
       }
    }

   







    


}









