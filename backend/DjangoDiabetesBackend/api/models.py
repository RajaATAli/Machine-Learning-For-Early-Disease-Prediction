from django.db import models

# Create your models here.

class Gender(models.Model):
    name = models.CharField(max_length=10)  # Add a field to represent the gender name

    def __str__(self):
        return self.name

class Model(models.Model):
    name = models.CharField(max_length=10)

class UserData(models.Model):
    selectedModel = models.ForeignKey(Model, on_delete=models.CASCADE)
    gender = models.ForeignKey(Gender, on_delete=models.CASCADE)
    age = models.IntegerField()
    hypertension = models.CharField(max_length=3)
    heartDisease = models.CharField(max_length=3)
    smokingHistory = models.CharField(max_length=15)
    bmi = models.FloatField()
    hba1cLevel = models.FloatField()
    bloodGlucoseLevel = models.FloatField()

    def __str__(self):
        return f"{self.gender} - {self.age} years old"
