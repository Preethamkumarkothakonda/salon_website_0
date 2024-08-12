import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-item">
        <h3>Haircut</h3>
        <p>Professional haircut services for men and women.</p>
        <span>Duration: 30 mins</span>
        <br />
        <span>Price: $50</span>
      </div>
      <div className="service-item">
        <h3>Hair Coloring</h3>
        <p>High-quality coloring services with a range of shades.</p>
        <span>Duration: 1 hour</span>
        <br />
        <span>Price: $100</span>
      </div>
      {/* Add more services similarly */}
    </section>
  );
};

export default Services;
