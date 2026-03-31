import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Process" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
];

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* ── MAIN NAVBAR ── */}
      <nav className="main-nav">
        {/* Hamburger button — always in DOM, shown via CSS on mobile */}
        <button
          className={`hamburger${sidebarOpen ? " open" : ""}`}
          aria-label="Open navigation menu"
          onClick={openSidebar}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Brand — centred on mobile via CSS absolute positioning */}
        <div className="nav-brand">
          <Link to="/">Annual ESG</Link>
        </div>

        {/* Desktop centre links */}
        <div className="mid-nav">
          <ul>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA */}
        <div className="nav-cta">
          <Link to="/contact">
            <button type="button">Get a Quote</button>
          </Link>
        </div>
      </nav>

      {/* ── OVERLAY — always in DOM, toggled via CSS opacity + pointer-events ── */}
      <div
        className={`sidebar-overlay${sidebarOpen ? " visible" : ""}`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* ── SIDEBAR PANEL — always in DOM, slides in/out via CSS transform ── */}
      <aside
        className={`sidebar${sidebarOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="sidebar-header">
          <Link to="/" onClick={closeSidebar}>
            <span className="sidebar-brand">Annual ESG</span>
          </Link>

          <button
            className="sidebar-close"
            onClick={closeSidebar}
            aria-label="Close menu"
            type="button"
          >
            &times;
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} onClick={closeSidebar}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <Link to="/contact">
            <button type="button" onClick={closeSidebar}>
              Get a Quote
            </button>
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
