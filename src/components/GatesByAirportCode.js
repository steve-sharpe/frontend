import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GatesByAirportCode() {
  const [airportCode, setAirportCode] = useState('');
  const [gates, setGates] = useState([]);
  const [airportCodes, setAirportCodes] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    // Fetch the list of airport codes when the component mounts
   axios.get(`${API_BASE_URL}/airports/codes`)
      .then(response => setAirportCodes(response.data))
      .catch(error => console.error('Error fetching airport codes:', error));
  }, []);

  const fetchGates = () => {
    axios.get(`${API_BASE_URL}/airports/code/${airportCode}/gates`)
      .then(response => setGates(response.data))
      .catch(error => console.error('Error fetching gates:', error));
  };

  return (
    <div>
      <h1>Find Gates by Airport Code</h1>
      <select value={airportCode} onChange={(e) => setAirportCode(e.target.value)}>
        <option value="">Select an airport code</option>
        {airportCodes.map(code => (
          <option key={code} value={code}>{code}</option>
        ))}
      </select>
      <button onClick={fetchGates}>Search</button>
      <table>
        <thead>
          <tr>
            <th>Gate Number</th>
          </tr>
        </thead>
        <tbody>
          {gates.map((gate) => (
            <tr key={gate.gateId}>
              <td>{gate.gateNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GatesByAirportCode;