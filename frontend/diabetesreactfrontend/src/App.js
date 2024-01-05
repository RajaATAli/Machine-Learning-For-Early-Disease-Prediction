// import logo from './logo.svg';
import React from 'react';
import DataEntryForm from './components/DataEntryForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Type 2 Diabetes Risk Prediction</h1>
      </header>
      <main>
        <DataEntryForm />
      </main>
    </div>
  );
}

export default App;
