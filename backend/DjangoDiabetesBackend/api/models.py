from django.db import models

class Gender(models.Model):
    genderName = models.CharField(max_length=10)  # Add max_length

class UserData(models.Model):
    gender = models.ForeignKey(Gender, on_delete=models.CASCADE)
    age = models.IntegerField()
    hypertension = models.CharField(max_length=3)
    heartDisease = models.CharField(max_length=3)
    smokingHistory = models.CharField(max_length=15)
    bmi = models.FloatField()
    hba1cLevel = models.FloatField()
    bloodGlucoseLevel = models.FloatField()
