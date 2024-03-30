# Research Question
**How do traditional Machine Learning techniques compare in accuracy and reliability for predicting Type 2 Diabetes Mellitus (T2DM) risk to Deep Learning methods, and in what ways can a novel hybrid approach combining ML and DL models improve prediction outcomes across populations?**


# Getting Started

### Clone the Repository

To begin, clone the repository to your local machine:

```
git clone [URL of the repository]
cd [name of the repository]
```

### Install Dependencies using Conda
1. Create the environment from the environment_final.yml file:
`conda env create -f environment_final.yml`
2. Activate the new environment: 
`conda activate diabetes_model_deployment_final`
3. Verify that the new environment was installed correctly:
`conda env list`

### Run the React App
1. Navigate to the frontend directory:
`cd frontend/diabetesreactfrontend`
2. Start the React App:
`npm start`

### Run the Django App
1. Navigate to the backend directory:
`cd backend/DjangoDiabetesBackend`
2. Start the Django App:
`python manage.py runserver`

## Short Video Demonstration
https://github.com/RajaATAli/Machine-Learning-For-Early-Disease-Prediction/assets/76918821/38781b0f-bfd9-4ef5-90ea-1c745be9f24c


## Data Source
- The Diabetes prediction dataset found on Kaggle is a collection of medical and demographic data from patients, along with their diabetes status (positive or negative).
- The data includes features such as age, gender, body mass index (BMI), hypertension, heart disease, smoking history, HbA1c level, and blood glucose level. 
- Electronic Health Records (EHRs) are the primary source of data for the Diabetes Prediction dataset. EHRs are digital versions of patient health records that contain information about their medical history, diagnosis, treatment, and outcomes.
- The data in EHRs is collected and stored by healthcare providers, such as hospitals and clinics, as part of their routine clinical practice.
- To create the Diabetes Prediction dataset, EHRs were collected from multiple healthcare providers and aggregated into a single dataset. The data was then cleaned and preprocessed to ensure consistency and remove any irrelevant or incomplete information.
- The dataset contains a total of 100,000 patient records, with each record consisting of 8 features and a target variable indicating the patient's diabetes status (positive or negative).
- [Data Source](https://www.kaggle.com/datasets/iammustafatz/diabetes-prediction-dataset/)

# Key Technologies

- Python
- Django (Backend)
- React (Frontend)
- SQLite (Database)
- Scikit-learn
- TensorFlow
- Keras

