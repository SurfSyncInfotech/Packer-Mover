import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Button({
  to,
  href,
  children,
  variant = "primary",
  icon = false,
  className = "",
  type = "button",
  ...props
}) {
  const classes = `btn btn--${variant}${className ? ` ${className}` : ""}`;
  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
