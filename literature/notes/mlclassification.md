# Summary of Research Paper - Prediction of Type 2 Diabetes using Machine Learning Classification Methods
https://doi.org/10.1016/j.procs.2020.03.336

## Methodologies
- Logistic regression, K-nearest neighbor (KNN), support vector machine (SVM), naive Bayes classifier, decision tree, and random forest classifiers.
- Implemented in RStudio using the R programming language.
- Each algorithm was applied to the datasets to predict diabetes, with results compared using various statistical measures.

## Datasets
1. Self-Collected Data:
- Size: 952 instances.
- Method: Online and offline questionnaires.
- Content: 18 questions related to health, lifestyle, and family background.
- Demographics: Participants aged 18 and above, including 580 males and 372 females.

2. Pima Indian Diabetes Database (PIDD)
- Size: 768 instances.
- Demographics: All female participants, aged 21 or above.

## Main Findings
- The Random Forest Classifier was found to be the most accurate for both datasets
- ‘Age’, ‘Family diabetes’, ‘Physically active’, ‘Regular Medicine’, and ‘Gestation diabetes’ identified as highly significant variables.
- Accuracy: 94.10% for the self-collected dataset and high accuracy for PIDD.
- The self-collected dataset yielded higher accuracy due to more relevant fields for assessing diabetes risk.

## Gaps
- The study primarily focuses on the Indian population, which might limit its generalizability.
- Only six machine learning algorithms were tested. There might be other algorithms or combinations that could yield better results.
- Only specific variables were included in the study. Incorporating more diverse health indicators might enhance prediction accuracy.

## Potential Research Questions
1. How do other advanced machine learning algorithms or ensemble methods compare in predicting diabetes risk?
2. How do these models perform in longitudinal studies to validate their predictions over time?
