import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Stylists from "./components/Stylists";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Book from "./components/Book";
import Membership from "./components/Membership";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Add smooth scrolling to all links
    const smoothScroll = (e) => {
      e.preventDefault();
      document.querySelector(e.target.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    };

    document.querySelectorAll(".navbar a").forEach((anchor) => {
      anchor.addEventListener("click", smoothScroll);
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate");
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight) {
          element.classList.add("fade-in");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Trigger on page load

    return () => {
      document.querySelectorAll(".navbar a").forEach((anchor) => {
        anchor.removeEventListener("click", smoothScroll);
      });
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <Services />
      <Stylists />
      <Gallery />
      <Reviews />
      <Book />
      <Membership />
      <Blog />
      <Contact />
      <footer>
        <p>&copy; 2024 LuxeLock Salon. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
