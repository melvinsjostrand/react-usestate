import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React from "react";

function App() {
  const interestRates = [0.03, 0.04, 0.05];

  const [selectedRate, setSelectedRate] = useState(0.03);
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 1, name: "Apple", loan: 100 },
    { id: 2, name: "Banana", loan: 50 },
    { id: 3, name: "Orange", loan: 80 },
    { id: 4, name: "Grapes", loan: 120 },
    { id: 5, name: "Mango", loan: 150 },
    { id: 6, name: "Pineapple", loan: 200 },
    { id: 7, name: "Strawberry", loan: 250 },
  ];

  const handleDetails = (item) => {
    setSelectedItem(item);
  };

  const clearDetails = () => setSelectedItem(null);

  const interest = selectedItem
    ? selectedItem.loan * selectedRate
    : 0;

  const total = selectedItem
    ? selectedItem.loan + interest
    : 0;

  return (
    <div className="container">
      <h1>Interest Rate Calculator</h1>


      {selectedItem && (
        <div className="result-box">
          <h2>{selectedItem.name}</h2>
          <p>Loan: ${selectedItem.loan}</p>
          <p>Interest: ${interest.toFixed(2)}</p>
          <p className="total">Total: ${total.toFixed(2)}</p>

          <button className="clear-btn" onClick={clearDetails}>
            Remove Details
          </button>
        </div>
      )}

      <div className="controls">
        <label>Interest Rate: </label>
        <select
          value={selectedRate}
          onChange={(e) => setSelectedRate(parseFloat(e.target.value))}
        >
          {interestRates.map((rate) => (
            <option key={rate} value={rate}>
              {rate * 100}%
            </option>
          ))}
        </select>
      </div>

      <div className="grid">
        {items.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>Loan: ${item.loan}</p>

            <button onClick={() => handleDetails(item)}>
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

