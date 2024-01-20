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
- The initial dataset had 185 variables, reduced to 123 for the 1999-2014 cycle after data cleaning.
- Two diabetes datasets: 1999-2014 with 123 variables, and 2003-2014 with 168 variables.
- One CVD dataset: 2007-2014 with 131 variables.
- The datasets were categorized into “laboratory” and “no laboratory” subsets.
- Subject exclusion criteria were applied, focusing on non-pregnant adults aged 20 and above.

## Main Findings:

**Diabetes Prediction:**
- WEM and XGBoost consistently outperformed other models.
- The inclusion of laboratory results significantly improved predictive capabilities, with XGBoost achieving an AU-ROC score of 95.7%.
- Models performed better in predicting diabetic patients (Case I) than prediabetic and undiagnosed diabetic patients (Case II).
- The ensemble models showed a substantial advantage over linear models.

**CVD Prediction:**
- The models achieved around 84% accuracy in identifying patients with cardiovascular issues.
- There was minimal performance gain when including laboratory results in the models.
WEM, Random Forest, and XGBoost showed slightly better performance than logistic regression and SVM.

## Gaps: 
1. Limited Timeframes and Observations:
- The study is limited to specific timeframes and the number of available observations, which might affect the model's generalizability.

2. Focus on Specific Age Group and Condition:
- The study focused on non-pregnant adults aged 20 and above, potentially limiting its applicability to other demographic groups.
- It specifically targeted Type II Diabetes, excluding other types.

## Potential Research Questions:
1. How do machine learning models perform in predicting diabetes and cardiovascular diseases across different demographic groups?

2. Can the models developed be generalized to other types of diabetes or cardiovascular conditions?

3. How does the inclusion of more recent data affect the performance of the models?
The study used data up to 2014. Incorporating more recent data could provide insights into the models' current relevance and performance.

4. What is the impact of using different data imputation methods on the model's performance?
- The study dropped variables with more than 50% missing values. Exploring different imputation methods could potentially improve model performance and provide a more comprehensive analysis.

5. How do machine learning models perform in predicting these diseases in real-world, clinical settings?