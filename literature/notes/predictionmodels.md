# Summary of Research Paper - Early detection of type 2 diabetes mellitus using machine learning-based prediction models

Kopitar, Leon, et al. "Early detection of type 2 diabetes mellitus using machine learning-based prediction models." Scientific reports 10.1 (2020): 11981.

- The study evaluates the efficacy of machine learning (ML)-based models **(Glmnet, RF, XGBoost, LightGBM)** against standard regression models for predicting undiagnosed Type 2 Diabetes Mellitus (T2DM). 
- The performance of these models in predicting fasting plasma glucose levels was assessed using 100 bootstrap iterations across varying data subsets, simulating incoming data in 6-month intervals.
- The study found no significant improvement using complex ML models over simpler regression methods. 
- Stability of variable selection over time was highest in LightGBM models. 
- The study emphasizes the importance of model interpretability and calibration in clinical prediction models.
- This study explores if ML-based models can outperform these methods, particularly in predicting impaired fasting glucose (IFG) and fasting plasma glucose level (FPGL) values using electronic health record (EHR) data.

## Methods
- Data was sourced from EHRs of 27,050 adults in Slovenian primary healthcare centers (Dec 2014 - Sep 2017). After preprocessing, the final dataset included data from 3,723 individuals.
- Models used: linear regression (lm), Glmnet (Lasso regression), Random Forests (RF), XGBoost, Light Gradient Boosting Machine (LightGBM).
- Evaluation metrics included Root Mean Square Error (RMSE), Area Under the Curve (AUC), and Area Under the Precision-Recall Curve (AUPRC).
- Variable importance and model calibration were also assessed.

## Results
- Initially, the simple regression model performed best in terms of RMSE, but with more data, Glmnet improved most significantly.
- LightGBM displayed the highest variable selection stability.
- In terms of AUC, Glmnet outperformed other methods on later datasets.
- However, no clinically significant improvement was observed with complex ML models over simpler ones.
- Model calibration suggested limited utility of sophisticated models like XGBoost for undiagnosed T2DM prediction.

## Gaps
- The study utilized data from a single source 
- The study focused on a few selected ML models (Glmnet, RF, XGBoost, LightGBM). Exploring a wider array of ML techniques could uncover different insights, especially in variable selection and model performance.

## Potential Research Questions
- What is the Impact of Advanced Model Calibration Techniques?
- How Do Machine Learning Models Adapt Over Time With Continuous Data? 
- Exploring Ensemble Methods in T2DM Prediction?
