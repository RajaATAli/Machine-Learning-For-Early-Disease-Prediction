# Summary of Research Paper - Prognosis and Treatment Prediction of Type-2 Diabetes Using Deep Neural Network and Machine Learning Classifiers

https://doi.org/10.1109/ICCIT48885.2019.9038574

- The study focuses on predicting the onset and treatment of Type-2 Diabetes Mellitus (T2DM) using machine learning classifiers and deep neural networks.
- It involves a comparative analysis of seven machine learning algorithms and an artificial neural network (ANN) method.
- The dataset consists of 9483 patient records. The goal is to use these models to identify T2DM at an early stage with high accuracy, aiding in treatment decisions.
- The deep ANN model achieved the highest accuracy at 95.14%.

## Dataset
- Source: Noakhali Medical College, Bangladesh.
- Size: 9483 patient records, with 14 symptoms per record.
- Split: 80% training, 20% testing.

## Methodologies
**Data Preprocessing**
- Handling missing values using the mean method.
- Categorical value encoding and feature selection (focusing on impactful features).
- Feature scaling using Min-Max normalization.
- Dimensionality reduction using Principal Component Analysis (PCA).

**Algorithms used**
- Machine Learning Classifiers: Logistic Regression, KNN, Decision Tree, Naive Bayes, SVM, Linear Discriminant Analysis, Random Forest.
- Artificial Neural Network: A deep learning approach with six hidden layers and 25 epochs.

**Validation Method:** K-Fold Cross-Validation (k=10)

## Findings
- Deep ANN outperformed other models with an accuracy of 95.14%.
- The addition of a hidden layer and increasing epochs to 100 further improved performance.
- Random Forest was the most effective among the machine learning classifiers.
- Future work includes enhancing accuracy, exploring more classifiers, extending the application to other diseases, and developing smartphone applications for T2DM management.

## Gaps
- Limited diversity in the dataset (single source).
- Inadaptability to various datasets was not thoroughly explored.
- Focus on algorithmic performance, less on clinical applicability.

## Potential Research Questions
- What are the implications and effectiveness of these models in actual clinical settings?
- How can the model integrate with existing healthcare IT systems for practical use?