import requests
import os

key = os.environ.get('WEATHER_KEY')

def get_weather(city, state):
    query = {'q': city + ',' + state + ',US', 'units': 'imperial', 'appid': key}
    url = 'https://api.openweathermap.org/data/2.5/weather'
    try:
        data = requests.get(url, params=query).json()
    except KeyError:
        print(f"KeyError: Please check city name and state code in {query}")
        return "Error! Please Check city name and state code.", 0, 0, 0
    weather = data
    description = weather['description']
    temperature = weather['main']['temp']
    cloudy = weather['clouds']['all']
    humidity = weather['main']['humidity']
    description = description.capitalize()

    # return description, temperature, cloudy, humidity
    return description