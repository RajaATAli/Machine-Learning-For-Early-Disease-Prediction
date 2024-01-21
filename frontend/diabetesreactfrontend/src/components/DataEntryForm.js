import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, FormGroup, Paper, Typography } from '@mui/material';
import axios from 'axios';

const modelDetails = {
    rf: {
        title: "Random Forest",
        description: "Random Forest is a versatile machine learning method capable of performing both regression and classification tasks. It's a type of ensemble learning method, where a group of weak models combine to form a powerful model.",
        // More details if necessary
    },
    mlp: {
        title: "MLP (Multi-Layer Perceptron)",
        description: "A Multi-Layer Perceptron (MLP) is a type of artificial neural network composed of multiple layers of nodes or neurons, including an input layer, one or more hidden layers, and an output layer. Each neuron is connected to every neuron in the adjacent layers, and the network is trained using backpropagation to learn complex patterns and relationships in data.",
    },
};

const DataEntryForm = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [predictionResults, setPredictionResults] = useState(null);
    const [formData, setFormData] = useState({
        selectedModel: {
            name: '',
        },
        gender: {
            name: '',
        },
        age: '',
        hypertension: '',
        heartDisease: '',
        smokingHistory: '',
        bmi: '',
        hba1cLevel: '',
        bloodGlucoseLevel: ''
    });

    // New state variables for selectedModel and modelInfo
    const [selectedModel, setSelectedModel] = useState('');
    const [modelInfo, setModelInfo] = useState({
        title: '',
        description: ''
    });

    // Handles changes to form data
    // Handles changes to form data
    const handleChange = (event) => {
        const { name, value } = event.target;

        // If the field is 'gender' or 'selectedModel', update the nested dictionary
        if (name === 'gender' || name === 'selectedModel') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: {
                    name: value,
                },
            }));
        } else {
            // For other fields, update directly
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }

        // If the selected model changes, update both selectedModel and modelInfo
        if (name === 'selectedModel') {
            setModelInfo(modelDetails[value]);
        }
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/submit-data/', formData)
            .then(response => {
                console.log(response.data);
                setSuccessMessage('Data submitted successfully!');
                setErrorMessage(''); // Clear any previous error messages
                setPredictionResults(response.data); // Store the prediction results
                // Optionally, clear the form here
                setFormData({
                    selectedModel: {
                        name: '',
                    },
                    gender: {
                        name: '',
                    },
                    age: '',
                    hypertension: '',
                    heartDisease: '',
                    smokingHistory: '',
                    bmi: '',
                    hba1cLevel: '',
                    bloodGlucoseLevel: ''
                });
            })
            .catch(error => {
                console.error('There was an error!', error);
                setErrorMessage('Failed to submit data. Please try again.');
                setSuccessMessage('');
                setPredictionResults(null); // Reset prediction results on error
            });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="model-select-label">Select Model</InputLabel>
                    <Select
                        labelId="model-select-label"
                        id="model-select"
                        value={formData.selectedModel.name}
                        label="Select Model"
                        name="selectedModel"
                        onChange={handleChange}
                    >
                        <MenuItem value="rf">Random Forest</MenuItem>
                        <MenuItem value="mlp">MLP (Multi-Layer Perceptron)</MenuItem>
                    </Select>
                </FormControl>
                <Paper elevation={15} style={{ padding: '20px', marginTop: '20px' }}>
                    <Typography variant="h5" component="h3">
                        {modelInfo && modelInfo.title ? modelInfo.title : 'Model Title'}
                    </Typography>
                    <Typography component="p">
                        {modelInfo && modelInfo.description ? modelInfo.description : 'Model Description'}
                    </Typography>
                </Paper>

                <FormGroup>
                    {/* Age Field */}
                    <TextField
                        name="age"
                        label="Age"
                        type="number"
                        value={formData.age}
                        onChange={handleChange}
                        margin="normal"
                    />

                    {/* Gender Field */}
                    <FormControl margin="normal">
                        <InputLabel>Gender</InputLabel>
                        <Select
                            name="gender"
                            value={formData.gender.name}
                            onChange={handleChange}
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Hypertension Field */}
                    <FormControl margin="normal">
                        <InputLabel>Hypertension</InputLabel>
                        <Select
                            name="hypertension"
                            value={formData.hypertension}
                            onChange={handleChange}
                        >
                            <MenuItem value="yes">Yes</MenuItem>
                            <MenuItem value="no">No</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Heart Disease Field */}
                    <FormControl margin="normal">
                        <InputLabel>Heart Disease</InputLabel>
                        <Select
                            name="heartDisease"
                            value={formData.heartDisease}
                            onChange={handleChange}
                        >
                            <MenuItem value="yes">Yes</MenuItem>
                            <MenuItem value="no">No</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Smoking History Field */}
                    <FormControl margin="normal">
                        <InputLabel>Smoking History</InputLabel>
                        <Select
                            name="smokingHistory"
                            value={formData.smokingHistory}
                            onChange={handleChange}
                        >
                            <MenuItem value="current">Current Smoker</MenuItem>
                            <MenuItem value="former">Former Smoker</MenuItem>
                            <MenuItem value="never">Never Smoked</MenuItem>
                        </Select>
                    </FormControl>

                    {/* BMI Field */}
                    <TextField
                        name="bmi"
                        label="BMI"
                        type="number"
                        value={formData.bmi}
                        onChange={handleChange}
                        margin="normal"
                    />

                    {/* HbA1c Level Field */}
                    <TextField
                        name="hba1cLevel"
                        label="HbA1c Level"
                        type="number"
                        value={formData.hba1cLevel}
                        onChange={handleChange}
                        margin="normal"
                    />

                    {/* Blood Glucose Level Field */}
                    <TextField
                        name="bloodGlucoseLevel"
                        label="Blood Glucose Level"
                        type="number"
                        value={formData.bloodGlucoseLevel}
                        onChange={handleChange}
                        margin="normal"
                    />

                {/* Prediction Results */}
                {predictionResults && (
                <div>
                    <h3>Prediction Results:</h3>
                    <p>Model Name: {predictionResults.modelName}</p>
                    <p>Prediction: {predictionResults.prediction}</p>
                </div>
                 )}

                {/* Success Message */}
                {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}

                    {/* Error Message */}
                    {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

                    {/* Submit Button */}
                    <Button type="submit" variant="contained" style={{'background-color': '#fffacc'}}>
                        <label style={{'color' : 'black'}}>Submit</label>
                    </Button>
                </FormGroup>
            </form>
        </div>
    );
};

export default DataEntryForm;
