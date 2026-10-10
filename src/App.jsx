import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import Expertise from '@/pages/Expertise';
import Contact from '@/pages/Contact';
// ... import your other pages and components

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/contact" element={<Contact />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}
