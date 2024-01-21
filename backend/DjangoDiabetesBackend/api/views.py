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

    # Process input data for Random Forest model
    # Compute interaction terms and transformations as per the training notebook
    age = float(input_data.get('age', 0))
    bmi = float(input_data.get('bmi', 0))
    hypertension = 1 if input_data.get('hypertension', 'no') == 'yes' else 0
    heart_disease = 1 if input_data.get('heartDisease', 'no') == 'yes' else 0

    age_bmi_interaction = age * bmi
    hypertension_heart_interaction = hypertension * heart_disease
    log_bmi = np.log(bmi + 1)  # Adding 1 to avoid log(0)
    sqrt_age = np.sqrt(age)

    # Include categorical features as they are (one-hot encoded)
    rf_features = [
        age, hypertension, heart_disease, bmi, float(input_data.get('hba1cLevel', 0)), float(input_data.get('bloodGlucoseLevel', 0)),
        age_bmi_interaction, hypertension_heart_interaction, log_bmi, sqrt_age,
        int(input_data.get('gender_Female', 0)), int(input_data.get('gender_Male', 0)), int(input_data.get('gender_Other', 0)),
        int(input_data.get('smoking_history_No Info', 0)), int(input_data.get('smoking_history_current', 0)),
        int(input_data.get('smoking_history_former', 0)), int(input_data.get('smoking_history_never', 0)),
        int(input_data.get('smoking_history_not current', 0))
    ]

    # Predict with Random Forest model using dynamically generated data
    sklearn_prediction = sklearn_model.predict([rf_features])[0]

    # Process input data for PyTorch model (convert string to float)
    dl_features = torch.tensor([[ 
        age, hypertension, heart_disease, bmi, float(input_data.get('hba1cLevel', 0)), float(input_data.get('bloodGlucoseLevel', 0)),
        int(input_data.get('gender_Female', 0)), int(input_data.get('gender_Male', 0)), int(input_data.get('gender_Other', 0)),
        int(input_data.get('smoking_history_No Info', 0)), int(input_data.get('smoking_history_current', 0)),
        int(input_data.get('smoking_history_former', 0)), int(input_data.get('smoking_history_never', 0)),
        int(input_data.get('smoking_history_not current', 0))
    ]], dtype=torch.float32)

    pytorch_prediction = pytorch_model(dl_features).item()

    # Return predictions
    return Response({
        'random_forest_prediction': sklearn_prediction,
        'pytorch_prediction': pytorch_prediction
    })


def home(request):
    return HttpResponse("<h1>Home Page</h1>")
