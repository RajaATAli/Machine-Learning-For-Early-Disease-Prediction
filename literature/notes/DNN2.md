# Summary of Research Paper - Type 2: Diabetes mellitus prediction using Deep Neural Networks classifier
https://doi.org/10.1016/j.ijcce.2020.10.002

- Explores the use of deep learning, specifically Deep Neural Networks (DNN), for the prediction of Type 2 diabetes.
- The study focuses on improving the accuracy of diabetes predictions using an unsupervised learning approach and feature selection techniques.

## Methodologies
1. Deep Neural Network (DNN) Classifier: A complex network structure of Artificial Neural Network (ANN) with multiple hidden layers, employed for classifying Type 2 diabetes.
2. Feature Importance Model: Used for feature selection, this model combines Extra Trees and Random Forest to identify critical features in the dataset.
3. Unsupervised Learning Approach: The study employs this approach for the accurate prediction of diabetes.

## Datasets
**Pima Indian Diabetes dataset (PID)**: Obtained from the UCI repository, it consists of 768 instances with nine attributes. This dataset is known for its use in binary classification tasks related to diabetes prediction.

## Main Findings
- The model achieved an accuracy of 98.16% on a random train-test split, outperforming other state-of-the-art methods.
- The Feature Importance model identified key attributes (plas, mass, pedi, and age) contributing to the model's accuracy.
- The DNN classifier showed better performance in comparison to traditional machine learning algorithms.

## Gaps
- Computational time required for the DNN Model
- The research primarily focuses on the Pima Indian Diabetes dataset, and its applicability to other datasets or populations is not extensively explored.

## Potential Research Questions
- Can the model's efficiency be improved to reduce computational time, possibly through optimization techniques like genetic algorithms or particle swarm optimization?
- Could the integration of other machine learning techniques enhance the model's prediction accuracy or reduce the computational burden?