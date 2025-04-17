import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Hackathon } from '../types/type';

const Internships = () => {
  const [data, setData] = useState<Hackathon>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
        const response = await axios.get(`${BACKEND_URL}/api/hackathons`);
        setData(response.data);
      } catch (error: any) {
        console.error('Error fetching data:', error);
        alert(error.message)
      }
    };
    fetchData();
  }
    , []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data && data.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200">
                <p className="text-lg font-bold text-gray-900 mb-1">{item.companyName}</p>
                <h2 className="text-md font-semibold text-blue-600">Eligibility: {item.eligibility}</h2>
                <h2 className="text-md font-semibold text-green-600">Location: {item.location}</h2>
                <p className="text-gray-700">{item.role}</p>
                <a href={item.applicationLink}>Apply Here</a>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Internships
