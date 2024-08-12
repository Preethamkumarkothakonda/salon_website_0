import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>Photo Gallery</h2>
      <div className="image-grid">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS786ZN0NcCXsHKBb3QtMds-c9pQbx926BTrw&s"
          alt="Before and after"
        />
        <img
          src="https://i.pinimg.com/564x/90/54/aa/9054aa216bd78c98c6b548a376e26674.jpg"
          alt="Stylish haircut"
        />
        <img
          src="https://5.imimg.com/data5/CD/YA/IB/ANDROID-78541208/product-jpeg.jpg"
          alt="Hair coloring"
        />
        {/* Add more images similarly */}
      </div>
    </section>
  );
};

export default Gallery;
