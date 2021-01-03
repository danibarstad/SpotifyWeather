from django.shortcuts import render
from .forms import NewWeatherForm
from .api import weather

# Create your views here.
def playlist(request):
    new_weather_form = NewWeatherForm()
    city = new_weather_form.city
    state = new_weather_form.state
    forecast = weather.get_weather(city, state)


    return render(request, 'index.html', {'new_weather_form': new_weather_form}) #TODO: change this path