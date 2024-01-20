# DjangoDiabetesBackend/api/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('submit-data/', views.submit_user_data, name='submit-data'),
    #'path('api/', include('api.urls')),' line
    
]

