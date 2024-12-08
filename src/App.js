import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AircraftReport from './components/AircraftReport';
import PassengerReport from './components/PassengerReport';
import AirportReport from './components/AirportReport';
import FlightReport from './components/FlightReport';
import GateReport from './components/GateReport';
import AirlineReport from './components/AirlineReport';
import FlightsByAirport from './components/FlightsByAirport';
import GatesByAirportCode from './components/GatesByAirportCode';

function Navbar() {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>
          <button
            className="submenu-toggle"
            onClick={() => setSubmenuOpen(!submenuOpen)}
          >
            Data Lists
          </button>
          {submenuOpen && (
            <ul className="submenu">
              <li><Link to="/reports/aircraft">Aircraft</Link></li>
              <li><Link to="/reports/passengers">Passengers</Link></li>
              <li><Link to="/reports/airports">Airports</Link></li>
              <li><Link to="/reports/flights">Flights</Link></li>
              <li><Link to="/reports/gates">Gates</Link></li>
              <li><Link to="/reports/airlines">Airlines</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/reports/gates-by-airport">Gates by Airport Code</Link></li>
        <li><Link to="/reports/flights-by-airport">Flights by Airport Code</Link></li>
      </ul>
    </nav>
  );
}

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
          <Route path="/reports/flights-by-airport" element={<FlightsByAirport />} />
          <Route path="/reports/gates-by-airport" element={<GatesByAirportCode />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
