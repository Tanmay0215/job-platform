import axios from 'axios';
import React, { useState } from 'react'

const AddOpportunity:React.FC = () => {
    const [companyName, setCompanyName] = useState('');
    const [role, setRole] = useState('');
    const [eligibility, setEligibility] = useState('');
    const [location, setLocation] = useState('');
    const [applicationLink, setApplicationLink] = useState('');
    const BACKEND_URL = 'http://localhost:5000';

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = {
            companyName,
            role,
            eligibility,
            location,
            applicationLink
        };
        try {
            const response = await axios.post(`${BACKEND_URL}/api/add-opportunity`, data);
            console.log(response.data);
            // Optionally, reset the form after successful submission
            setCompanyName('');
            setRole('');
            setEligibility('');
            setLocation('');
            setApplicationLink('');
        } catch (error) {
            console.error("Error submitting form:", error);
            // Optionally, display an error message to the user
        }
    };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Opportunity</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input
            type="text"
            className='outline-none border-b-2 p-2'
            placeholder='Company Name'
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
            type="text"
            className='outline-none border-b-2 p-2'
            placeholder='Role'
            value={role}
            onChange={(e) => setRole(e.target.value)}
        />
        <input
            type="text"
            className='outline-none border-b-2 p-2'
            placeholder='Eligibility'
            value={eligibility}
            onChange={(e) => setEligibility(e.target.value)}
        />
        <input
            type="text"
            className='outline-none border-b-2 p-2'
            placeholder='Location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
        />
        <input
            type="text"
            className='outline-none border-b-2 p-2'
            placeholder='Application Link'
            value={applicationLink}
            onChange={(e) => setApplicationLink(e.target.value)}
        />

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
        </button>
      </form>
    </div>
  )
}

export default AddOpportunity
