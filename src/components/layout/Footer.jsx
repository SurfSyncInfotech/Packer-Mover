import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo.jsx";
import { company, footerExplore } from "../../data/company.js";
import { services } from "../../data/services.js";
import { isEmail } from "../../utils/validate.js";
import { submitInquiry } from "../../utils/submit.js";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const year = new Date().getFullYear();

  async function onSubmit(event) {
    event.preventDefault();
    if (!isEmail(email)) {
      setError("Enter a valid email address.");
      setDone(false);
      return;
    }
    setError("");
    await submitInquiry("newsletter", { email });
    setDone(true);
    setEmail("");
  }

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p>
            Thoughtful packing, careful crews and a single move captain — for families and
            businesses relocating across India.
          </p>
          <form className="news" onSubmit={onSubmit} noValidate>
            <label htmlFor="newsletter-email">Notes on moving well</label>
            <div className="news__row">
              <input
                id="newsletter-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email address"
                value={email}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? "newsletter-error" : undefined}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit">Join</button>
            </div>
            {error ? (
              <p id="newsletter-error" className="field__error" role="alert">
                {error}
              </p>
            ) : null}
            {done ? <p className="news__ok">Thank you. You are on the list.</p> : null}
          </form>
        </div>

        <div>
          <h2>Quick links</h2>
          <ul>
            {footerExplore.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Services</h2>
          <ul>
            {services
              .filter((service) => service.footer)
              .map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`}>{service.short}</Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <ul className="footer__contact">
            <li>
              <a href={company.phoneHref}>{company.phone}</a>
            </li>
            <li>
              <a href={company.emailHref}>{company.email}</a>
            </li>
            <li>
              {company.address.line1}
              <br />
              {company.address.line2}
              <br />
              {company.address.city}
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer__legal">
        <p>© {year} SafarSetu. Moving Lives. Connecting Destinations.</p>
        <p>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </p>
      </div>
    </footer>
  );
}
