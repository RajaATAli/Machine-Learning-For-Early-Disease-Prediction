import joblib
import torch
import torch.nn as nn

# Load Random Forest model
def load_sklearn_model():
    model = joblib.load('model/diabetes_rf_model.joblib')
    return model

# PyTorch model class which defines the model architecture
'''
class PyTorchModel(nn.Module):
    def __init__(self):
        super(PyTorchModel, self).__init__()
        self.layers = nn.Sequential(
            nn.Linear(14, 7),
            nn.ReLU(),
            nn.Linear(7, 7),
            nn.ReLU(),
            nn.Linear(7, 7),
            nn.ReLU(),
            nn.Linear(7, 1),
            nn.Sigmoid(),
            nn.Flatten(start_dim=0)
        )

    def forward(self, x):
        return self.layers(x)
'''

# Load PyTorch model
def load_pytorch_model():
    # Load the entire model
    model = torch.load('model/diabettes_classifier.pt')
    model.eval()  # Set the model to evaluation mode
    return model