import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      if (res.data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      setStatus("❌ Failed to send message. Try again later.");
    }
  };

  return (
    <section className="py-12 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-4">
       
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-gray-800 mt-5">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 gap-8">
         
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="mb-6">
              <h3 className="flex items-center text-lg font-semibold text-gray-700">
                <span className="text-blue-600 mr-2">📍</span> Address (Permanent)
              </h3>
              <p className="text-gray-600">Dimbulana, Welimada</p>
            </div>

            <div className="mb-6">
              <h3 className="flex items-center text-lg font-semibold text-gray-700">
                <span className="text-blue-600 mr-2">📍</span> Address (Current)
              </h3>
              <p className="text-gray-600">Makola, Kiribathgoda</p>
            </div>

            <div className="mb-6">
              <h3 className="flex items-center text-lg font-semibold text-gray-700">
                <span className="text-blue-600 mr-2">📞</span> Call Me
              </h3>
              <p className="text-gray-600">+94 76 6199 583</p>
            </div>

            <div className="mb-6">
              <h3 className="flex items-center text-lg font-semibold text-gray-700">
                <span className="text-blue-600 mr-2">✉️</span> Email Me
              </h3>
              <p className="text-gray-600">samankumaraya1@gmail.com</p>
            </div>

            
            <div className="w-full h-64">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7920.529770883953!2d79.92190864033546!3d6.97804062209092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257fb99855535%3A0xcf2afe16fdea46bc!2sKiribathgoda!5e0!3m2!1sen!2slk!4v1756143239249!5m2!1sen!2slk"
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>

       
          <div className="bg-white p-6 rounded-2xl shadow">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition w-full"
              >
                Send Message
              </button>
            </form>
             <a
  href="https://wa.me/94766199583?text=Hello%20Saman,%20I’m%20interested%20in%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center mt-4 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition w-full"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-2"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.84 11.84 0 0 0 12.05 0C5.39 0 .02 5.37.02 12.02c0 2.12.55 4.19 1.61 6.01L0 24l6.18-1.61a11.96 11.96 0 0 0 5.86 1.5h.01c6.66 0 12.03-5.37 12.03-12.02 0-3.21-1.25-6.23-3.56-8.39zM12.05 22c-1.88 0-3.72-.5-5.33-1.45l-.38-.22-3.67.96.98-3.58-.25-.37A9.96 9.96 0 0 1 2.05 12c0-5.52 4.48-10 10-10a9.93 9.93 0 0 1 9.95 9.95c0 5.52-4.48 10.05-9.95 10.05zm5.44-7.61c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15s-.77.98-.95 1.18c-.17.2-.35.22-.65.07s-1.27-.47-2.42-1.5c-.9-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.38-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.15 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.58-.09 1.78-.73 2.03-1.44.25-.7.25-1.3.18-1.44-.07-.14-.27-.22-.57-.37z" />
  </svg>
  Contact on WhatsApp
</a>
           
            {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
