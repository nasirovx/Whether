const API = "2401b88c6f203d44d86930611fc5e75a";
let form = document.getElementById('form');
let citys = document.getElementById("city");
let temp = document.getElementById("temp");
let iconca = document.getElementById("icon");
let speed = document.getElementById("speed");
let btn = document.getElementById("btn");
let cityInput = document.getElementById("cityInput");

btn.addEventListener("click", () => {
  let city = cityInput.value;
  getWeather(city);
  cityInput.value = ''
});

const getWeather = (city) =>{
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2401b88c6f203d44d86930611fc5e75a&units=metric`;
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      citys.textContent = data.name;
      temp.textContent = `${data.main.temp}°C`;
      iconca.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      speed.textContent = data.weather[0].description;
    })
    .catch(error => {
      console.log("Произошла ошибка при получении данных о погоде:", error);
    });
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let city = cityInput.value;
    getWeather(city);
    cityInput.value = ''
  });