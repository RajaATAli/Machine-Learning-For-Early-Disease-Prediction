# serializers.py

from rest_framework import serializers
from .models import Gender, UserData, Model

class GenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gender
        fields = '__all__'

class ModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Model
        fields = '__all__'

class UserDataSerializer(serializers.ModelSerializer):
    gender = GenderSerializer(write_only=True)
    selectedModel = ModelSerializer(write_only=True)

    class Meta:
        model = UserData
        fields = '__all__'

    def create(self, validated_data):
        # Extract and handle gender data
        gender_data = validated_data.pop('gender', {})
        gender_instance, created = Gender.objects.get_or_create(**gender_data)
        validated_data['gender_id'] = gender_instance.id

        # Extract and handle model data
        model_data = validated_data.pop('selectedModel', {})
        model_instance, created = Model.objects.get_or_create(**model_data)
        validated_data['selectedModel_id'] = model_instance.id

        # Create UserData instance
        user_data_instance = UserData.objects.create(**validated_data)
        return user_data_instance