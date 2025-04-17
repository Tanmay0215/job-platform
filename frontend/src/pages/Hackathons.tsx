import { useEffect, useState } from 'react'
import axios from 'axios';
import { Hackathon } from '../types/type';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Internships = () => {
  const navigate = useNavigate()
  const [data, setData] = useState<Hackathon>();
  const [loading, setLoading] = useState(true);
  
  const fetchData = async () => {
    setLoading(true);
    try {
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.get(`${BACKEND_URL}/api/hackathons`);
      setData(response.data);
    } catch (error: any) {
      console.error('Error fetching data:', error);
      alert(error.message)
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }
    , []);

  if (loading) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <h1 className='text-4xl'>Loading...</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
       <h1 className='text-center text-3xl md:text-4xl font-medium p-5'>HACKATHONS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data && data.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200">
              <p className="text-lg font-bold text-gray-900 mb-1">{item.companyName}</p>
              <h2 className="text-md font-semibold text-blue-600">Eligibility: {item.eligibility}</h2>
              <h2 className="text-md font-semibold text-green-600">Location: {item.location}</h2>
              <p className="text-gray-700">{item.role}</p>
              <button
               onClick={() => navigate(item.applicationLink)}
               className='flex items-center text-blue-500 hover:text-blue-700 font-semibold mt-2'>
                Apply Here
                <ArrowUpRight />
                </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Internships
