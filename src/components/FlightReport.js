import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FlightReport() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Fetch flight data from the backend
    axios.get('http://localhost:8080/flights')
      .then(response => setFlights(response.data))
      .catch(error => console.error('Error fetching flight data:', error));
  }, []);

  return (
    <div>
      <h1>Flight Report</h1>
      <table>
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Departure Airport</th>
            <th>Arrival Airport</th>
            <th>Airline</th>
            <th>Aircraft Model</th>
            <th>Gate</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.flightId}>
              <td>{flight.flightNumber}</td>
              <td>{new Date(flight.departureTime).toLocaleString()}</td>
              <td>{new Date(flight.arrivalTime).toLocaleString()}</td>
              <td>{flight.departureAirport ? flight.departureAirport.airportName : 'N/A'}</td>
              <td>{flight.arrivalAirport ? flight.arrivalAirport.airportName : 'N/A'}</td>
              <td>{flight.airline ? flight.airline.airlineName : 'N/A'}</td>
              <td>{flight.aircraft ? flight.aircraft.aircraftModel : 'N/A'}</td>
              <td>{flight.gate ? flight.gate.gateNumber : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightReport;
