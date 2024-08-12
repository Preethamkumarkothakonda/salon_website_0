import React from "react";
import "./Book.css";

const Book = () => {
  return (
    <section id="book" className="book">
      <h2>Book an Appointment</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="service">Service:</label>
        <select id="service" name="service" required>
          <option value="haircut">Haircut</option>
          <option value="coloring">Hair Coloring</option>
          <option value="Facials">Facials</option>
          <option value="Tanning">Tanning</option>
          {/* Add more services */}
        </select>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" required />
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" required />
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default Book;
