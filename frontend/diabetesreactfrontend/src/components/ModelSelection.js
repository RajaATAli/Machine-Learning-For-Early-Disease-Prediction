// Component for the model selection dropdown menu
// Manages the selection state and handles changes to the selection

import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ModelSelection = ({ onModelChange }) => {
    const [selectedModel, setSelectedModel] = useState('');

    const handleModelChange = (event) => {
        setSelectedModel(event.target.value);
        if (onModelChange) {
            onModelChange(event.target.value);
        }
    };

    return (
        <FormControl fullWidth margin="normal">
            <InputLabel id="model-select-label">Select Model</InputLabel>
            <Select
                labelId="model-select-label"
                id="model-select"
                value={selectedModel}
                label="Select Model"
                onChange={handleModelChange}
            >
                <MenuItem value="randomForest">Random Forest</MenuItem>
                <MenuItem value="cnn">CNN (Convolutional Neural Network)</MenuItem>
                <MenuItem value="rnn">RNN (Recurrent Neural Network)</MenuItem>
            </Select>
        </FormControl>
    );
};

export default ModelSelection;
