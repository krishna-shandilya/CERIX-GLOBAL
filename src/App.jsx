import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
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

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app wrapped in Suspense for lazy loading chunks
  return (
    <Suspense fallback={
      <div className="fixed inset-0 flex items-center justify-center bg-[#07130E]">
        <div className="w-8 h-8 border-4 border-[#C5A059]/20 border-t-[#C5A059] rounded-full animate-spin"></div>
      </div>
    }>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <Preloader />
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
