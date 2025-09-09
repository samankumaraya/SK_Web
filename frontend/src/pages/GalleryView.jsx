import React, { useEffect, useState } from "react";
import axios from "axios";

const GalleryView = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="relative min-h-screen">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/bav.mp4" type="video/mp4" />
       
        Your browser does not support the video tag.
      </video>

      
      <div className="relative max-w-6xl mx-auto p-6 bg-white bg-opacity-80 rounded-lg shadow-lg mt-10">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img) => (
            <img
              key={img._id}
              src={`http://localhost:5000/uploads/images/Gallery/${img.filename}`}
              alt={img.originalName}
              className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
              loading="lazy"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`http://localhost:5000/uploads/images/Gallery/${selectedImage.filename}`}
              alt={selectedImage.originalName}
              className="max-w-full max-h-[90vh] rounded-md"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-300 focus:outline-none"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryView;
