# Summmary of Research Paper - Predicting the onset of type 2 diabetes using wide and deep learning with electronic health records
https://doi.org/10.1016/j.cmpb.2019.105055

## Methodologies
- This model integrated the strengths of a generalized linear model with various features (wide part) and a deep feed-forward neural network (deep part). 
- The wide part memorized specific feature interactions, while the deep part generalized new feature interactions using low-dimensional dense embeddings. 
- The model was trained using stochastic gradient descent with a logistic loss function.

## Datasets
- The dataset consisted of de-identified electronic health records from the Practice Fusion EHRs for the U.S. population, including records of 9,948 patients, of whom 1,904 were diagnosed with T2DM.
- The data spanned from 2009 to 2011 and was used to predict diabetes in 2012. 
- The data included patient demographics, diagnoses, laboratory tests, and medications.
- The class imbalance in the dataset was addressed using the Synthetic Minority Oversampling Technique (SMOTE).

## Main Findings
- The final ensemble model, without using SMOTE, achieved an accuracy of 84.28%, with an Area Under the Receiver Operating Characteristic Curve (AUC) of 84.13%, sensitivity of 31.17%, and specificity of 96.85%.
- The use of SMOTE at 150% and 300% improved sensitivity (49.40% and 71.57%, respectively) but decreased specificity (90.16% and 76.59%, respectively).
- The study demonstrated that the wide and deep learning model outperformed traditional machine learning approaches in predicting T2DM onset.

## Gaps
- One primary challenge was the high dimensionality and sparsity of the dataset, which could impact the model's accuracy. 
- The model may not predict some vital risk factors due to the limitations inherent in deep learning methods

## Potential Research Questions
1. How can automatic feature selection methods improve the accuracy and efficiency of wide and deep learning models in predicting T2DM using EHR data?
2. What is the effect of employing more sophisticated embedding methods in the deep learning component of the model on its predictive performance for T2DM?
3. How generalizable is the wide and deep learning model for T2DM prediction across different EHR datasets and demographic populations?
4. How can wide and deep learning models be effectively integrated into clinical practice for early detection and management of T2DM, and what are the potential benefits and challenges?