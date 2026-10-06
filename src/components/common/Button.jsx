import { Link } from 'react-router-dom'

export default function Button({ to, href, variant = 'solid', children, type = 'button', className = '', ...rest }) {
  const classes = `btn btn--${variant} ${className}`.trim()
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
