let button = document.getElementById('btn');
let user_html = document.getElementById('user-html');
let id_html = document.getElementById('id-html');
let secret_html = document.getElementById('secret-html');

let userId = document.getElementById('user-id').value;

let clientId = document.getElementById('cli-id').value;
let clientSecret = document.getElementById('secret').value;
let redirectUri = 'http://localhost:5501/public/loggedin.html';
let scopes = 'user-read-private';

button.addEventListener('click', printInput);
// button.addEventListener('click', displayInput);
button.addEventListener('click', getAccess);
// button.addEventListener('click', getData);

function printInput() {
    console.log(userId);
    console.log(clientId);
    console.log(clientSecret);
}

function displayInput() {
    user_html.innerHTML = `User ID: ${userId}`;
    id_html.innerHTML = `Client ID: ${clientId}`;
    secret_html.innerHTML = `Client Secret: ${clientSecret}`;
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
    let name = data['display_name'];
    let followers = data['followers'];
    let country = data['country'];
    let email = data['email'];
    let product = data['product'];
}

function getAccess() {
    let responseType = 'token';
    let url = `https://accounts.spotify.com/authorize?response_type=${responseType}&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}`;
    // fetch(url)
    //     .then(function(response) {
    //         return response;
    //     })
    //     .then(function(data) {
    //         console.log(data);
    //     });
    window.location = url;
}