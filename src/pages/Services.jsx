import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero.jsx";
import Button from "../components/ui/Button.jsx";
import ServiceIcon from "../components/ui/ServiceIcon.jsx";
import { QuoteBand } from "./Home.jsx";
import { services } from "../data/services.js";
import { images } from "../data/images.js";
import { usePageMeta } from "../utils/usePageMeta.js";

export default function Services() {
  usePageMeta(
    "Services | SafarSetu",
    "Household shifting, office relocation, packing, vehicle transport, storage and international relocation across India.",
  );

  return (
    <>
      <PageHero
        image={images.loadingTruck}
        eyebrow="Services"
        title="A different kind of care for every kind of move."
        lede="Choose the service that matches the life, the office or the journey. Each one is planned on its own terms."
      />
      <div className="container svc-rows">
        {services.map((service) => (
          <article className="svc-row" key={service.slug} id={service.slug}>
            <div className="svc-row__media">
              <img src={service.image.src} alt={service.image.alt} />
            </div>
            <div className="svc-row__copy">
              <p className="svc-row__kicker">
                <ServiceIcon name={service.icon} />
                {service.short}
              </p>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <h3>What this includes</h3>
              <ul className="ticks">
                {service.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <h3>How it runs</h3>
              <ol className="mini-steps">
                {service.process.map((step) => (
                  <li key={step.title}>
                    <strong>{step.title}.</strong> {step.text}
                  </li>
                ))}
              </ol>
              <p className="ideal">
                <span>Ideal for</span> {service.ideal}
              </p>
              <div className="hero__actions">
                <Button to={`/services/${service.slug}`} variant="primary">
                  Explore Service
                </Button>
                <Button to="/quote" variant="line">
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <section className="section">
        <div className="container narrow center">
          <h2>Not sure which service fits?</h2>
          <p className="lede">
            Tell us the two addresses and the date. We will tell you whether this is a household move, a vehicle
            lane, storage, or a combination.
          </p>
          <Link to="/contact" className="text-link">
            Talk to a move captain
          </Link>
        </div>
      </section>
      <QuoteBand />
    </>
  );
}
