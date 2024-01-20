# Summary of Research Paper - Development and internal validation of machine learning algorithms for end-stage renal disease risk prediction model of people with type 2 diabetes mellitus and diabetic kidney disease
https://doi.org/10.1080/0886022x.2022.2056053

- Diabetic kidney disease (DKD) is a major cause of end-stage renal disease (ESRD), with significant impacts on morbidity and mortality in diabetic patients. 
- This study aims to establish a risk prediction model for ESRD in type 2 diabetes mellitus (T2DM) patients with DKD using machine learning algorithms.

## Methodologies
- Period: January 2008 to July 2019
- Participants: 390 Chinese patients with T2DM and DKD, confirmed by percutaneous renal biopsy.
- Follow-up: At least 1 year, with a median of 3 years.
- Algorithms Used: Gradient Boosting Machine, Support Vector Machine, Logistic Regression, and Random Forest (RF).
  - Ensemble Models: Random Forest, Gradient Boosting Machine
  - Non-Ensemble Models: Support Vector Machine, Logistic Regression
- Objective: To identify critical clinical and pathological features and build a risk prediction model for ESRD.
- Data Split: Training (75%) and Validation (25%).

## Datasets
- Source: Chinese patients with T2DM and DKD.
- Size: 390 participants.
- Characteristics: Clinical and pathological data, including demographics, lab results, and renal biopsy information.

## Main Findings
- ESRD Events: 158 events (40.51%) during the follow-up.
- Best Performing Algorithm: Random Forest, with AUC of 0.90 and ACC of 82.65%.
- Major Predictive Factors: Cystatin-C, serum albumin (sAlb), hemoglobin (Hb), 24-hour urine urinary total protein, and estimated glomerular filtration rate (eGFR).
- Model Output: A nomogram was constructed for risk prediction.
- Comparison with Previous Studies: The importance of sAlb and Hb is highlighted in this model, compared to previous models.

## Gaps and Limitations
- The study is based on a single-center dataset, which might not represent the entire Chinese population.
- The sample size is moderate, and larger studies might be required for more comprehensive insights.
- Some potential factors like history of acute kidney injury, genetic factors, and socioeconomic status were not included.
- The long enrollment period may have introduced variability in treatment plans.

## Potential Research Questions
- How does the model perform when validated in different ethnic populations or in multicenter studies?
- How would the inclusion of genetic factors, history of acute kidney injury, and socioeconomic status impact the model's performance?
- What are the long-term outcomes of patients identified as high-risk by this model, and how can interventions be tailored for them?
- How does the progression to ESRD in T2DM patients with DKD compare to patients with other types of kidney diseases?


## Conclusions and Deductions
1. The study successfully developed a risk prediction model for ESRD in T2DM patients with DKD using machine learning algorithms, with the Random Forest algorithm showing the best performance. 
2. The major predictive factors identified were Cystatin-C, serum albumin, hemoglobin, 24-hour urine urinary total protein, and estimated glomerular filtration rate. 
3. **The results highlight the need for a shift in focus towards indicators related to kidney function, nutrition, anemia, and proteinuria for patients with advanced DKD to delay the onset of ESRD.**