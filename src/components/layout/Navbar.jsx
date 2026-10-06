import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo.jsx";
import Button from "../ui/Button.jsx";
import { mainNav, usesOverlayNav } from "../../data/company.js";
import { useMenu } from "./menu-context.js";

export default function Navbar() {
  const { pathname } = useLocation();
  const { open, setOpen } = useMenu();
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const overlay = usesOverlayNav(pathname) && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  return (
    <header className={`nav${overlay ? "" : " is-solid"}${open ? " is-open" : ""}`}>
      <div className="container nav__inner">
        <Logo />
        <nav className="nav__links" aria-label="Primary">
          {mainNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? "nav__link is-active" : "nav__link")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav__actions">
          <Button to="/quote" variant={overlay ? "light" : "primary"}>
            Get a Free Quote
          </Button>
          <button
            type="button"
            className="nav__burger"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="drawer"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <nav aria-label="Mobile">
              {mainNav.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.08 + index * 0.05, duration: 0.4 }}
                >
                  <NavLink to={item.to} end={item.end} className="drawer__link" onClick={() => setOpen(false)}>
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="drawer__cta">
              <Button to="/quote" variant="primary">
                Get a Free Quote
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
