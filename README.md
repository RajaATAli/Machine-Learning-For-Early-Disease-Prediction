## Getting Started

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
