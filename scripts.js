class Weather {
    function getData() {
        fetch(`${api_url}?q=${city},${state},US&units=imperial&appid=${apiKey}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                displayData(data);
            })
    }

    function displayData(data) {
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

class Spotify {
    function getData(access_token) {
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

    function getAccess() {
        const responseType = 'token';
        const CLIENT_ID = '16cf13c37e984102ac0cd4c7a14e095c';
        let url = `https://accounts.spotify.com/authorize?response_type=${responseType}&client_id=${CLIENT_ID}&scope=${scopes}&redirect_uri=${redirectUri}`;
        window.location = url;
        return getHashParams();
    }

    function getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams.access_token;
    }
}