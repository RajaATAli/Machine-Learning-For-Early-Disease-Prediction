# Summary of Research Paper - Predictive modelling and analytics for diabetes using a machine learning approach
https://doi.org/10.1016/j.aci.2018.12.004

## Dataset and Methods
- The study uses data from female Pima Indian patients over 21 years old, consisting of 768 instances with eight risk factors, sourced from the UCI Machine Learning Repository.
- Involves feature selection, removal of outliers, and k-NN imputation for missing values. The **Boruta feature** selection algorithm was used to identify relevant features.

## Predictive Model 
- The study employs **supervised ML algorithms** for binary classification:
1. Support Vector Machine (SVM) with linear and Radial Basis Function (RBF) kernels.
2. k-Nearest Neighbours (k-NN).
3. Artificial Neural Network (ANN).
4. Multifactor Dimensionality Reduction (MDR).

- Each model was developed and optimized using the R programming language, focusing on high correlation variables and feature engineering.

## Results
- valuated based on precision, recall, F1 score, Area Under Curve (AUC), and accuracy. Tenfold cross-validation was used to mitigate overfitting.
- The SVM-linear and k-NN models showed the best performance. The SVM-linear model had higher accuracy and precision, while the k-NN model excelled in recall and F1 score.
- The paper highlights the significance of considering F1 scores in the context of imbalanced datasets, like the one used in this study.

## Conclusion
- The SVM-linear model demonstrated the highest accuracy and precision, while the k-NN model was superior in terms of recall and F1 score.
- The Boruta wrapper algorithm proved effective for feature selection, leading to better model accuracy and precision.
- Both SVM-linear and k-NN are considered optimal classifiers for the dataset.

## Gaps
- The study is limited to the Pima Indian dataset. Research could explore the applicability of these models to other populations.
- Further investigation into the impact of different feature selection techniques on model performance could be insightful.
- Additional comparative studies with other ML algorithms could provide a broader perspective on diabetes prediction models.

## Potential Research Questions
1. How do other machine learning algorithms, such as deep learning models or ensemble methods, compare to the ones used in the study in terms of accuracy, precision, and recall for diabetes prediction?
2. Could the integration of longitudinal patient data improve the predictive accuracy of the models? (**time-series data**)
3. How does the choice of feature selection methods (e.g., Boruta algorithm vs. other feature selection techniques) impact the performance of diabetes prediction models?
4. How can these machine learning models be integrated with EHR systems to enhance early diabetes detection in routine clinical practice?
