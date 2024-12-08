import React, { useState, useEffect } from 'react';
import axios from 'axios';

function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);
  
  // Format date to layman's terms
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  // Format time to 12-hour format with AM/PM
  const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

  return `${formattedDate}, at ${formattedTime}`;
}

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
            <td>{formatDateTime(flight.departureTime)}</td>
            <td>{formatDateTime(flight.arrivalTime)}</td>
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
