import React from "react";
import "./Membership.css";

const Membership = () => {
  return (
    <section id="membership" className="membership">
      <h2>Membership and Loyalty Programs</h2>
      <p>
        Join our membership program to enjoy exclusive benefits and discounts.
      </p>
      <div className="membership-tier">
        <h3>Silver</h3>
        <p>10% off on all services</p>
      </div>
      <div className="membership-tier">
        <h3>Gold</h3>
        <p>20% off on all services</p>
      </div>
      <div className="membership-tier">
        <h3>Platinum</h3>
        <p>30% off on all services</p>
      </div>
    </section>
  );
};

export default Membership;
