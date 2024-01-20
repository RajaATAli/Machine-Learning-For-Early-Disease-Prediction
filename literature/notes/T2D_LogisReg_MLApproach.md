# Summary of Research Paper - Predicting Type 2 Diabetes Using Logistic Regression and Machine Learning Approaches
https://doi.org/10.3390/ijerph18147346

## Methodologies
1. The study utilized **logistic regression models** to predict diabetes. Model 6, which included four interaction terms, was found to have the highest prediction accuracy among the models considered.
2. The researchers used decision trees as a machine learning algorithm-based classification method. The trees were pruned to different sizes, and their prediction accuracy and cross-validation error rates were calculated. The study compared trees with ten and six internal nodes, with the six-node subtree demonstrating comparable accuracy to the ten-node tree.
3. The study employed prediction accuracy, cross-validation errors, and confusion matrices to evaluate and validate the models. Eight-fold cross-validation was performed to determine the model's predictive ability.

## Datasets
- The primary dataset used in the study was the Pima Indian dataset.

## Main Findings
- The pruned **decision tree** with ten nodes had a prediction accuracy of 74.48%, equivalent to the accuracy of a six-node subtree.
- Model 6, developed using logistic regression, demonstrated the highest prediction accuracy of 78.26% among all models in the study. Its classification error rate was 21.74%, and its prediction error rate after eight-fold cross-validation was 22.86%.
- The study proposed a predictive equation for diabetes based on logistic regression, which included terms for pregnancy, glucose, BMI, pedigree, age, and insulin, along with interaction terms.

\[
\text{Logit}(\pi) = -25.4 + 1.28 \times \text{Pregnancy} + 0.16 \times \text{Glucose} + 0.09 \times \text{BMI} + 1.73 \times \text{Pedigree} + 4.4 \times \text{Age} - 0.04 \times \text{Insulin} - 0.32 \times \text{Pregnancy} \times \text{Age} - 0.03 \times \text{Glucose} \times \text{Age} - 0.01 \times \text{Pedigree} \times \text{Insulin} + 0.01 \times \text{Age} \times \text{Insulin}
\]

- The main predictors for diabetes identified were the frequency of pregnancies in women, glucose levels, pedigree, BMI, and age.

## Gaps
1. The study was limited by the number of predictors considered, primarily due to data limitations. (This is a common trend I am seeing from researchers using the PIMA Indian Dataset)
2. Different locations, dataset types, and algorithms may yield different results, indicating that the models' validity might vary based on these factors.
3. Missing values in the dataset were replaced with medians of the respective variables, consequently influencing the result

## Potential Research Questions for Future Study:
1. Future studies could consider a broader range of risk factors, such as genetic traits, gender, socio-economic status, physical activity levels, smoking habits, health information, food consumption, and spending patterns.
2. How well does the proposed model predict diabetes in different populations, considering variations in diet, lifestyle, race, and genetic makeup?
3. How do other machine learning algorithms, such as neural networks, support vector machines, or ensemble methods, perform in comparison to decision trees and logistic regression on the Pima Indian dataset?
4. What would be the effects on prediction accuracy and model robustness if other imputation methods, rather than median replacement, were used for handling missing values?

