const api = {
    key: '4c6a7c501ad077318a7c705eea755377',
    url: 'https://api.openweathermap.org/data/2.5/'
}

const city = document.querySelector('.city');
// const city = document.getElementById("city");
city.addEventListener('keypress', setQuery);
// const state = document.getElementById("state");


function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(city.value);
        console.log(city.value);
    }
}

function getResults (query) {
    fetch(`${api.url}weather=?q=${query}&units=imperial&appid=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>*c</span>`;

    let weather_el = document.querySelector('current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hilow');
    hilow.innerText = `${Math.round(weather.main.temp_min)}*c / ${Math.round(weather.main.temp_max)}*c`;
}