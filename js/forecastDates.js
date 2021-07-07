//Get all dates if hour = noon, so we are grabbing only one moment per day

export let forecastDates = forecast => {
    let forecastDatesArray = [];
    for (let i=0; i<forecast.list.length; i++) {
        let day = new Date(forecast.list[i].dt * 1000).getDate();
        let currentDate = new Date().getDate();
        if (day === currentDate) { }
        else {
            let hour = new Date(forecast.list[i].dt * 1000).getHours()-2;
            if (hour === 12) {
                forecastDatesArray.push(forecast.list[i]);
            }
        }
    }
    return forecastDatesArray;
}
