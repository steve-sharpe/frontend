import React from 'react';

function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Wing It Airways</h1>
        <p className="tagline">Because who needs a plan when you have wings?</p>
      </header>
      <main className="homepage-main">
        <section className="welcome-section">
          <h2>Welcome to Wing It Airways</h2>
          <p>
            Where your imagination takes flight (literally)! Explore our
            reports, data lists, and more. <br/> Remember, it's all for a school
            project, so don’t actually try to book a flight.
          </p>
        </section>
        <section className="links-section">
          <h2>Explore the Data</h2>
          <ul>
            <li><a href="/reports/aircraft">Aircraft Reports</a></li>
            <li><a href="/reports/passengers">Passenger Reports</a></li>
            <li><a href="/reports/airports">Airport Reports</a></li>
            <li><a href="/reports/flights">Flight Reports</a></li>
            <li><a href="/reports/gates">Gate Reports</a></li>
            <li><a href="/reports/airlines">Airline Reports</a></li>
          </ul>
        </section>
        <section className="cta-section">
          <button className="cta-button">Book Your Next Flight (Just Kidding)</button>
        </section>
      </main>
      <footer className="homepage-footer">
        <p>No actual flights provided. This is a school project. Don't sue us.</p>
      </footer>
    </div>
  );
}

export default HomePage;
