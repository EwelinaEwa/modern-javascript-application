// Forecast for next 4 days

export let forecastWeather = (forecastDatesArray) => {
    for (let day = 1; day < 5; day++) {
        let dayName = new Date(forecastDatesArray[day - 1].dt * 1000).toLocaleString('en-us', {weekday: 'short'});
        let dayNumber = new Date(forecastDatesArray[day - 1].dt * 1000).getDate();
        let month = (new Date(forecastDatesArray[day - 1].dt * 1000)).toLocaleString('default', {month: 'short'});

        document.getElementById(`date${day}`).innerHTML = dayName + `, ` + dayNumber + ` ` + month;
        document.getElementById(`icon${day}`).src = `https://openweathermap.org/img/wn/` + forecastDatesArray[day - 1].weather[0].icon + `@4x.png`;
        document.getElementById(`temperature${day}`).innerHTML = Math.round(forecastDatesArray[day - 1].main.temp) + ' °C';
    }
}
