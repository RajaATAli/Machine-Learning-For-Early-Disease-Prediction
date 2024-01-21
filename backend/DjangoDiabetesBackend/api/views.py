from django.shortcuts import render
from django.core.cache import cache
# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import UserData
from .serializers import UserDataSerializer
from django.http import HttpResponse

@api_view(['POST'])
def submit_user_data(request):
    serializer = UserDataSerializer(data=request.data)
    cache.set('my_key', 'my_value', timeout=60)
    # Get the cache value
    value = cache.get('my_key')
    print(value)  # It should print 'my_value'
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

def home(request):
    return HttpResponse("<h1>Home Page</h1>")
