from sklearn.datasets import load_iris
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import ConfusionMatrixDisplay
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import seaborn as sns
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.neural_network import MLPClassifier
from sklearn.datasets import make_classification

data = pd.read_csv("cleaned_diabetes_one_hot_encoding.csv")
#data = pd.read_csv("cleaned_diabetes_one_hot_encoding_BMI_Outliers.csv")


display_labels = {"No Diabetic", "Yes Diabetic"}


#features = data.columns.tolist()
#features.remove("diabetes")

# Seperating Features (X) AND target Variable (Y)


gk = data.groupby('diabetes')

diabetes_true = gk.get_group(1)
diabetes_false = gk.get_group(0)
#diabetes_false = diabetes_false.sample(16056)
print(diabetes_true.shape[0])
print(diabetes_false.shape[0])
data = pd.concat([diabetes_false, diabetes_true])
print(data.shape[0])
X = data.drop(['diabetes'], axis=1)
Y = data['diabetes']

#sns.pairplot(data=data, x_vars=["HbA1c_level"], y_vars=["blood_glucose_level"], hue="diabetes")

# Splitting the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.2, random_state=42)

"""
plot = plt.scatter(data["bmi"],data["heart_disease"], c=Y)

plt.legend(handles=plot.legend_elements()[0], labels=["No", "Yes"])
plt.show()
"""
"""
scaler = StandardScaler()
scaler.fit(X_train)

X_train = scaler.transform(X_train)
X_test = scaler.transform(X_test)
"""

#model = LogisticRegression(random_state=0).fit(X_train, y_train)
#y_pred = model.predict(X_test)

model = MLPClassifier(solver='adam', alpha=1e-4, hidden_layer_sizes=(7,14), random_state=1)
model = model.fit(X_train, y_train)
print(X_test)
y_pred = model.predict(X_test)
classification_dict = classification_report(y_test, y_pred, output_dict=True)
df = pd.DataFrame(classification_dict)
print(df)
#ConfusionMatrixDisplay.from_estimator(model, X_test, y_test, display_labels=display_labels)
#plt.show()
"""
classification_dict = classification_report(y_test, y_pred, output_dict=True)
df = pd.DataFrame(classification_dict)
print(df)
"""