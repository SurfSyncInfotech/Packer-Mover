import { Link } from "react-router-dom";

export function LogoMark({ className = "logo__mark" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M5 33.5c7.4 0 9.6-13.5 19-13.5s11.6 13.5 19 13.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M5 38.5h12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M24 8.2 27.4 13 24 17.8 20.6 13Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <circle cx="43" cy="33.5" r="1.85" fill="currentColor" />
    </svg>
  );
}

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="logo" aria-label="SafarSetu, home">
      <LogoMark />
      <span className="logo__text">
        <span className="logo__name">SafarSetu</span>
        {!compact && (
          <span className="logo__tag">Moving Lives. Connecting Destinations.</span>
        )}
      </span>
    </Link>
  );
}
