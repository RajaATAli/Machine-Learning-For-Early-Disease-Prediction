# Summary of Research Paper - A data-driven approach to predicting diabetes and cardiovascular disease with machine learning
DOI: 10.1186/s12911-019-0918-5

## Methodologies
**Data Preprocessing:**
- Missing values were dealt with by dropping variables with more than 50% missing values.
- Two separate datasets were created for diabetes prediction to maximize variable availability across different timeframes.
- Data was split into "laboratory" and "no laboratory" datasets to analyze performance when laboratory results are unavailable.
- An 80/20 train/test split was used with downsampling to balance the datasets.
- Grid-search with parallelized performance evaluation and 10-fold cross-validation was used for model parameter tuning.

**Models:**
- A Weighted Ensemble Model (WEM) was developed, which used a weighted average of probabilities from individual models. The weights were based on the AUC score of each model.
- Logistic Regression, Support Vector Machine (SVM), Random Forests, and Gradient Boosting were the primary models used.

## Datasets
- Data was sourced from the National Health and Nutrition Examination Survey (NHANES) spanning different cycles.
**Sizes and Characteristics:**
