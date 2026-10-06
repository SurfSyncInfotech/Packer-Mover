import { Link, useParams } from "react-router-dom";
import PageHero from "../components/ui/PageHero.jsx";
import Button from "../components/ui/Button.jsx";
import NotFound from "./NotFound.jsx";
import { getService, services } from "../data/services.js";
import { usePageMeta } from "../utils/usePageMeta.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  usePageMeta(
    service ? `${service.title} | SafarSetu` : "Service | SafarSetu",
    service ? service.summary : "SafarSetu relocation services across India.",
  );

  if (!service) return <NotFound />;

  const others = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero image={service.image} eyebrow={service.short} title={service.title} lede={service.summary} />
      <section className="section">
        <div className="container service-feature">
          <figure className="service-feature__photo">
            <img src={service.image.src} alt={service.image.alt} />
            <figcaption>{service.image.alt}</figcaption>
          </figure>
          <div className="service-feature__copy">
            <p className="eyebrow">In detail</p>
            <h2>What you are actually booking.</h2>
            {service.story.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
            <Button to="/quote" variant="primary">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <p className="eyebrow">Included</p>
          <h2>The work, named.</h2>
          <div className="include-grid">
            {service.included.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceExtra service={service} />

      <section className="section section--sand">
        <div className="container two">
          <div>
            <h2>Why people choose it</h2>
            <ul className="ticks">
              {service.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>The sequence</h2>
            <ol className="mini-steps">
              {service.process.map((step, index) => (
                <li key={step.title}>
                  <strong>
                    0{index + 1} {step.title}.
                  </strong>{" "}
                  {step.text}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container chapters">
          {service.chapters.map((chapter) => (
            <article className="chapter" key={chapter.title}>
              <h2>{chapter.title}</h2>
              <p>{chapter.text}</p>
              {chapter.detail ? <p>{chapter.detail}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section section--sand">
        <div className="container detail-end">
          <div>
            <p className="eyebrow">Ideal for</p>
            <p className="lede">{service.ideal}</p>
          </div>
          <Button to="/quote" variant="primary">
            Request a quote for this move
          </Button>
        </div>
        <div className="container related">
          <h2>Other ways we move</h2>
          <ul>
            {others.map((item) => (
              <li key={item.slug}>
                <Link to={`/services/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function ServiceExtra({ service }) {
  if (service.layout === "household") {
    return (
      <section className="section section--sand">
        <div className="container">
          <h2>Room by room</h2>
          <div className="rooms">
            {service.rooms.map((room) => (
              <article key={room.name}>
                <h3>{room.name}</h3>
                <p>{room.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (service.layout === "office") {
    return (
      <section className="section section--navy">
        <div className="container">
          <h2>A weekend, in order</h2>
          <ol className="sequence">
            {service.sequence.map((item) => (
              <li key={item.when}>
                <h3>{item.when}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  if (service.layout === "vehicle") {
    return (
      <section className="section">
        <div className="container panels">
          {service.vehicles.map((item) => (
            <article key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (service.layout === "packing") {
    return (
      <section className="section section--sand">
        <div className="container">
          <h2>Materials with a reason</h2>
          <div className="rooms">
            {service.materials.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (service.layout === "storage") {
    return (
      <section className="section">
        <div className="container panels">
          {service.durations.map((item) => (
            <article key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="section section--navy">
      <div className="container stages">
        {service.stages.map((stage, index) => (
          <article key={stage.title}>
            <span>0{index + 1}</span>
            <h2>{stage.title}</h2>
            <p>{stage.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
