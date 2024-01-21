from django.contrib import admin
from .models import UserData
from .models import Gender, Model
# Register your models here.
admin.site.register(UserData)
admin.site.register(Gender)
admin.site.register(Model)