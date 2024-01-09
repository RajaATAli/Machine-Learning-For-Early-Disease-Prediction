import React, { useState } from 'react';
import DataEntryForm from './components/DataEntryForm';
import ModelSelection from './components/ModelSelection';
import ModelDescription from './components/Modeldescription';
import './App.css';

function App() {
  const [selectedModel, setSelectedModel] = useState(''); // State to track the selected model

  const handleModelChange = (model) => {
    console.log('Selected Model:', model);
    setSelectedModel(model); // Update the state with the selected model
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Type 2 Diabetes Risk Prediction</h1>
      </header>
      <main>
        <ModelSelection onModelChange={handleModelChange} />
        <ModelDescription selectedModel={selectedModel} /> 
        <DataEntryForm />
      </main>
    </div>
  );
}

export default App;
