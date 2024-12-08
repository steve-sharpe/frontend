import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FlightsByAirport() {
  const [airportCode, setAirportCode] = useState('');
  const [flights, setFlights] = useState([]);
  const [airportCodes, setAirportCodes] = useState([]);

  useEffect(() => {
    // Fetch the list of airport codes when the component mounts
    axios.get('http://localhost:8080/airports/codes')
      .then(response => setAirportCodes(response.data))
      .catch(error => console.error('Error fetching airport codes:', error));
  }, []);

  const fetchFlights = () => {
    axios.get(`http://localhost:8080/airports/code/${airportCode}/flights`)
      .then(response => setFlights(response.data))
      .catch(error => console.error('Error fetching flights:', error));
  };

  return (
    <div>
      <h1>Find Flights by Airport Code</h1>
      <select value={airportCode} onChange={(e) => setAirportCode(e.target.value)}>
        <option value="">Select an airport code</option>
        {airportCodes.map(code => (
          <option key={code} value={code}>{code}</option>
        ))}
      </select>
      <button onClick={fetchFlights}>Search</button>
      <table>
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Destination</th>
            <th>Departure Time</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.flightId}>
              <td>{flight.flightNumber}</td>
              <td>{flight.destination}</td>
              <td>{flight.departureTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightsByAirport;