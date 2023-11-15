# Summary of Research Paper - Detecting High-Risk Factors and Early Diagnosis of Diabetes Using Machine Learning Methods
https://doi.org/10.1155/2022/2557795



## Related Work
- Various datasets like Pima Indian Diabetes Dataset (PIDD) and Behavioral Risk Factor Surveillance System (BRFSS) have been used in past studies.
- Methods like principal component analysis (PCA), random oversampling, and various ML algorithms (e.g., Random Forest, Support Vector Machine) have been employed.
- Earlier studies have shown varied success rates using different ML models.

## Methodology
- Data was sourced from the BRFSS dataset available on Kaggle.
- Addressed challenges like imbalance using the Synthetic Minority Over-sampling Technique integrated with Edited Nearest Neighbor (SMOTE-ENN).
- Employed various ML models including K-Nearest Neighbor (KNN), Random Forest (RF), XGBoost, Bagging, and AdaBoost. Hyperparameter tuning was done to optimize each model.

## Setup
- The dataset was divided into a training set (70%) and a test set (30%).
- Used metrics such as accuracy, precision, recall, F-measure, specificity, and ROC/AUC score.

## Results
- KNN achieved the highest accuracy (98.38%) among the models.
- The proposed models outperformed existing state-of-the-art models.
- The use of SMOTE-ENN for data balancing significantly improved model accuracy.
-  Highlights the importance of high-quality data preparation in healthcare prediction.

## Gaps
- While the BRFSS dataset is comprehensive, it is limited to certain demographics and geographic locations.
- The study primarily focused on certain algorithms like KNN, RF, XGBoost, etc. There may be other ML algorithms or newer methods that could yield better results.
- How these models perform in real-world clinical settings, considering factors like data variability and practical constraints, isn't explored.

## Possible Research Questions
1. Can these models predict the progression of diabetes or its complications over a long period?
2. How can these models be integrated into clinical workflows? What are the challenges and impacts of such integration?
3. How can ML models be developed to adapt and update as new data becomes available, especially in changing clinical and demographic scenarios?
