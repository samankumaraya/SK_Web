import React from "react";

const Contact = () => {
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
                <span className="text-teal-500 mr-2">📍</span> Address (Permanent)
              </h3>
              <p className="text-gray-600">Dimbulana, Welimada</p>
            </div>

             <div className="mb-6">
              <h3 className="flex items-center text-lg font-semibold text-gray-700">
                <span className="text-teal-500 mr-2">📍</span> Address (Current)
              </h3>
              <p className="text-gray-600">Makola, Kiribathgoda</p>
            </div>

            <div className="mb-6">
              <h3 className="flex items-center text-lg font-semibold text-gray-700">
                <span className="text-teal-500 mr-2">📞</span> Call Us
              </h3>
              <p className="text-gray-600">+94 76 6199 583</p>
            </div>

            <div className="mb-6">
              <h3 className="flex items-center text-lg font-semibold text-gray-700">
                <span className="text-teal-500 mr-2">✉️</span> Email Us
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
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <textarea
                placeholder="Message"
                rows="6"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
