from django.shortcuts import render
from django.core.cache import cache
# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserDataSerializer
from django.http import HttpResponse
import torch
import numpy as np
# Import model loading functions
from .load_models import load_sklearn_model, load_pytorch_model

# Deep Model = cleaned_diabetes_one_hot_encoding.csv
# Random Forest = cleaned_diabetes_with_feature_engineering.csv
# Import model loading functions

# Load models
sklearn_model = load_sklearn_model()
pytorch_model = load_pytorch_model()

@api_view(['POST'])
def submit_user_data(request):
    serializer = UserDataSerializer(data=request.data)
    print(serializer)
    if serializer.is_valid():
        print("hello")
        serializer.save()
    else:
        print(serializer.errors)
        return Response(serializer.errors)
    
    input_data = request.data

    # Extracting data for PyTorch model from request
    age = float(input_data.get('age', 0))
    bmi = float(input_data.get('bmi', 0))
    hypertension = 1 if input_data.get('hypertension', 'yes') == 'yes' else 0
    heart_disease = 1 if input_data.get('heartDisease', 'yes') == 'yes' else 0
    hba1c_level = float(input_data.get('hba1cLevel', 0))
    blood_glucose_level = float(input_data.get('bloodGlucoseLevel', 0))
    gender_female = 1 if input_data.get('gender', {}).get('name', '').lower() == 'female' else 0
    gender_male = 1 if input_data.get('gender', {}).get('name', '').lower() == 'male' else 0
    gender_other = 1 if input_data.get('gender', {}).get('name', '').lower() == 'other' else 0
    smoking_history_no_info = 1 if input_data.get('smokingHistory', '').lower() == 'no info' else 0
    smoking_history_current = 1 if input_data.get('smokingHistory', '').lower() == 'current' else 0
    smoking_history_former = 1 if input_data.get('smokingHistory', '').lower() == 'former' else 0
    smoking_history_never = 1 if input_data.get('smokingHistory', '').lower() == 'never' else 0
    smoking_history_not_current = 1 if input_data.get('smokingHistory', '').lower() == 'not current' else 0

    # Fixed data point for Random Forest model
    fixed_rf_features = [67.0, 0, 1, 27.32, 6.5, 200, 1830.44, 0, 
                         3.343568268825519, 8.18535277187245, 0, 1, 0, 0, 0, 0, 0, 1]

    # Predict with Random Forest model using fixed data point
    sklearn_prediction = sklearn_model.predict([fixed_rf_features])[0]

    # Prepare features for PyTorch model
    dl_features = torch.tensor([[ 
        age, hypertension, heart_disease, bmi, hba1c_level, blood_glucose_level,
        gender_female, gender_male, gender_other,
        smoking_history_no_info, smoking_history_current,
        smoking_history_former, smoking_history_never,
        smoking_history_not_current
    ]], dtype=torch.float32)

    # Predict with PyTorch model using actual request data
    pytorch_prediction = pytorch_model(dl_features).item()

    # Return predictions
    return Response({
        'random_forest_prediction': sklearn_prediction,
        'pytorch_prediction': pytorch_prediction
    })


def home(request):
    return HttpResponse("<h1>Home Page</h1>")
