import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Building2, Car, ChevronDown, Globe, Home, Package, Warehouse } from 'lucide-react'
import Button from '../common/Button'
import Reveal from '../common/Reveal'
import IndiaMap from '../common/IndiaMap'
import { images } from '../../data/images'
import { journey, processSteps, trustMetrics, whyPoints } from '../../data/site'
import { services } from '../../data/services'
import { testimonials } from '../../data/testimonials'
import { cities } from '../../data/locations'
import { posts } from '../../data/blog'

const serviceIcons = {
  home: Home,
  office: Building2,
  packing: Package,
  vehicle: Car,
  storage: Warehouse,
  international: Globe,
}

function formatValue(value, decimals) {
  if (decimals) return value.toFixed(decimals)
  return Math.round(value).toLocaleString('en-IN')
}

function Counter({ metric }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduce = useReducedMotion()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!inView) return undefined
    if (reduce) {
      setCurrent(metric.value)
      return undefined
    }
    const start = performance.now()
    const duration = 1100
    let frame
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - progress) ** 3
      setCurrent(metric.value * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, metric.value, reduce])

  return (
    <div ref={ref}>
      <p className="trust__value">
        {formatValue(current, metric.decimals)}
        <span>{metric.suffix}</span>
      </p>
      <p className="trust__label">{metric.label}</p>
    </div>
  )
}

export function HeroSection() {
  const reduce = useReducedMotion()
  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__media">
        <img src={images.hero.src} alt={images.hero.alt} />
      </div>
      <div className="hero__shade" />
      <div className="container hero__content">
        <motion.p className="eyebrow eyebrow--light" {...rise(0.05)}>
          Packers & Movers · India
        </motion.p>
        <motion.h1 {...rise(0.15)}>
          Every Move Has
          <br /> a <em>Story.</em>
        </motion.h1>
        <motion.p className="hero__lede" {...rise(0.28)}>
          India’s trusted partner for thoughtful, secure and seamless relocation.
        </motion.p>
        <motion.div className="btn-row" {...rise(0.4)}>
          <Button to="/quote" variant="light">
            Get a Free Quote
          </Button>
          <Button to="/services" variant="line-light">
            Explore Our Services
          </Button>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#trust">
        <span>Scroll</span>
        <ChevronDown size={16} aria-hidden="true" />
      </a>
    </section>
  )
}

export function TrustStrip() {
  return (
    <section className="trust" id="trust" aria-label="Experience">
      <div className="container trust__grid">
        {trustMetrics.map((metric) => (
          <Counter key={metric.id} metric={metric} />
        ))}
      </div>
    </section>
  )
}

export function ServiceMosaic() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h2 className="section-title">Moving Made Remarkably Simple.</h2>
        </Reveal>
        <div className="mosaic">
          {services.map((service, index) => (
            <Reveal key={service.slug} className="mosaic__item" delay={index * 0.05}>
              <Link to={`/services/${service.slug}`} className="service-card">
                <img src={service.image} alt={service.imageAlt} />
                <span className="service-card__shade" />
                <span className="service-card__icon" aria-hidden="true">
                  {(() => {
                    const Icon = serviceIcons[service.icon]
                    return Icon ? <Icon size={18} /> : null
                  })()}
                </span>
                <span className="service-card__body">
                  <span className="service-card__title">{service.title}</span>
                  <span className="service-card__text">{service.summary}</span>
                  <span className="service-card__link">
                    Explore Service <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProcessSection() {
  const reduce = useReducedMotion()
  return (
    <section className="section section--cream">
      <div className="container">
        <Reveal>
          <p className="eyebrow">The path</p>
          <h2 className="section-title">How a SafarSetu move unfolds.</h2>
        </Reveal>
        <div className="process">
          <motion.span
            className="process__line"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          {processSteps.map((step, index) => (
            <Reveal key={step.number} className="process__step" delay={index * 0.08}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhySection() {
  return (
    <section className="section why">
      <div className="container why__grid">
        <Reveal className="why__photo">
          <img src={images.care.src} alt={images.care.alt} />
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow">Why SafarSetu</p>
            <h2 className="section-title">More Than Moving Boxes.</h2>
            <p className="lede">
              The work is ordinary only if it is done carelessly. We treat a household as a set of rooms someone will have to live in tomorrow.
            </p>
          </Reveal>
          <div className="why__list">
            {whyPoints.map((point, index) => (
              <Reveal key={point.number} delay={index * 0.04}>
                <article>
                  <span>{point.number}</span>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function CoverageSection() {
  const [active, setActive] = useState('Delhi')
  const city = cities.find((item) => item.name === active) || cities[0]
  return (
    <section className="section section--navy coverage">
      <div className="container coverage__grid">
        <Reveal>
          <p className="eyebrow eyebrow--light">India</p>
          <h2 className="section-title">Wherever Life Takes You.</h2>
          <p className="lede lede--light">
            From Chandigarh to Chennai, moves are planned city to city — with someone who knows the building, not only the pin code.
          </p>
          <div className="city-list">
            {cities.map((item) => (
              <button
                key={item.name}
                type="button"
                className={item.name === active ? 'is-active' : ''}
                onClick={() => setActive(item.name)}
                aria-pressed={item.name === active}
              >
                {item.name}
              </button>
            ))}
          </div>
          <p className="coverage__note">
            <strong>{city.name}.</strong> {city.note}
          </p>
          <Button to="/locations" variant="line-light">
            View service locations
          </Button>
        </Reveal>
        <IndiaMap active={active} onSelect={setActive} />
      </div>
    </section>
  )
}

export function FeaturedSection() {
  return (
    <section className="featured">
      <div className="featured__media">
        <img src={images.settle.src} alt={images.settle.alt} />
      </div>
      <div className="featured__copy">
        <p className="eyebrow">The day itself</p>
        <h2 className="section-title">From Your First Box to the Final Key.</h2>
        <p className="lede">
          Planning, packing, loading, the road, unloading, and the quiet work of unpacking. SafarSetu stays through the part most trucks leave behind.
        </p>
        <ol className="journey">
          {journey.map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function TestimonialSection() {
  const [lead, ...rest] = testimonials
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">After the move</p>
          <h2 className="section-title">Told in their own words.</h2>
        </Reveal>
        <div className="quotes">
          <Reveal>
            <blockquote className="quote quote--lead">
              <p>“{lead.quote}”</p>
              <footer>
                <strong>{lead.name}</strong>
                <span>{lead.detail}</span>
              </footer>
            </blockquote>
          </Reveal>
          <div className="quotes__side">
            {rest.map((item) => (
              <Reveal key={item.name}>
                <blockquote className="quote">
                  <p>“{item.quote}”</p>
                  <footer>
                    <strong>{item.name}</strong>
                    <span>{item.detail}</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function JournalSection() {
  const featured = posts.slice(0, 4)
  return (
    <section className="section section--cream">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Moving Journal</p>
            <h2 className="section-title">Notes before you pack.</h2>
          </div>
          <Button to="/blog" variant="line">
            Read the journal
          </Button>
        </Reveal>
        <div className="journal-grid">
          {featured.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.05}>
              <article className="journal-card">
                <Link to={`/blog/${post.slug}`}>
                  <img src={post.image} alt={post.imageAlt} />
                  <div>
                    <p className="journal-card__meta">
                      <span>{post.category}</span>
                      <time dateTime={post.dateISO}>{post.date}</time>
                    </p>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="text-link">Read Article</span>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function QuoteBand() {
  return (
    <section className="cta-band">
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow--light">Begin</p>
          <h2>Planning Your Next Move?</h2>
          <p>Tell us where you’re going. We’ll take care of how you get there.</p>
          <div className="btn-row">
            <Button to="/quote" variant="light">
              Get a Free Quote
            </Button>
            <Button href="tel:+911140802200" variant="line-light">
              Talk to Our Moving Expert
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
