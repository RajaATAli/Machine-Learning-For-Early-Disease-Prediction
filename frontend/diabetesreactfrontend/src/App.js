// import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DataEntryForm from './components/DataEntryForm';
import ContributionForm from './components/ContributionForm';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-heading">Predictive Type 2 Diabetes</div>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/contribute" className="nav-link">Contribute Data</Link>
          </div>
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
