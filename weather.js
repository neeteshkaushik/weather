class Weather{
constructor(city, countryCode){
  this.apiKey = '209122efa128aabaf0055949c4214fb1';
  this.city = city;
  this.countryCode = countryCode;
}
//Fetch weather from API
async getWeather(){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey} `);
  const responseData = await response.json();

  return responseData;
}

//change weather location

changeLocation(city,countryCode){
  this.city = city;
  this.countryCode = countryCode;
}
}