import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form>
        <label htmlFor="contact-name">Name:</label>
        <input type="text" id="contact-name" name="contact-name" required />
        <label htmlFor="contact-email">Email:</label>
        <input type="email" id="contact-email" name="contact-email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
