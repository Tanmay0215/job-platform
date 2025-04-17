import React from 'react'
import { useNavigate } from 'react-router-dom'

const Opportunities = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">Explore Opportunities</h1>
        <p className="mt-4 text-gray-500">
          Find the perfect opportunity to grow your career. Browse through hackathons, jobs, and internships.
        </p>
        <div className="mt-6 flex space-x-4">
          <button
            onClick={() => navigate('/hackathons')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Hackathons
          </button>
          <button
            onClick={() => navigate('/jobs')}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Jobs
          </button>
          <button
            onClick={() => navigate('/interns')}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Internships
          </button>
        </div>
      </div>
    </div>
  )
}

export default Opportunities
