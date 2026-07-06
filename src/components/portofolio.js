import React, { useState, useEffect } from "react";
import "../App.css";

const Portfolio = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Fetch image categories from the JSON file
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/images.json`)
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  // Open the lightbox with the clicked image
  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  // Close the lightbox
  const closeLightbox = () => {
    setLightboxImage(null);
  };

  // Get all images if no category is selected, or get images from selected category
  const imagesToDisplay = selectedCategory ? selectedCategory.images : categories.flatMap(category => category.images);

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>

      {/* Category Filter */}
      <div className="portfolio-filter">
        {categories.map((category) => (
          <button
            key={category.category}
            onClick={() => setSelectedCategory(category)}
          >
            {category.category}
          </button>
        ))}
        <button onClick={() => setSelectedCategory(null)}>Show All</button> {/* Show All Button */}
      </div>

      {/* Display images based on selected category or all images */}
      <div className="portfolio-gallery">
        {imagesToDisplay.map((image, index) => (
          <div
            key={index}
            className="portfolio-item"
            onClick={() => openLightbox(`${process.env.PUBLIC_URL}${image.src}`)}
          >
            <img
              src={`${process.env.PUBLIC_URL}${image.src}`}
              alt={image.alt}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox active" onClick={closeLightbox}>
          <img src={lightboxImage} alt="Full size" />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
