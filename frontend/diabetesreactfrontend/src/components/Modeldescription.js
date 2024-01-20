// Component displaying information about each model
// Can be triggered by clicking on the model name in the model selection dropdown menu

import React from 'react';
import { Paper, Typography } from '@mui/material';

const modelDetails = {
    randomForest: {
        title: "Random Forest",
        description: "Random Forest is a versatile machine learning method capable of performing both regression and classification tasks. It's a type of ensemble learning method, where a group of weak models combine to form a powerful model.",
        // More details if necessary
    },
    cnn: {
        title: "CNN (Convolutional Neural Network)",
        description: "CNNs are deep learning algorithms that are particularly powerful for analysis of images. They are used extensively for image recognition and classification tasks.",
        // More details if necessary
    },
    rnn: {
        title: "RNN (Recurrent Neural Network)",
        description: "RNNs are networks with loops in them, allowing information to persist. They are used where context is crucial, such as in language modeling and other sequential tasks.",
        // More details if necessary
    }
};

const ModelDescription = ({ selectedModel }) => {
    const modelInfo = modelDetails[selectedModel];

    if (!modelInfo) return null; // If no model is selected, don't render anything

    return (
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h5" component="h3">
                {modelInfo.title}
            </Typography>
            <Typography component="p">
                {modelInfo.description}
            </Typography>
        </Paper>
    );
};

export default ModelDescription;
