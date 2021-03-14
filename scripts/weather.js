let button = document.getElementById('btn');
let city = document.getElementById('city').value;
let state = document.getElementById('state').value;

let desc = document.getElementById('desc');
let temp = document.getElementById('temp');
let humid = document.getElementById('humid');
let wind = document.getElementById('wind');

const apiKey = '4c6a7c501ad077318a7c705eea755377';  // Regenerate when ready to deploy
const api_url = 'https://api.openweathermap.org/data/2.5/weather';

// button.addEventListener('click', printStuff);
button.addEventListener('click', getData);

function printStuff() {
    console.log(city);
    console.log(state);
}

function getData() {
    fetch(`${api_url}?q=${city},${state},US&units=imperial&appid=${apiKey}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            printData(data);
        });
}

function printData(data) {
    // console.log(data);
    let name = data['name'];
    let description = data['weather'][0]['description'];
    let temperature = data['main']['temp'];
    let humidity = data['main']['humidity'];
    let windSpeed = data['wind']['speed'];
    console.log(name);
    console.log(`Description: ${description}`);
    console.log(`Temperature: ${temperature}`);
    console.log(`Humidity: ${humidity}`);
    console.log(`Wind Speed: ${windSpeed}`);

    desc.innerHTML = `Description: ${description}`;
    temp.innerHTML = `Temperature: ${temperature}`;
    humid.innerHTML = `Humidity: ${humidity}`;
    wind.innerHTML = `Wind Speed: ${windSpeed}`;
}