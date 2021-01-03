from django.shortcuts import render
from .forms import NewWeatherForm
from .api import weather

# Create your views here.
def playlist(request):
    # new_weather_form = NewWeatherForm()
    city = request.GET.get('city')
    state = request.GET.get('state')
    forecast = weather.get_weather('Austin', 'TX')


    return render(request, 'index.html', {'forecast': forecast})