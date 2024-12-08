import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/reports/aircraft">Aircraft</Link></li>
        <li><Link to="/reports/passengers">Passengers</Link></li>
        <li><Link to="/reports/airports">Airports</Link></li>
        <li><Link to="/reports/flights">Flights</Link></li>
        <li><Link to="/reports/gates">Gates</Link></li>
        <li><Link to="/reports/airlines">Airlines</Link></li>
        <li><Link to="/reports/gates-by-airport">Gates by Airport Code</Link></li>
        <li><Link to="/reports/flights-by-airport">Flights by Airport Code</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;