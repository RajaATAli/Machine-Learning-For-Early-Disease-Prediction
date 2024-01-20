import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DataEntryForm from './components/DataEntryForm';
import ModelSelection from './components/ModelSelection';
import ModelDescription from './components/Modeldescription';
import ContributionForm from './components/ContributionForm';
import './App.css';

function App() {
  const [selectedModel, setSelectedModel] = useState(''); // State to track the selected model

  const handleModelChange = (model) => {
    console.log('Selected Model:', model);
    setSelectedModel(model); // Update the state with the selected model
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Type 2 Diabetes Risk Prediction</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/contribute">Contribute Data</Link>
          </nav>
        </header>
        <Routes>
          <Route exact path="/" element={
            <main>
              <ModelSelection onModelChange={handleModelChange} />
              <ModelDescription selectedModel={selectedModel} /> {/* Correctly passing selectedModel as a prop */}
              <DataEntryForm />
            </main>
          } />
          <Route path="/contribute" element={<ContributionForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
