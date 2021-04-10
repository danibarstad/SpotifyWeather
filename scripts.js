let login_btn = document.getElementById('login');
let weather_btn = document.getElementById('btn');

// let city = document.getElementById('city').value;
// let state = document.getElementById('state').value;

let desc = document.getElementById('desc');
let temp = document.getElementById('temp');
let humid = document.getElementById('humid');
let wind = document.getElementById('wind');

let redirectUri = 'http://localhost:5501/public/loggedin.html';
let scopes = 'user-read-private playlist-read-private';

const apiKey = '4c6a7c501ad077318a7c705eea755377';  // Regenerate when ready to deploy
const api_url = 'https://api.openweathermap.org/data/2.5/weather';

if (login_btn) {
    login_btn.addEventListener('click', () => {
        access_token = spotify.getAccess();
        // getData(access_token);
    });
    // login_btn.addEventListener('click', getData);
}

if (weather_btn) {
    weather_btn.addEventListener('click', getData);
}

const weather = class Weather {
    getData() {
        fetch(`${api_url}?q=${city},${state},US&units=imperial&appid=${apiKey}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                displayData(data);
            })
    }

    displayData(data) {
        let description = data['weather'][0]['description'];
        let temperature = data['main']['temp'];
        let humidity = data['main']['humidity'];
        let windSpeed = data['wind']['speed'];
    
        desc.innerHTML = `Description: ${description}`;
        temp.innerHTML = `Temperature: ${temperature}`;
        humid.innerHTML = `Humidity: ${humidity}`;
        wind.innerHTML = `Wind Speed: ${windSpeed}`;
    }
}

const spotify = class Spotify {
    getData(access_token) {
        fetch('https://api.spotify.com/v1/me', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
            });
    }

    getAccess() {
        const responseType = 'token';
        const CLIENT_ID = '16cf13c37e984102ac0cd4c7a14e095c';
        let url = `https://accounts.spotify.com/authorize?response_type=${responseType}&client_id=${CLIENT_ID}&scope=${scopes}&redirect_uri=${redirectUri}`;
        window.location = url;
        return getHashParams();
    }

    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams.access_token;
    }
}