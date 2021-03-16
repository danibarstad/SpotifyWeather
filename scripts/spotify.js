let button = document.getElementById('btn');
let login_btn = document.getElementById('login');

// let user_html = document.getElementById('user-html');
// let id_html = document.getElementById('id-html');
// let secret_html = document.getElementById('secret-html');

// let userId = document.getElementById('user-id').value;

// let clientId = document.getElementById('cli-id').value;
// let clientSecret = document.getElementById('secret').value;
let redirectUri = 'http://localhost:5501/public/loggedin.html';
let scopes = 'user-read-private';

// button.addEventListener('click', printInput);
// button.addEventListener('click', displayInput);
// button.addEventListener('click', getAccess);
// button.addEventListener('click', getData);
login_btn.addEventListener('click', getAccess);

function printInput() {

}

function displayInput() {

}

function getData() {
    fetch('https://api.spotify.com/v1/me')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayData(data);
        });
}

function displayData(data) {

}

function getAccess() {
    const responseType = 'token';
    const CLIENT_ID_TEMP /*= {ADD CLIENT ID HERE} */;
    let url = `https://accounts.spotify.com/authorize?response_type=${responseType}&client_id=${CLIENT_ID_TEMP}&scope=${scopes}&redirect_uri=${redirectUri}`;
    window.location = url;
}