import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Hero, { JournalCard } from "../components/home/Hero.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Counter from "../components/ui/Counter.jsx";
import Button from "../components/ui/Button.jsx";
import ServiceIcon from "../components/ui/ServiceIcon.jsx";
import IndiaMap from "../components/ui/IndiaMap.jsx";
import { trustMetrics, processSteps, reasons, journeySteps } from "../data/company.js";
import { services } from "../data/services.js";
import { testimonials } from "../data/testimonials.js";
import { posts } from "../data/blogPosts.js";
import { cities } from "../data/locations.js";
import { images } from "../data/images.js";
import { usePageMeta } from "../utils/usePageMeta.js";

export default function Home() {
  usePageMeta(
    "SafarSetu | Premium Packers & Movers in India",
    "India's trusted partner for thoughtful, secure and seamless relocation. Household shifting, office moves, vehicle transport, storage and international relocation.",
  );

  return (
    <>
      <Hero />
      <Trust />
      <ServicePreview />
      <Process />
      <Why />
      <Coverage />
      <Featured />
      <Voices />
      <Journal />
      <QuoteBand />
    </>
  );
}

function Trust() {
  return (
    <section className="trust" id="trust" aria-label="Experience at a glance">
      <div className="container">
        <ul className="trust__list">
          {trustMetrics.map((metric) => (
            <li key={metric.id}>
              <strong>
                <Counter value={metric.value} decimals={metric.decimals || 0} suffix={metric.suffix} />
              </strong>
              <span>{metric.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServicePreview() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Moving Made Remarkably Simple."
            lede="Six ways to move, each planned around the life or the workplace that is actually changing."
          />
        </Reveal>
        <div className="svc-grid">
          {services.map((service, index) => (
            <Reveal key={service.slug} className="svc" delay={index * 0.05} lift>
              <Link to={`/services/${service.slug}`} className="svc__media">
                <img src={service.image.src} alt={service.image.alt} />
                <span className="svc__icon">
                  <ServiceIcon name={service.icon} />
                </span>
              </Link>
              <div className="svc__body">
                <h3>
                  <Link to={`/services/${service.slug}`}>{service.title}</Link>
                </h3>
                <p>{service.summary}</p>
                <Link to={`/services/${service.slug}`} className="text-link">
                  Explore Service
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const reduce = useReducedMotion();
  return (
    <section className="section process">
      <div className="container">
        <SectionHeading
          invert
          eyebrow="How it works"
          title="A move with a beginning, a middle and a proper end."
          lede="Five clear stages. One person accountable for all of them."
        />
        <div className="process__steps">
          <motion.div
            className="process__line"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          {processSteps.map((step, index) => (
            <Reveal key={step.n} className="process__step" delay={index * 0.08}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="section why">
      <div className="container why__grid">
        <Reveal as="figure" className="why__figure">
          <img src={images.aboutCare.src} alt={images.aboutCare.alt} />
          <figcaption>Wrapped, labeled, and carried as if the house were ours.</figcaption>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Why SafarSetu"
            title="More Than Moving Boxes."
            lede="The work is coordination, judgement and care — the boxes are only how it shows up at your door."
          />
          <ul className="why__list">
            {reasons.map((reason) => (
              <li key={reason.n}>
                <span>{reason.n}</span>
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  const [active, setActive] = useState(cities[10].name);
  const city = cities.find((item) => item.name === active) || cities[0];

  return (
    <section className="section coverage">
      <div className="container">
        <SectionHeading
          eyebrow="India"
          title="Wherever Life Takes You."
          lede="A coordinating desk in Bengaluru, and crews who know the buildings, the roads and the seasons of these cities."
        />
        <IndiaMap active={active} onSelect={setActive} />
        <p className="city-note">
          <strong>{city.name}.</strong> {city.note}
        </p>
        <Link to="/locations" className="text-link">
          View service locations
        </Link>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="journey">
      <div className="journey__media">
        <img src={images.featuredJourney.src} alt={images.featuredJourney.alt} />
      </div>
      <div className="container journey__wrap">
        <div className="journey__panel">
          <p className="eyebrow">The full arc</p>
          <h2>From Your First Box to the Final Key.</h2>
          <p className="lede">
            Planning through unpacking is one engagement. You should not have to assemble a new team at every doorway.
          </p>
          <ol className="journey__steps">
            {journeySteps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section className="section voices">
      <div className="container">
        <SectionHeading
          eyebrow="From families and teams"
          title="Heard at the other end of the move."
          lede="Households and teams who wanted the day to feel considered, from the first call to the last box."
        />
        <div className="voices__grid">
          {testimonials.slice(0, 4).map((item) => (
            <blockquote className="quote" key={item.id}>
              <p>{item.quote}</p>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.detail}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section className="section journal">
      <div className="container">
        <div className="section__head">
          <SectionHeading eyebrow="Moving journal" title="Notes before the boxes are taped." />
          <Link to="/blog" className="text-link">
            All articles
          </Link>
        </div>
        <div className="journal__grid">
          {posts.slice(0, 4).map((post) => (
            <JournalCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function QuoteBand() {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <p className="eyebrow eyebrow--light">Begin</p>
        <h2>Planning Your Next Move?</h2>
        <p>Tell us where you&apos;re going. We&apos;ll take care of how you get there.</p>
        <div className="hero__actions">
          <Button to="/quote" variant="primary">
            Get a Free Quote
          </Button>
          <Button to="/contact" variant="light">
            Talk to Our Moving Expert
          </Button>
        </div>
      </div>
    </section>
  );
}
