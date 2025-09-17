import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./compon/AdminHeader";
import Footer from "../components/Footer";
import { FaTrash } from "react-icons/fa";

const AdminGalleryView = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch images from backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5000/api/gallery");
        setImages(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching images:", err);
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const closeModal = () => setSelectedImage(null);
  const closeDeleteConfirm = () => setDeleteConfirm(null);

  const handleDelete = async (id) => {
  console.log("Deleting image with id:", id);
  try {
    const res = await axios.delete(`http://localhost:5000/api/gallery/${id}`);
    console.log("Delete response:", res.data);
    setImages((prevImages) => prevImages.filter((img) => img._id !== id));
    closeDeleteConfirm();
  } catch (err) {
    console.error("Delete error:", err);
  }
};

  return (
    <div>
      <AdminHeader />

      <div className="relative min-h-screen">
        {/* Background Video */}
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

        {/* Main Content */}
        <div className="relative max-w-6xl mx-auto p-6 bg-white bg-opacity-80 rounded-lg shadow-lg mt-10">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
            Gallery
          </h2>

          {loading ? (
            <p className="text-center text-gray-600">Loading images...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((img) => (
                <div key={img._id} className="relative group">
                  {/* Image */}
                  <img
                    src={`http://localhost:5000/uploads/images/Gallery/${img.filename}`}
                    alt={img.originalName}
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                    loading="lazy"
                    onClick={() => setSelectedImage(img)}
                  />

                  {/* Delete Button */}
                  <button
                    onClick={() => setDeleteConfirm(img)}
                    className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
                    title="Delete Image"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Image Modal */}
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

        {/* Delete Confirmation Modal */}
        {deleteConfirm && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeDeleteConfirm}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold mb-4">Confirm Delete</h3>
              <p className="mb-6">Are you sure you want to delete this image?</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleDelete(deleteConfirm._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Delete
                </button>
                <button
                  onClick={closeDeleteConfirm}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AdminGalleryView;
