import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Array of image URLs for the slideshow
const imageUrls = [
  "https://mygleba.com/images/products/zmm2kf-coco01.png",
  "https://mygleba.com/images/products/zya9va-64.png",
  "https://mygleba.com/images/products/tyhjln-3.png",
  "https://mygleba.com/images/products/ckxsqk-3.png",
  "https://mygleba.com/images/products/2buymm-2.png",
];

const Banner = () => {
  const location = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (location.pathname === "/") {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }
  }, [location.pathname]);

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        backgroundImage: `url(${imageUrls[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        fontWeight: "bold",
        fontSize: "24px",
        marginTop: "60px", // Adjust according to navbar height
        transition: "background-image 1s ease-in-out", // Smooth transition between images
      }}
    >
      {/* Optional: Add overlay text or other content here */}
    </div>
  );
};

export default Banner;
