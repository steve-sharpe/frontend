import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AirlineReport() {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    // Fetch airline data from the backend
    axios.get('http://localhost:8080/airlines')
      .then(response => setAirlines(response.data))
      .catch(error => console.error('Error fetching airline data:', error));
  }, []);

  return (
    <div>
      <h1>Airline Report</h1>
      <table>
        <thead>
          <tr>
            <th>Airline Name</th>
            <th>Airline Code</th>
            <th>Number of Flights</th>
          </tr>
        </thead>
        <tbody>
          {airlines.map((airline) => (
            <tr key={airline.airlineId}>
              <td>{airline.airlineName}</td>
              <td>{airline.airlineCode}</td>
              <td>{airline.flights ? airline.flights.length : 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AirlineReport;
