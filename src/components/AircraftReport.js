import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AircraftReport() {
  const [aircraft, setAircraft] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/aircrafts')
      .then(response => setAircraft(response.data))
      .catch(error => console.error('Error fetching aircraft data:', error));
  }, []);

  return (
    <div>
      <h1>Aircraft Report</h1>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Capacity</th>
          </tr>
        </thead>
        <tbody>
          {aircraft.map((plane, index) => (
            <tr key={index}>
              <td>{plane.aircraftModel}</td>
              <td>{plane.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AircraftReport;
