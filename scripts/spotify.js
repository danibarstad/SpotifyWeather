let login_btn = document.getElementById('login');
let redirectUri = 'http://localhost:5501/public/loggedin.html';
let scopes = 'user-read-private';

if (login_btn) {
    login_btn.addEventListener('click', () => {
        access_token = getAccess();
        getData(access_token);
    });
    login_btn.addEventListener('click', getData);
}

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