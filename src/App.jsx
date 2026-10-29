import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import Layout from '@/components/Layout';

// Lazy-loaded page components for bundle optimization & reduced TBT
const Home = lazy(() => import('@/pages/Home'));
const Expertise = lazy(() => import('@/pages/Expertise'));
const ExpertiseDetail = lazy(() => import('@/pages/ExpertiseDetail'));
const GlobalReach = lazy(() => import('@/pages/GlobalReach'));
const ApproachPage = lazy(() => import('@/pages/ApproachPage'));
const Insights = lazy(() => import('@/pages/Insights'));
const InsightDetail = lazy(() => import('@/pages/InsightDetail'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Legal = lazy(() => import('@/pages/Legal'));

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Preloader />
        <ScrollToTop />
        <Suspense fallback={
          <div className="fixed inset-0 flex items-center justify-center bg-[#07130E]">
            <div className="w-8 h-8 border-4 border-[#C5A059]/20 border-t-[#C5A059] rounded-full animate-spin"></div>
          </div>
        }>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              
              {/* Support both /services and /expertise */}
              <Route path="/services" element={<Expertise />} />
              <Route path="/services/:slug" element={<ExpertiseDetail />} />
              <Route path="/expertise" element={<Expertise />} />
              <Route path="/expertise/:slug" element={<ExpertiseDetail />} />

              <Route path="/global-reach" element={<GlobalReach />} />
              <Route path="/approach" element={<ApproachPage />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Legal />} />
              <Route path="/terms" element={<Legal />} />
              <Route path="/disclaimer" element={<Legal />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
