import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AirportReport() {
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    // Fetch airport data from the backend
    axios.get('http://localhost:8080/airports')
      .then(response => setAirports(response.data))
      .catch(error => console.error('Error fetching airport data:', error));
  }, []);

  return (
    <div>
      <h1>Airport Report</h1>
      <table>
        <thead>
          <tr>
            <th>Airport Name</th>
            <th>City Name</th>
            <th>Airport Code</th>
            <th>Number of Gates</th>
          </tr>
        </thead>
        <tbody>
          {airports.map((airport) => (
            <tr key={airport.airportId}>
              <td>{airport.airportName}</td>
              <td>{airport.cityName}</td>
              <td>{airport.airportCode}</td>
              <td>{airport.numberOfGates}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AirportReport;
