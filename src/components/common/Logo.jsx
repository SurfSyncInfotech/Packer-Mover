export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`.trim()}>
      <svg className="logo__mark" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M7 32c7.2-15 11.2-19 17-19s9.8 4 17 19" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11 36.5h26" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="13" cy="36.5" r="1.45" fill="currentColor" className="logo__gold" />
        <circle cx="35" cy="36.5" r="1.45" fill="currentColor" className="logo__gold" />
        <path d="M24 11.2 27.2 14.4 24 17.6 20.8 14.4Z" className="logo__gold" fill="currentColor" />
      </svg>
      <span className="logo__words">
        <span className="logo__name">SafarSetu</span>
        <span className="logo__tag">Moving Lives. Connecting Destinations.</span>
      </span>
    </span>
  )
}
