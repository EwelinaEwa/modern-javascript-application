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

export {openWeatherMapApi, city, units, openWeatherMapKey, openWeatherMapUrl, unsplashApi, unsplashApiKey, unsplashUrl}