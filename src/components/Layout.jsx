import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Preloader from "./Preloader";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import { useNavigationSound } from "@/hooks/useNavigationSound";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useNavigationSound(pathname);

  return (
    <div className="min-h-screen flex flex-col bg-parchment" data-theme="light">
      {/* The highly optimized, zero-blocking Preloader */}
      <Preloader />
      
      <ScrollProgress />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
