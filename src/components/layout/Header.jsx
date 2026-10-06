import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from '../common/Logo'
import { navLinks } from '../../data/site'
import { getService, services } from '../../data/services'
import { getPost } from '../../data/blog'

const overlayExact = new Set(['/', '/about', '/services', '/contact', '/faq', '/blog', '/locations', '/track'])

export default function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const serviceSlug = pathname.startsWith('/services/') ? pathname.slice('/services/'.length) : ''
  const postSlug = pathname.startsWith('/blog/') ? pathname.slice('/blog/'.length) : ''
  const validDetail =
    (serviceSlug && !serviceSlug.includes('/') && getService(serviceSlug)) ||
    (postSlug && !postSlug.includes('/') && getPost(postSlug))
  const overlayPage = overlayExact.has(pathname) || Boolean(validDetail)
  const solid = !overlayPage || scrolled || open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        setServicesOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const linkClass = ({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`

  return (
    <header className={`header ${solid ? 'header--solid' : 'header--overlay'}`}>
      <div className="container header__bar">
        <Link to="/" className="logo-link" aria-label="SafarSetu home">
          <Logo />
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {navLinks.map((link) =>
            link.to === '/services' ? (
              <div
                key={link.to}
                className={`nav-drop${servicesOpen ? ' is-open' : ''}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink to="/services" className={linkClass}>
                  Services
                </NavLink>
                <button
                  type="button"
                  className="nav-drop__btn"
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                  onClick={() => setServicesOpen((value) => !value)}
                >
                  <ChevronDown size={16} aria-hidden="true" />
                  <span className="sr-only">Show services</span>
                </button>
                <div id="services-menu" className="nav-drop__panel" hidden={!servicesOpen}>
                  {services.map((service) => (
                    <Link key={service.slug} to={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="header__actions">
          <Link to="/track" className="header__track">
            Track Shipment
          </Link>
          <Link to="/quote" className="btn btn--solid header__quote">
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="header__menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + index * 0.05, duration: 0.4 }}
              >
                <Link to={link.to} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="mobile-nav__services">
              {services.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} onClick={() => setOpen(false)}>
                  {service.shortTitle}
                </Link>
              ))}
            </div>
            <div className="mobile-nav__cta">
              <Link to="/quote" className="btn btn--solid" onClick={() => setOpen(false)}>
                Get a Free Quote
              </Link>
              <Link to="/track" className="btn btn--line" onClick={() => setOpen(false)}>
                Track Shipment
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
