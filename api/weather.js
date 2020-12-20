var weather;
var input;

var api = 'api.openweathermap.org/data/2.5/weather?';
var unit = '&units=imperial'
var key = '&apiid='

function setup() {
    var button = select('#submit');
    button.mousePressed(getWeather);

    c = select('#city');
    s = select('#state');
}

function getWeather() {
    var request = new XMLHttpRequest();

    var city = document.getElementById('city').city;
    var state = document.getElementById('state').state;

    var url = api + city +',' + state + ',US' + unit + key;
    // var url = api + c.value() +',' + s.value() + ',US' + unit + key;
    loadJSON(url, gotData);
}

function gotData(data) {
    weather = data;
}