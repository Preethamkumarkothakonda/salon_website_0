import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#stylists">Stylists</a>
      <a href="#gallery">Gallery</a>
      <a href="#reviews">Reviews</a>
      <a href="#book">Book</a>
      <a href="#membership">Membership</a>
      <a href="#blog">Blog</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
