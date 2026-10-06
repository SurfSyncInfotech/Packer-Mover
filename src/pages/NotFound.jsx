import { Link } from "react-router-dom";
import { usePageMeta } from "../utils/usePageMeta.js";

export default function NotFound() {
  usePageMeta("Page not found | SafarSetu", "This SafarSetu page does not exist.");

  return (
    <div className="page-offset">
      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">404</p>
          <h1>This page has already moved.</h1>
          <p className="lede">The address may have changed. The home, services and journal are still here.</p>
          <p>
            <Link to="/" className="text-link">
              Back to home
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
