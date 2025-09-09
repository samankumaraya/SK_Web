import React, { useState } from "react";
import axios from "axios";

const GalleryUpload = () => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/api/gallery/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Image uploaded successfully!");
    } catch (err) {
      setMessage("Upload failed!");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
   
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/bav.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

     
      <div className="relative z-20 max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Upload Image For Gallery
        </h2>
        <form onSubmit={handleUpload} className="flex flex-col gap-4 items-center">
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-md file:border-0
                       file:text-sm file:font-semibold
                       file:bg-indigo-50 file:text-indigo-700
                       hover:file:bg-indigo-100
                       cursor-pointer"
          />
          <button
            type="submit"
            disabled={!image}
            className={`mt-4 py-2 px-8 rounded-md text-white font-semibold transition
                        ${image ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
          >
            Upload
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default GalleryUpload;
