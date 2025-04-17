import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Opportunities from './pages/Opportunities'
import Hackathons from './pages/Hackathons'
import Internships from './pages/Internships'
import Jobs from './pages/Jobs'

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Opportunities />} />
        <Route path="/interns" element={<Internships />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </div>
  )
}

export default App
