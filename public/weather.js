var button = document.querySelector('#submit');
var city = document.querySelector('#city');
var state = document.querySelector('#state');
var namee = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
const apiKey = '4c6a7c501ad077318a7c705eea755377';  // Regenerate when ready to deploy
const api_url = 'https://api.openweathermap.org/data/2.5/weather'

button.addEventListener('click',function(){
    fetch(`${api_url}?q=${city.value},${state.value}
    ,US&units=imperial&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        // namee.innerHTML = nameValue;
        // temp.innerHTML = tempValue;
        // desc.innerHTML = descValue;

        console.log(nameValue);
        console.log(tempValue);
        console.log(descValue);
    })

    .catch(err => alert('Wrong city name!'))
})