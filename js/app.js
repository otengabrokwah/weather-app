// Instantiate Weather
const weather = new Weather;

// Instantiate UI
const ui = new UI;


const inputForm = document.querySelector('.input-form');
// Add Event Listener
inputForm.addEventListener('submit', (e) => {
    
    const weatherInput = document.querySelector('#weatherInput').value;

    if(weatherInput !== '') {
      
        // Get weather data
        weather.getWeatherData(weatherInput)
            .then((data) => {
                if(data.message === 'city not found') {
                    // Show Message Alert in UI
                    ui.showAlerts('City not found', 'alert');
                    
                }else{
                    // console.log(data)
                    // Show Hided UI
                    ui.show();
                    // Show Results
                     ui.weatherResults(data);
                   
                    //  Clear Input Field
                    //  document.querySelector('#weatherInput').value = ''; 
                }

            })
            .catch((error) => {
                console.log(error)
            })
            
    }else{
        // Clear the UI
        console.log('cleared')
    }

    e.preventDefault();
})



// Show And Hide
 const weatherInput = document.querySelector('#weatherInput').value;

  if(weatherInput === '' || weatherInput !== '') {
    ui.hide();
 }













