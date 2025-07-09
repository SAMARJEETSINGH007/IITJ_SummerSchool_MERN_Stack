async function getWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=32.732998&lon=74.864273&appid=857024bfffbec84b0b7360555dfd3994');
    const data = await response.json();

    const [weatherInfo] = data.weather;
    const { id, main, description, icon } = weatherInfo;
    const { temp, humidity } = data.main;
    const windSpeed = data.wind.speed;
    const { sunrise, sunset } = data.sys;
    const name = data.name;

    return { id, main, description, icon, temp, humidity, windSpeed, sunrise, sunset, name };
}

function formatTime(unixTime) {
    const date = new Date(unixTime * 1000);
    return date.toLocaleTimeString();
}

let opWeather = document.getElementById('opWeather');
let opTemperature = document.getElementById('opTemperature');
let opHumidity = document.getElementById('opHumidity');
let opWindSpeed = document.getElementById('opWindSpeed');
let opSunrise = document.getElementById('opSunrise');
let opSunset = document.getElementById('opSunset');
let opName = document.getElementById('opName');

getWeather().then(weatherData => {
    console.log("~~~~~~");
    console.log(weatherData);
    console.log("~~~~~~");

    opWeather.innerHTML = "Weather:"+ weatherData.main;
    opTemperature.innerHTML = "Temperature:"+`${weatherData.temp} K`;
    opHumidity.innerHTML ="Humidity:"+`${weatherData.humidity} %`;
    opWindSpeed.innerText = "Wind Speed:"+`${weatherData.windSpeed} m/s`;
    opSunrise.innerHTML = "Sunrise:"+formatTime(weatherData.sunrise);
    opSunset.innerHTML = "Sunset"+formatTime(weatherData.sunset);
    opName.innerHTML = `Weather of ${weatherData.name}`;
});

/*async function getWeather()
{
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=32.732998&lon=74.864273&appid=857024bfffbec84b0b7360555dfd3994');
    const data= await response.json();

    //WEATHER
    const [weatherInfo]=data.weather;
    const {id,main,description,icon}=weatherInfo;
    console.log("ID:"+id);
    console.log("MAIN"+main);
    console.log("DESCRIPTION"+description);
    console.log("ICON"+icon);
    //TEMPERATURE
    const {temp,humidity}=data.main;
    const windSpeed=data.wind.Speed;
    const {sunrise,sunset}=data.sys;
    const {name}=data.name;
    return {id,main,description,icon,temp,windSpeed,sunrise,sunset,name};
}
getWeather().then
(weatherData=>
    {
        console.log("~~~~~~");
        console.log(`weatherdata:
        ID: ${weatherData.id}, 
        Main: ${weatherData.main}, 
        Description: ${weatherData.description}, 
        Temp: ${weatherData.temp}, 
        Humidity: ${weatherData.humidity}, 
        Wind Speed: ${weatherData.windSpeed}, 
        Sunrise: ${weatherData.sunrise}, 
        Sunset: ${weatherData.sunset},
        Name:${weatherData.name}`);
        console.log("~~~~~~");
    }
);
let opWeather=document.getElementById('opWeather');
let opTemperature=document.getElementById('opTemperature');
let opHumidity=document.getElementById('opHumidity');
let opWindSpeed=document.getElementById('opWindSpeed');
let opSunrise=document.getElementById('opSunrise');
let opSunset=document.getElementById('opSunset');
let opName=document.getElementById('opName');

getWeather().then(weatherData=>
{opWeather.innerHTML=weatherData.main.toString();
opTemperature.innerHTML=weatherData.temp.toString();
opHumidity.innerHTML=weatherData.humidity.toString();
opWindSpeed.innerText=weatherData.windSpeed.toString();
opSunrise.innerHTML=weatherData.sunrise.toString();
opSunset.innerHTML=weatherData.sunset.toString();
opName.innerHTML=weatherData.name.toString();})
*/
/*async function getWeather()
{
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=32.732998&lon=74.864273&appid=857024bfffbec84b0b7360555dfd3994');
        console.log(response);
        const data= await response.json();
        console.log(data);
}
getWeather();*/
/*
Promise { <pending> }
{
  coord: { lon: 74.8643, lat: 32.733 },
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d'
    }
  ],
  base: 'stations',
  main: {
    temp: 297.3,
    feels_like: 298.04,
    temp_min: 297.3,
    temp_max: 297.3,
    pressure: 1000,
    humidity: 87,
    sea_level: 1000,
    grnd_level: 961
  },
  visibility: 10000,
  wind: { speed: 1.6, deg: 145, gust: 2.21 },
  clouds: { all: 79 },
  dt: 1752021310,
  sys: { country: 'IN', sunrise: 1752019186, sunset: 1752070279 },
  timezone: 19800,
  id: 1269321,
  name: 'Jammu',
  cod: 200
}
Process finished with exit code 0
*/
