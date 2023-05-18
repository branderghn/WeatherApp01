alert("RUN PLEASE")
function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getDate();
    if (hours < 10)
    {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes};`

    }
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}
function formateDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
}

function displayForecast(response) {
    let forecast = response.data.daily;
    let forecastElement = document.querySelector("#forecast");
    let forecastHtml = `<div class="row">`;
    forecast.forEach(function (forecastDay, index) {
        if (index < 6) {
            forecastHtml = forecastHtml + `<div class="col-2">
            <div class="weather-focast-date">${formateDay(forecastDay.dt)}</div>
            img src="https://openweathermap.org/img/wn/${formateDay.weather[0].icon}@2x.png"
            alt="" width="42" />
            <div class="weather-forecast-temperature">
            <span class="weather-forecast-temperature-min">${Math.round(forecastDay.temp.max)}° </span>
            <span class="weather-forecast-temperature-min">${Math.round(forecastDay.temp.min)}° </span>
            </div>
            </div>`;
        }
    });
    forecastHtml = forecastHtml + `</div>`;
    forecastElement.innerHTML = forecastHtml;
}
