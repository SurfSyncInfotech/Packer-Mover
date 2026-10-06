import { useEffect, useLayoutEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import { MenuContext } from "../components/layout/menu-context.js";

export default function MainLayout() {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const main = document.getElementById("main");
    if (main) main.focus({ preventScroll: true });
  }, [pathname]);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const text = ":is(.eyebrow, h1, h2, h3, p, li, blockquote, figcaption)";
    const nodes = [
      ...document.querySelectorAll(`#main section:not(.hero) ${text}`),
      ...document.querySelectorAll(`.footer ${text}`),
    ];
    const unique = [...new Set(nodes)].filter((el) => !el.closest(".hero"));

    unique.forEach((el) => {
      el.classList.add("rise");
      if (reduceMotion) el.classList.add("is-in");
    });

    if (reduceMotion) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    unique.forEach((el) => {
      const group = el.closest("section, .footer");
      const peers = group ? [...group.querySelectorAll(".rise")] : [];
      const order = Math.min(Math.max(peers.indexOf(el), 0), 8);
      el.style.transitionDelay = `${order * 55}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <motion.main
        id="main"
        tabIndex={-1}
        inert={open ? "" : undefined}
        key={pathname}
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.main>
      <div inert={open ? "" : undefined}>
        <Footer />
      </div>
    </MenuContext.Provider>
  );
}
