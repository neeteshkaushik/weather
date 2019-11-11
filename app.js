const storage = new Storage();
const weatherLocation  = storage.getLocationData();



const weather = new Weather(weatherLocation.city,weatherLocation.countryCode);
//init ui
const ui = new UI();
//Get weather on DOM Load
document.addEventListener('DOMContentLoaded',getWeather);
//chamge location event
document.getElementById('w-change-btn').addEventListener('click',(e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;

    weather.changeLocation(city,countryCode);

    storage.setLocationData(city,countryCode);
    //get and display
    getWeather();
    //close model
    $('#locModal').modal('hide');

})
// weather.changeLocation('Miami','US');
function getWeather(){weather.getWeather()
.then(results => {
    ui.paint(results);
})
.catch(err => console.log(err))}