const API_KEY = "2401b88c6f203d44d86930611fc5e75a";
const form = document.getElementById('form');
const cityElement = document.getElementById("city");
const tempElement = document.getElementById("temp");
const iconElement = document.getElementById("icon");
const descriptionElement = document.getElementById("description");
const btn = document.getElementById("btn");
const cityInput = document.getElementById("cityInput");

btn.addEventListener("click", () => {
    const city = cityInput.value;
    getWeather(city);
    cityInput.value = '';
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = cityInput.value;
    getWeather(city);
    cityInput.value = '';
});

const getWeather = (city) => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            cityElement.textContent = data.name;
            tempElement.textContent = `${data.main.temp}°C`;
            iconElement.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
};
