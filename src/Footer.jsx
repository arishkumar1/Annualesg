import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Process" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
];

function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-mid">
        {/* Col 1 — Brand & CTA — hidden on mobile via CSS */}
        <section className="footer-col hide-mobile">
          <p className="footer-title">Let us tell your brand's story</p>
          <p className="second-p">
            Annual ESG specializes in creating visually stunning and
            strategically crafted corporate reports that effectively communicate
            your company's story.
          </p>
          <Link to="/contact">
            <button type="button">GET IN TOUCH</button>
          </Link>
        </section>

        {/* Col 2 — Quick Links — always visible */}
        <section className="footer-col">
          <p className="footer-title">Quick Links</p>
          <ul>
            <Link to="/">
              <li>Services</li>
            </Link>

            <Link to="/portfolio">
              <li>Portfolio</li>
            </Link>

            <Link to="/process">
              <li>Process</li>
            </Link>

            <Link to="testimonials">
              <li>Testimonials</li>
            </Link>

            <Link to="/contact">
              <li>Contact</li>
            </Link>

            <Link to="/About">
              <li>About</li>
            </Link>

            <Link to="/blog">
              <li>Blog</li>
            </Link>
          </ul>
        </section>

        {/* Col 3 — Contact Info — always visible */}
        <section className="footer-col">
          <p className="footer-title">Contact Info</p>
          <p className="second-p">
            BSI Business Park, H-160, H Block, Sector 63, Noida, Uttar Pradesh
            201301, India.
          </p>
          <p className="second-p">+91 94119 53348 (India)</p>
          <p className="second-p">contact@annualesg.com</p>
        </section>

        {/* Col 4 — Newsletter — hidden on mobile via CSS */}
        <section className="footer-col hide-mobile">
          <p className="footer-title">Newsletter</p>
          <p className="second-p">
            Subscribe to our newsletter for the latest updates and insights on
            corporate reporting.
          </p>
          <form className="from-input">
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>

      <div className="footer-hr" />

      <div className="footer-bottom">
        <p>
          &copy; 2026 All Rights Reserved. | Privacy Policy | Terms &amp;
          Conditions
        </p>
        <p>Designed &amp; Developed with ❤️ by Arish Kumar</p>
      </div>
    </footer>
  );
}

export default Footer;
