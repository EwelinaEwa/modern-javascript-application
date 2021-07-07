import {loadCityImage} from "./js/loadCityImage.js";
import {forecastDates} from "./js/forecastDates.js";
import {forecastWeather} from "./js/forecastWeather.js";

//Global variables

//Openweathermap api
let openWeatherMapApi = 'https://api.openweathermap.org/data/2.5/forecast?q=';
let city = 'Brussels';
let units = '&units=metric';
let openWeatherMapKey = '&APPID=f1fe3a5b2ff45140872785bfb2753205';
let openWeatherMapUrl = openWeatherMapApi+city+units+openWeatherMapKey;

//Unsplash api
let unsplashApi = 'https://api.unsplash.com/search/photos?page=1&per_page=1&orientation=landscape&query=';
let unsplashApiKey = '&client_id=DLxMGtSq3G-ePDzRXwcuGyxX0EaKwiKiaJFc8LAWLvs';
let unsplashUrl = unsplashApi+city+unsplashApiKey;

//Get weather from openweathermap

let loadWeather = (openWeatherMapUrl, unsplashUrl) => {
    fetch(openWeatherMapUrl)
        .then(response => response.json())
        .then (forecast => {
            //Current weather
            document.getElementById("location").innerHTML = forecast.city.name+`, `+forecast.city.country;
            document.getElementById("icon").src = `https://openweathermap.org/img/wn/`+forecast.list[0].weather[0].icon+`@4x.png`;
            document.getElementById("description").innerHTML = (forecast.list[0].weather[0].description)[0].toUpperCase()+(forecast.list[0].weather[0].description).slice(1);
            document.getElementById("temperature").innerHTML = Math.round(forecast.list[0].main.temp)+' °C';
            document.getElementById("maxTemp").innerHTML = Math.round(forecast.list[0].main.temp_max)+' °';
            document.getElementById("minTemp").innerHTML = Math.round(forecast.list[0].main.temp_min)+' °';

            loadCityImage(unsplashUrl);
            forecastDates(forecast);
            let forecastDatesArray = forecastDates(forecast)
            forecastWeather(forecastDatesArray);
        })
};

//Get weather for selected city

let uploadForecast = () => {
    city = document.getElementById("enterCity").value;
    openWeatherMapUrl = openWeatherMapApi+city+units+openWeatherMapKey;
    unsplashUrl = unsplashApi+city+unsplashApiKey;
    loadWeather(openWeatherMapUrl, unsplashUrl);
}

//Get weather for Brussels on load
window.onload = () => loadWeather(openWeatherMapUrl, unsplashUrl);

//Clear previous search result on click
document.getElementById("enterCity").addEventListener("click", () => document.getElementById("enterCity").value = "");

// Get forecast for selected city on click or enter
document.getElementById("showWeather").addEventListener("click", uploadForecast);
document.getElementById("enterCity").addEventListener("keypress", (e) => {if (e.key === "Enter") uploadForecast();});