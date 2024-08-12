import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <h2>Blog and Articles</h2>
      <div className="blog-post">
        <h3>Top 10 Hair Care Tips</h3>
        <p>Learn the best tips to keep your hair healthy and shiny.</p>
      </div>
      <div className="blog-post">
        <h3>Summer Hairstyles</h3>
        <p>Check out the hottest hairstyles for this summer.</p>
      </div>
      {/* Add more blog posts similarly */}
    </section>
  );
};

export default Blog;
