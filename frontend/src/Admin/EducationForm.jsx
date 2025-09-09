import React, { useState } from 'react';
import axios from 'axios';
import AdminHeader from './compon/AdminHeader';
import Footer from '../components/Footer';

const EducationForm = () => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    grade: '',
    activities: '',
    description: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/education', formData);
      alert('Education saved successfully!');
      setFormData({
        school: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        grade: '',
        activities: '',
        description: ''
      });
    } catch (err) {
      alert('Error saving education data');
    }
  };

  return (
    <div><AdminHeader/>
    <section className="relative w-full min-h-screen flex items-center justify-center">
     
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/bav.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

      
      <div className="relative z-10 max-w-4xl w-full bg-white shadow-lg rounded-xl p-8 overflow-y-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Add Education</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">School</label>
                <input
                  name="school"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="e.g. University of Colombo"
                  onChange={handleChange}
                  required
                  value={formData.school}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Degree</label>
                <input
                  name="degree"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="e.g. Bachelor of Science"
                  onChange={handleChange}
                  required
                  value={formData.degree}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Field of Study</label>
                <input
                  name="fieldOfStudy"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="e.g. Computer Science"
                  onChange={handleChange}
                  required
                  value={formData.fieldOfStudy}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Grade</label>
                <input
                  name="grade"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="e.g. 3.8 GPA"
                  onChange={handleChange}
                  value={formData.grade}
                />
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-gray-700 font-medium mb-1">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    onChange={handleChange}
                    required
                    value={formData.startDate}
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-gray-700 font-medium mb-1">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    onChange={handleChange}
                    value={formData.endDate}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Activities and Societies</label>
                <input
                  name="activities"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="e.g. Debate Club, ACM Student Chapter"
                  onChange={handleChange}
                  value={formData.activities}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  rows="4"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Brief summary about your education..."
                  onChange={handleChange}
                  value={formData.description}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-all duration-200 shadow-sm"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </section><Footer/></div>
  );
};

export default EducationForm;
