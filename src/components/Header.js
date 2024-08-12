import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>LuxeLock Salon</h1>
      <p className="tagline">
        "Glamour Unleashed: Your Beauty Haven at{" "}
        <span className="fk">Elysian Allure Salon & Spa</span> - Where Style
        Meets Stardom!"
      </p>
    </header>
  );
};

export default Header;
