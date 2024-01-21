import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataEntryForm from './components/DataEntryForm';
import ContributionForm from './components/ContributionForm';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';


function App() {
  const [selectedModel, setSelectedModel] = useState('');

  const handleModelChange = (model) => {
    console.log('Selected Model:', model);
    setSelectedModel(model);
  };

  return (
    <Router>
      <div className="App">
          <nav className="navbar" style={{'background-color':'#fffacc'}}>
            <a className="navbar-brand" href="#">
              <img src="logo.png" width="150" height="150" className="d-inline-block align-top" alt="DiabTech Logo" />
              <label style={{ fontFamily: 'cursive', fontSize: '100px', marginLeft: '10px' }}>DiabTech</label>
            </a>
          </nav>
        <Routes>
          <Route exact path="/" element={<main><DataEntryForm /></main>} />
          <Route path="/contribute" element={<ContributionForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
