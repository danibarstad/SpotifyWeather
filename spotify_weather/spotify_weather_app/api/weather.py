import requests
import os

key = os.environ.get('WEATHER_KEY')

def get_weather(city, state):
    query = {'q': city + ',' + state + ',US', 'units': 'imperial', 'appid': key}
    url = 'https://api.openweathermap.org/data/2.5/weather'
    data = requests.get(url, params=query).json()
    description = data['description']
    # temperature = weather['main']['temp']
    # cloudy = weather['clouds']['all']
    # humidity = weather['main']['humidity']
    # description = description.capitalize()

    # return description, temperature, cloudy, humidity
    return description