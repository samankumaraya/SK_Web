import React, { useState } from 'react';
import axios from 'axios';

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
    } catch (err) {
      alert('Error saving education data');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
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
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Grade</label>
                <input
                  name="grade"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="e.g. 3.8 GPA"
                  onChange={handleChange}
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
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-gray-700 font-medium mb-1">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    onChange={handleChange}
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
    </div>
  );
};

export default EducationForm;
