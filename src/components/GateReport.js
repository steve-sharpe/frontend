import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GateReport() {
  const [gates, setGates] = useState([]);

  useEffect(() => {
    // Fetch gate data from the backend
    axios.get('http://localhost:8080/gates')
      .then(response => setGates(response.data))
      .catch(error => console.error('Error fetching gates data:', error));
  }, []);

  return (
    <div>
      <h1>Gate Report</h1>
      <table>
        <thead>
          <tr>
            <th>Gate Number</th>
            <th>Airport Name</th>
            <th>Airport Code</th>
          </tr>
        </thead>
        <tbody>
          {gates.map((gate) => (
            <tr key={gate.Id}>
              <td>{gate.gateNumber}</td>
              <td>{gate.airport ? gate.airport.airportName : 'N/A'}</td>
              <td>{gate.airport ? gate.airport.airportCode : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GateReport;
