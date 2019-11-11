class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.des = document.getElementById('w-des');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    // this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feelsLike');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather){
    this.location.textContent = weather.name;
 
    this.string.textContent = `${weather.main.temp} K`;
    this.des.textContent = weather.weather[0].description;
    this.humidity.textContent = `Humidity:${weather.main.humidity} %`;
    this.feelsLike.textContent = `Visibility:${weather.visibility}`;
    this.dewpoint.textContent = `Pressure:${weather.main.pressure}`;
    this.wind.textContent = `Wind Speed:${weather.wind.speed} MPH`;

  }
}