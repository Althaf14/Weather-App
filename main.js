var searchBox = document.getElementById("searchBox");
var cityName = document.getElementById("cityName");
var cloudImg = document.getElementById("cloudImg");
var sky = document.getElementById("sky")
var celsius = document.getElementById("celsius")
var feel = document.getElementById("feel")
var humidity = document.getElementById("humidity")
var windSpeed = document.getElementById("windSpeed")
var pressure = document.getElementById("pressure")
var maxTemp = document.getElementById("maxTemp")
var cont = document.getElementById("cont")



function displayWheather() {

  
  document.getElementById('inputDiv').classList.add('top-align');
  cont.style.display = "block";
  inputDiv.style.display = "none";
  console.log(searchBox.value)
  const WEATHERAPI = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=0eb2b840d53255297795ddcca37052e5&q=';

  fetch(WEATHERAPI + searchBox.value).then(res => res.json()).then(data => {
    console.log(data);
    cityName.innerText = searchBox.value;
    celsius.innerText = Math.round(data.main.temp) + "°c";
    feel.innerText = "Feels Like " + Math.round(data.main.feels_like) + "°c";
    humidity.innerText = data.main.humidity + "% Humidity";
    windSpeed.innerText = data.wind.speed + " km/h Wind Speed";
    pressure.innerText = data.main.pressure + " mbar Air Pressure";
    maxTemp.innerText = Math.round(data.main.temp_max) + " °c Maximum Temperature";
    if (data.weather[0].main == "Clouds") {
      cloudImg.src = "imgs/clouds.png";
      sky.innerText = "Cloudy";
    } else if (data.weather[0].main == "Clear") {
      cloudImg.src = "imgs/clouds.png";
      sky.innerText = "Clear";

    } else if (data.weather[0].main == "Rain") {
      cloudImg.src = "imgs/rain.png";
      sky.innerText = "Rainy";

    } else if (data.weather[0].main == "Drizzle") {
      cloudImg.src = "imgs/drizzle.png";
      sky.innerText = "Drizzle";

    } else if (data.weather[0].main == "Mist") {
      cloudImg.src = "imgs/mist.png";
      sky.innerText = "Mist";

    }
    searchBox.value = '';

  });

}

function searchBoxfn() {
  
  inputDiv.style.display = "flex";
  cont.style.display = "none";
  searchBox.focus();

}

