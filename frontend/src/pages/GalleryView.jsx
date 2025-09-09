import React, { useEffect, useState } from "react";
import axios from "axios";

const GalleryView = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/gallery");
        setImages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchImages();
  }, []);

  return (
    <div>
      <h2>Gallery</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {images.map((img) => (
          <img
            key={img._id}
            src={`http://localhost:5000/uploads/images/Gallery/${img.filename}`}
            alt={img.originalName}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryView;
