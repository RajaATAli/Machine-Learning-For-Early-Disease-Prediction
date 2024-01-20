// Component for users to submit their actual diabetes status. 
// Includes form fields and consent checkbox.
import React, { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Button, FormGroup } from '@mui/material';

const ContributionForm = () => {
    const [formData, setFormData] = useState({
        diabetesStatus: '',
        additionalInfo: '',
        consentGiven: false
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(formData.consentGiven) {
            console.log('Form Data:', formData); // Replace with API call or further processing
        } else {
            alert('Please provide consent to submit your data.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <TextField
                    name="diabetesStatus"
                    label="Diabetes Status"
                    value={formData.diabetesStatus}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    name="additionalInfo"
                    label="Additional Information (Please Include information such as Age, Gender, Hypertension, Heart Disease, Smoking History, BMI, HbA1c Level, Blood Glucose Level) "
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    margin="normal"
                    multiline
                    rows={4}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="consentGiven"
                            checked={formData.consentGiven}
                            onChange={handleChange}
                        />
                    }
                    label="I consent to contribute my data for research and model improvement."
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit Contribution
                </Button>
            </FormGroup>
        </form>
    );
};

export default ContributionForm;