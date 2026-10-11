import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import BrandEmblem from "@/components/BrandEmblem";
import { useHeaderTheme } from "@/hooks/useHeaderTheme";

const NAV_LINKS = [
  { label: "Expertise", to: "/expertise" },
  { label: "Global Reach", to: "/global-reach" },
  { label: "Approach", to: "/approach" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const theme = useHeaderTheme(location.pathname);
  const dark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname === to || location.pathname.startsWith(to + "/");

  const glass = dark ? "glass-forest-nav" : "glass-ivory";
  const linkText = dark ? "text-ivory/70 hover:text-ivory" : "text-obsidian/60 hover:text-obsidian";
  const linkActive = dark ? "text-ivory" : "text-obsidian";
  const menuIcon = dark ? "text-ivory" : "text-obsidian";
  const menuHover = dark ? "hover:bg-ivory/10" : "hover:bg-olive-deep hover:text-parchment";
  const startCls = dark
    ? "bg-[#7A3120] text-ivory border border-ivory/28 hover:bg-olive-deep"
    : "bg-terracotta text-ivory hover:bg-olive-deep";

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        {/* Desktop */}
        <div className="hidden lg:block mx-auto max-w-[1500px] px-8 pt-4">
          <div className="flex items-center justify-between">
            <motion.div
              animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -10 : 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ pointerEvents: scrolled ? "none" : "auto" }}
            >
              <Link to="/" aria-label="Cerix Global home" className="flex items-center gap-3 group">
                <div className="scale-[0.4] origin-left -my-4">
                  <BrandEmblem size="sm" animate={true} />
                </div>
                <span className={`font-serif tracking-[0.2em] text-sm uppercase font-semibold transition-colors duration-300 ${dark ? 'text-ivory' : 'text-obsidian'}`}>
                  Cerix Global
                </span>
              </Link>
            </motion.div>

            <motion.nav
              layout
              className={`flex items-center gap-1 rounded-full pl-5 pr-2 py-2 ${glass} transition-colors duration-300`}
            >
              <AnimatePresence>
                {!scrolled && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-1"
                  >
                    {NAV_LINKS.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        className={`group relative px-3 py-2 rounded-full font-sans text-[0.82rem] tracking-[0.08em] font-medium transition-colors duration-300 ${isActive(l.to) ? linkActive : linkText}`}
                      >
                        {l.label}
                        <span className={`absolute left-1/2 -translate-x-1/2 bottom-1 h-px transition-all duration-300 ${dark ? "bg-terracotta-on-dark-small" : "bg-terracotta"} ${isActive(l.to) ? "w-3" : "w-0 group-hover:w-4"}`} />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <Link
                to="/contact"
                className={`ml-1 inline-flex items-center font-sans text-[0.74rem] tracking-[0.14em] uppercase font-medium px-4 py-2.5 rounded-full transition-colors duration-300 whitespace-nowrap ${startCls}`}
              >
                Start a Conversation
              </Link>
              <AnimatePresence>
                {scrolled && (
                  <motion.button
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setOpen(true)}
                    aria-label="Open menu"
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-300 ${menuIcon} ${menuHover}`}
                  >
                    <Menu size={18} strokeWidth={1.5} />
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.nav>
          </div>
        </div>

        {/* Mobile — fixed compact logo (left) + fixed glass capsule (right) */}
        <div className="lg:hidden">
          <motion.div
            animate={{ opacity: scrolled ? 0 : 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              pointerEvents: scrolled ? "none" : "auto",
              position: "fixed",
              left: "calc(12px + env(safe-area-inset-left))",
              top: "calc(12px + env(safe-area-inset-top))",
              zIndex: 50,
              maxWidth: "calc(100% - 140px)",
            }}
          >
            <Link to="/" aria-label="Cerix Global home" className="flex items-center gap-2">
              <div className="scale-[0.35] origin-left -my-4">
                <BrandEmblem size="sm" animate={true} />
              </div>
              <span className={`font-serif tracking-[0.15em] text-xs uppercase font-semibold ${dark ? 'text-ivory' : 'text-obsidian'}`}>
                Cerix Global
              </span>
            </Link>
          </motion.div>

          <div
            className={`flex items-center gap-1 rounded-full pl-2 pr-2 py-2 ${glass} transition-colors duration-300`}
            style={{
              position: "fixed",
              right: "calc(12px + env(safe-area-inset-right))",
              top: "calc(12px + env(safe-area-inset-top))",
              zIndex: 50,
            }}
          >
            <Link
              to="/contact"
              className={`inline-flex items-center font-sans text-[0.66rem] tracking-[0.1em] uppercase font-medium px-3 py-2 rounded-full transition-colors duration-300 whitespace-nowrap ${startCls}`}
            >
              Start
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-300 ${menuIcon}`}
            >
              <Menu size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Menu sheet — slides in from the right (always ivory glass) */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-obsidian/40"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 z-[61] h-full w-[86%] max-w-[360px] flex flex-col"
              style={{
                background: "rgba(250,248,243,0.92)",
                backdropFilter: "blur(22px) saturate(140%)",
                WebkitBackdropFilter: "blur(22px) saturate(140%)",
                borderLeft: "1px solid rgba(11,15,13,0.08)",
              }}
            >
              <div className="flex items-center justify-between px-5 pt-4">
                <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
                  <div className="scale-[0.35] origin-left -my-4">
                    <BrandEmblem size="sm" animate={true} />
                  </div>
                  <span className="font-serif tracking-[0.15em] text-xs uppercase font-semibold text-obsidian">
                    Cerix Global
                  </span>
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="w-11 h-11 rounded-full glass-ivory flex items-center justify-center text-obsidian"
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex-1 flex flex-col justify-center px-7 gap-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={l.to}
                      className="group font-serif text-3xl text-obsidian hover:text-terracotta transition-colors duration-300 block py-2"
                    >
                      {l.label}
                      <span className="block h-px w-0 bg-terracotta group-hover:w-12 transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="px-7 pb-8">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center bg-terracotta text-ivory font-sans text-sm tracking-[0.14em] uppercase px-6 py-4 rounded-full hover:bg-olive-deep transition-colors duration-300"
                >
                  Start a Conversation
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
