import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AircraftReport from './components/AircraftReport';
import PassengerReport from './components/PassengerReport';
import AirportReport from './components/AirportReport';
import FlightReport from './components/FlightReport';
import GateReport from './components/GateReport';
import AirlineReport from './components/AirlineReport';
import FlightsByAirport from './components/FlightsByAirport';

import GatesByAirportCode from './components/GatesByAirportCode';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Welcome to the Airline Reporting System</h1>} />
          <Route path="/reports/aircraft" element={<AircraftReport />} />
          <Route path="/reports/passengers" element={<PassengerReport />} />
          <Route path="/reports/airports" element={<AirportReport />} />
          <Route path="/reports/flights" element={<FlightReport />} />
          <Route path="/reports/gates" element={<GateReport />} />
          <Route path="/reports/airlines" element={<AirlineReport />} />
          <Route path="/reports/gates" element={<GateReport />} />
          <Route path="/reports/flights-by-airport" element={<FlightsByAirport />} />
          <Route path="/reports/gates-by-airport" element={<GatesByAirportCode />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
