require('dotenv').config({path: '/.env'});
// const dotenv = require('dotenv');
// dotenv.config({path: '/.env'});

var button = document.querySelector('#submit');
var city = document.querySelector('#city');
var state = document.querySelector('#state');
var namee = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
let apiKey = process.env.WEATHER_KEY;

button.addEventListener('click',function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value},${state.value}
    ,US&units=imperial&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        namee.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })

    .catch(err => alert('Wrong city name!'))
})

