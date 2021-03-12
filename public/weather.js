let button = document.getElementById('btn');
let city;
let state;
const apiKey = '4c6a7c501ad077318a7c705eea755377';  // Regenerate when ready to deploy
const api_url = 'https://api.openweathermap.org/data/2.5/weather';

button.addEventListener('click', printStuff);

function printStuff() {
    city = document.getElementById('city').value;
    state = document.getElementById('state').value;
    console.log(city);
    console.log(state);
}