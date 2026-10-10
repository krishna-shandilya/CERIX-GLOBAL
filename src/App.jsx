import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Expertise from '@/pages/Expertise';
import ExpertiseDetail from '@/pages/ExpertiseDetail';
import GlobalReach from '@/pages/GlobalReach';
import ApproachPage from '@/pages/ApproachPage';
import Insights from '@/pages/Insights';
import InsightDetail from '@/pages/InsightDetail';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Legal from '@/pages/Legal';
import Preloader from '@/components/Preloader';
import React, { useState } from 'react';

// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();
  const [showPreloader, setShowPreloader] = useState(true);

  // Show loading spinner or preloader while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="min-h-screen bg-[#142B20] flex items-center justify-center">
        <Preloader onComplete={() => setShowPreloader(false)} />
      </div>
    );
  }

  return (
    <>
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/expertise/:id" element={<ExpertiseDetail />} />
          <Route path="/global-reach" element={<GlobalReach />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:id" element={<InsightDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
          <Toaster />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}
