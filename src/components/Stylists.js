import React from "react";
import "./Stylists.css";

const Stylists = () => {
  return (
    <section id="stylists" className="stylists">
      <h2>Meet Our Stylists</h2>
      <div className="stylist">
        <h3>Jane Doe</h3>
        <p>
          Specializes in hair coloring and styling with 10 years of experience.
        </p>
      </div>
      <div className="stylist">
        <h3>John Smith</h3>
        <p>
          Expert in modern cuts and beard grooming with 8 years of experience.
        </p>
      </div>
      {/* Add more stylist profiles similarly */}
    </section>
  );
};

export default Stylists;
