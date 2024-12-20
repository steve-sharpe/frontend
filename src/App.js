import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'; // Import the HomePage
import AircraftReport from './components/AircraftReport';
import PassengerReport from './components/PassengerReport';
import AirportReport from './components/AirportReport';
import FlightReport from './components/FlightReport';
import GateReport from './components/GateReport';
import AirlineReport from './components/AirlineReport';
import FlightsByAirport from './components/FlightsByAirport';
import GatesByAirportCode from './components/GatesByAirportCode';
import PassengersByFlight from './components/PassengersByFlight'; // Import the GetPassengersByFlightNumber component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reports/aircraft" element={<AircraftReport />} />
          <Route path="/reports/passengers" element={<PassengerReport />} />
          <Route path="/reports/airports" element={<AirportReport />} />
          <Route path="/reports/flights" element={<FlightReport />} />
          <Route path="/reports/gates" element={<GateReport />} />
          <Route path="/reports/airlines" element={<AirlineReport />} />
          <Route path="/reports/flights-by-airport" element={<FlightsByAirport />} />
          <Route path="/reports/gates-by-airport" element={<GatesByAirportCode />} />
          <Route path="/reports/passengers-by-flight" element={<PassengersByFlight />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
