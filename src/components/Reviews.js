import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <h2>Customer Reviews</h2>
      <div className="review">
        <h3>Mary Johnson</h3>
        <p>"Amazing service! My hair has never looked better."</p>
      </div>
      <div className="review">
        <h3>Paul Brown</h3>
        <p>"Great atmosphere and professional stylists."</p>
      </div>
      {/* Add more reviews similarly */}
    </section>
  );
};

export default Reviews;
