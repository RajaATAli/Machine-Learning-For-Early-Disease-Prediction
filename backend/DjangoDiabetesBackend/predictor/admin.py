from django.contrib import admin
from api.models import UserData
from api.models import Gender

# Register your models here with 
# Create Superuser with python manage.py createsuperuser
admin.site.register(UserData)
admin.site.register(Gender)


