import React, { useState } from 'react';
import bgImg from "../assets/bgimg.png";
import { useNavigate } from 'react-router-dom';
import { MultiStepLoader as Loader } from "../components/ui/multi-step-loader";
import { submitUserInput } from '../api/userinputAPI';


const loadingStates = [
    {
      text: "Getting Your Horoscopes",
    },
    {
      text: "Parsing the Information",
    },
    {
      text: "Analyzing the Data",
    },
    {
      text: "Generating the Predictions",
    },
    {
      text: "Sending the Report",
    },
  ];

function UserInputForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    time: '',
    location: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await submitUserInput(formData);
      console.log('Form submitted successfully:', response);
      navigate('/result', { state: { analyzedData } });
    } catch (error) {
      console.error('Error submitting the form:', error);
      navigate('/result');
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className='relative flex items-center justify-center w-full h-full'>
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.13]" 
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'invert(1)',
        }}
      />
    <Loader loadingStates={loadingStates} loading={loading} duration={1300} />
      <div className="relative z-10 bg-gradient-to-br from-[#1e293b] to-[#111827] text-white p-8 rounded-lg shadow-lg max-w-md w-full h-full mt-8">
        <h2 className="text-2xl font-bold text-center mb-6 underline decoration-orange-500">Kundli Input Form</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
              placeholder="Enter your name" 
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium mb-1">Gender</label>
            <select 
              id="gender" 
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="dob" className="block text-sm font-medium mb-1">Date of Birth</label>
            <input 
              type="date" 
              id="dob" 
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium mb-1">Time of Birth</label>
            <input 
              type="time" 
              id="time" 
              value={formData.time}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium mb-1">Place of Birth</label>
            <input 
              type="text" 
              id="location" 
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
              placeholder="Enter your place of birth" 
            />
          </div>

          <div className="text-center">
            <button 
              type="submit" 
              className="px-6 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserInputForm;
