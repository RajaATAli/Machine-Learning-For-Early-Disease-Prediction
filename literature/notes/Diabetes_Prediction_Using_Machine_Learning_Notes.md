# Summary of the Research Paper
By Ashwini R, S M Aiesha Afshin, Kavya V, Prof. Deepthi Raj
DOI: 10.22214/ijraset.2022.41143

1. Diabetes mellitus is caused by excessively high blood sugar levels
2. Researchers use various machine learning algorithms like logistic regression, KNN, SVM, and Random Forest to diagnose diseases, as these methods have been shown to be more effective.

## Methodologies
1. Machine Learning Techniques: The research utilizes various machine learning algorithms for diabetes prediction. These include:

- Logistic Regression: A predictive analysis for categorical dependent variables.
- K-nearest Neighbors (KNN): A supervised classifier, ideal for classification problems.
- Random Forest: An ensemble learning technique used for both classification and regression.
- Support Vector Machine (SVM): A supervised learning algorithm, useful for classification and regression.

2. Data Processing & Analysis:
- Data preprocessing to handle missing values.
- 80% of the data is used for training, and 20% is set aside for testing.
- Model creation using the mentioned machine learning algorithms.
- Testing the model's efficacy.
- Comparative evaluation of each classifier's test performance.
- Analyzing metrics to determine the best-performing algorithm.

3. Datasets Used:
- [PIMA Diabetes Dataset (UCI ML Repository)](https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database)
  - Contains eight attributes and a class label
  - All patients here are females at least 21 years old of Pima Indian heritage.
- [Indian Diabetes Dataset (PIMA)](https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database)
  - Used for analysis, this dataset consists of eight independent attributes and one independent class attribute.

**Improving the classification accuracy will make machine learning models more effective in predicting diabetes.**

## Literature Review
#### 1. Sneha, N. and Gangil, T. (2019)
Analysis of diabetes mellitus for early prediction using optimal features selection. Journal of Big Data, 6(1), p.13.
- Importance of selecting appropriate attributes in the early detection of Diabetes Mellitus
- The data for the study was sourced from the UCI machine repository, utilizing 15 attributes for classification
- The classifiers engaged were Support Vector Machine, Random forest, and Naïve Bayes, achieving accuracies of 77.73 %, 75.39%, and 73.48% respectively.

#### 2. Sisodia, D. and Sisodia, DS (2018)
Prediction of diabetes using classification algorithms. Procedia computer science, 132, pp.1578-1585.
- This paper presented a support system designed for estimating diseases, including diabetes, leveraging the Pima Indian Selected Diabetes Database (PIDD).
- They employed three machine learning recognition algorithms: Bayes Naive, SVM, and Decision Tree, aiming to diagnose diabetes at earlier stages. The algorithms achieved accuracies of 76.3%, 65.1%, and 73.82% respectively.

#### 3. Rahul Joshi and Minyechil Alehegn (2017)
Analysis and prediction of diabetes diseases using machine learning algorithm: Ensemble approach, International Research Journal of Engineering and Technology Volume: 04 Issue: 10 | Oct - 2017.

- They emphasized ensemble approaches, integrating KNN and Naïve Bayes algorithms.
- heir methodology achieved a high accuracy of 90.36%, outperforming other techniques such as Decision Stump, which yielded an accuracy of 83.72%.

#### 4. Santhanam, T. and Padmavathi, M.S. (2015)
Application of K-means and genetic algorithms for dimension reduction by integrating SVM for a diabetes diagnosis. Procedia Computer Science, 47, pp.76-83.
- In this research, the authors introduced the K-means method to filter out noisy data and employed genetic algorithms to identify the optimal feature set. 
- They integrated these with the Support Vector Machine (SVM) as the primary classifier
- Their model achieved a notable average accuracy of 98.79% for the Pima Indian diabetes dataset from the UCI repository.

## Gaps and Potential Research Questions

1. The research suggests that a **combination of classifiers** might yield higher accuracies. This raises the question: How can ensemble methods be optimized further for diabetes prediction? How can we use ensemble methods for early diabetes prediction?
2. The emphasis on optimal **feature selection** in referenced literature suggests a potential avenue for further exploration. Which features are most predictive, and how can they be efficiently selected?
3. The use of the PIMA dataset is common, but are there other datasets that could provide more insights or diverse patient profiles?
4. Are there newer algorithms or neural network architectures that could outperform the mentioned classifiers?

# Summary of Research Paper 2
Author(s): Sania Faraz, Pawan Singh
Institution: Amity School of Engineering and Technology Lucknow, Amity University Uttar Pradesh, India

1. It's a serious disease affected by factors like age, obesity, inactivity, genetics, poor diet, and high blood pressure. The body converts most food to sugar, which is regulated by insulin.
**Support Vector Machines(SVM)**
- SVM is a supervised learning algorithm used for classification and regression.
- It aims to find an optimal decision boundary called a hyperplane.
- Support vectors are the closest points to the hyperplane and influence its position.
- SVM can be linear (separated by a straight line) or non-linear (requires adding an additional dimension).

## Implementation
- Libraries used: NumPy (for array manipulation) and Pandas (for data handling).
**Data Collection and Analysis**
- Used the PIMA Indian diabetes dataset.
- The dataset has attributes like pregnancies, glucose, blood pressure, skin thickness, insulin, BMI, diabetes pedigree function, age, and outcome.
**Data Standardization**
- Standardization scales data so that its standard deviation is 1 and mean is 0.
- It's important for algorithms like logistic regression, linear regression, and linear discriminant analysis.

- Train Test Split: Data is randomly divided into training and test subsets.
- For training the model SVM (support vector classifier) is used.

**Steps**
- Dependencies like NumPy and Pandas were imported.
- Data was standardized using the Standard Scaler Function from sklearn.
- The data was split into training and testing sets.
- The model was trained using the support vector classifier.
- The model's accuracy was evaluated using the accuracy score from sklearn.

## Conclusion
- The study explored the SVM algorithm.
- The model achieved an accuracy of around 79% in predicting diabetes.

## Gaps and Potential Research Questions
- The exact methods of preprocessing and feature selection were not extensively discussed.
- The paper did not compare SVM with other machine learning models apart from mentioning Random Forest.
- What are the main features or variables that influence the prediction the most?
