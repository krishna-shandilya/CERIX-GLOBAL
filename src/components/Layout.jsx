import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import IntroOverlay from "./IntroOverlay";
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
      <IntroOverlay />
      <ScrollProgress />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}