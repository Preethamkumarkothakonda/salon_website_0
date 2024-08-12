import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <h2>Welcome to LuxeLock Salon</h2>
      <p className="sk">
        Step into a realm where luxury meets expertise. We are not just a salon;
        we are a sanctuary of style and self-care. Our team of skilled stylists,
        curated for their creativity and precision, ensure that each visit
        leaves you feeling absolutely fabulous.
      </p>
      <div className="row">
        <div className="column">
          <img
            src="https://www.wearegurgaon.com/wp-content/uploads/2022/04/geetanjali-salon-faridabad.jpg"
            alt="salon"
            className="jk"
          />
        </div>
        <div className="column">
          <img
            src="https://www.majormag.in/wp-content/uploads/2023/03/top-hair-salon-dubai.jpg"
            alt="salon"
            className="jk"
          />
        </div>
        <div className="column">
          <img
            src="https://img.freepik.com/free-photo/modern-beauty-salon-interior_23-2148910541.jpg"
            alt="salon"
            className="jk"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
