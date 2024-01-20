from django.db import models

# Create your models here.
class UserData(models.Model):
    gender = models.CharField(max_length=10)
    age = models.IntegerField()
    hypertension = models.CharField(max_length=3)
    heartDisease = models.CharField(max_length=3)
    smokingHistory = models.CharField(max_length=15)
    bmi = models.FloatField()
    hba1cLevel = models.FloatField()
    bloodGlucoseLevel = models.FloatField()

