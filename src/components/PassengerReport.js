import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PassengerReport() {
  const [passengers, setPassengers] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
  axios.get(`${API_BASE_URL}/passengers`)
      .then(response => setPassengers(response.data))
      .catch(error => console.error('Error fetching passenger data:', error));
  }, []);

  return (
    <div>
      <h1>Passenger Report</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {passengers.map((passenger, index) => (
            <tr key={index}>
              <td>{passenger.passengerName}</td>
              <td>{passenger.passengerEmail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PassengerReport;
