// import logo from './logo.svg';
import React from 'react';
import DataEntryForm from './components/DataEntryForm';
import ModelSelection from './components/ModelSelection';
import './App.css';

function App() {

  // Function to handle model selection changes
  const handleModelChange = (model) => {
    console.log('Selected Model:', model); // Can replace this with an API call - placeholder for now
    // Add further actions here based on the selected model
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Type 2 Diabetes Risk Prediction</h1>
      </header>
      <main>
        <ModelSelection onModelChange={handleModelChange} /> {/* Passes the handleModelChange function as a prop */}
        <DataEntryForm />
      </main>
    </div>
  );
}

export default App;
