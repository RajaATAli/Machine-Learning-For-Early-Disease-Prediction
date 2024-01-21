# diabTech: Predictive Type-2 Diabetes Modeling

## Table of Contents
1. [Overview](#overview)
2. [Key Technologies](#key-technologies)
3. [Getting Started](#getting-started)
   - [Clone the Repository](#clone-the-repository)
   - [Set Up Your Environment](#set-up-your-environment)
4. [Running the Application](#running-the-application)
   - [Start the React Application](#start-the-react-application)
   - [Start the Django Application](#start-the-django-application)

## Overview

**diabTech** is a cutting-edge solution for predictive modeling of Type-2 Diabetes, integrating a sophisticated Random Forest Ensemble Model and a Multi Layer Perceptron Neural Network. These models are deployed in a robust Full Stack Web Application, harmonizing the capabilities of React, Django, and SQLite. Our goal is to provide a seamless, user-friendly interface for efficient diabetes risk prediction and management.

## Key Technologies

<table>
  <tr>
    <td style="text-align: center;">
      <img src="img/kisspng-scikit-learn-python-scikit-image-logo-brand-custom-application-development-service-provider-ap-5b7f65a43cd484.7557485915350757482492.jpg" alt="SciKit Learn" width="100px" />
      <br /><strong>SciKit Learn</strong><br />For advanced machine learning algorithms.
    </td>
    <td style="text-align: center;">
      <img src="img/1200px-PyTorch_logo_icon.svg.png" alt="PyTorch" width="100px" />
      <br /><strong>PyTorch</strong><br />For neural network optimization.
    </td>
    <td style="text-align: center;">
      <img src="img/550460.png" alt="Redis" width="100px" />
      <br /><strong>Redis</strong><br />For efficient caching and message brokering.
    </td>
  </tr>
  <tr>
    <td style="text-align: center;">
      <img src="img/png-transparent-aperture-laboratories-science-technology-laboratory-portal-science-blue-text-computer-thumbnail.png" alt="React" width="100px" />
      <br /><strong>React</strong><br />For a dynamic and responsive frontend.
    </td>
    <td style="text-align: center;" colspan="2">
      <img src="img/Django-Logo.png" alt="Django" width="100px" />
      <br /><strong>Django</strong><br />For a powerful and scalable backend.
    </td>
  </tr>
</table>



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





