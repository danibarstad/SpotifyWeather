import os
import requests
import cgi

key = os.environ.get('WEATHER_KEY')
form = cgi.FieldStorage()
city =  form.getvalue('searchbox')

get_weather()

def get_weather():
    query = {'q': city + ',US', 'units': 'imperial', 'appid': key}
    url = 'api.openweathermap.org/data/2.5/weather'
    try:
        data = requests.get(url, params=query).json()
        forecast = data['list']
    except KeyError:
        print(f'KeyError: Please check city name and country code in {query}')
        return 'Error! Please check city name and country code.', 0, 0, 0
    weather = forecast[0]
    description = weather['weather'][0]['description']
    temperature = weather['main']['temp']
    cloudy = weather['clouds']['all']
    humidity = weather['main']['humidity']
    description = description.capitalize()




    4c6a7c501ad077318a7c705eea755377