let login_btn = document.getElementById('login');
let redirectUri = 'http://localhost:5501/public/loggedin.html';
let scopes = 'user-read-private';

let username = document.getElementById('username');
let followers = document.getElementById('followers');
let email = document.getElementById('email');
let country = document.getElementById('country');
let product = document.getElementById('product');

// button.addEventListener('click', printInput);
// button.addEventListener('click', displayInput);
login_btn.addEventListener('click', getAccess);
login_btn.addEventListener('click', getData);

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