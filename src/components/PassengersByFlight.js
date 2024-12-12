import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PassengersByFlight() {
  const [flightNumber, setFlightNumber] = useState('');
  const [passengers, setPassengers] = useState([]);
  const [flightNumbers, setFlightNumbers] = useState([]);

  useEffect(() => {
    // Fetch the list of flight numbers when the component mounts
    axios.get('http://localhost:8080/flights')
        .then(response => setFlightNumbers(response.data.map(flight => flight.flightNumber)))
        .catch(error => console.error('Error fetching flight numbers:', error));
    }, []);

    const fetchPassengers = () => {
        axios.get(`http://localhost:8080/flights/flightNumber/${flightNumber}/passengers`)
          .then(response => setPassengers(response.data))
          .catch(error => console.error('Error fetching passengers:', error));
      };

  return (
    <div>
      <h1>Find Passengers by Flight Number</h1>
      <select value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)}>
        <option value="">Select a flight number</option>
        {flightNumbers.map(number => (
          <option key={number} value={number}>{number}</option>
        ))}
      </select>
      <button onClick={fetchPassengers}>Search</button>
      <table>
        <thead>
          <tr>
            <th>Passenger Name</th>
            <th>Passenger Email</th>
            
          </tr>
        </thead>
        <tbody>
          {passengers.map((passenger) => (
            <tr key={passenger.passengerId}>
              <td>{passenger.passengerName}</td>
              <td>{passenger.passengerEmail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PassengersByFlight;