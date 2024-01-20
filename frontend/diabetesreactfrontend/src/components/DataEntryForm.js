// User Input Interface for Data Entry component.
// Should include TextField, Select, and other input components from Material-UI for capturing user data.

import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, FormGroup } from '@mui/material';

const DataEntryForm = () => {
    const [formData, setFormData] = useState({
        gender: '',
        age: '',
        hypertension: '',
        heartDisease: '',
        smokingHistory: '',
        bmi: '',
        hba1cLevel: '',
        bloodGlucoseLevel: ''
    });

    // Handles changes to form data
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // Can replace this with an API call
    };


    return (
        <form onSubmit={handleSubmit}>
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
                        value={formData.gender}
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
    
                {/* Submit Button */}
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </FormGroup>
        </form>
    );
    
};

export default DataEntryForm;
