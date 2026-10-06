import { Building2, Car, Globe, Home, Package, Warehouse } from "lucide-react";

const icons = { Home, Building2, Package, Car, Warehouse, Globe };

export default function ServiceIcon({ name, size = 18 }) {
  const Icon = icons[name] || Package;
  return <Icon size={size} strokeWidth={1.5} aria-hidden="true" />;
}

export function SocialIcon({ name }) {
  const common = {
    viewBox: "0 0 24 24",
    width: 18,
    height: 18,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "Instagram") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "Facebook") {
    return (
      <svg {...common}>
        <path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.2l.8-3H13V9c0-.6.4-1 1-1Z" />
      </svg>
    );
  }

  if (name === "LinkedIn") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 10.5V16M8 8h.01M12 16v-3.2a1.8 1.8 0 0 1 3.2-1.1c.2.3.3.7.3 1.1V16" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="3.5" y="7" width="17" height="11" rx="2" />
      <path d="m10.5 10.5 4 2.2-4 2.2v-4.4Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
