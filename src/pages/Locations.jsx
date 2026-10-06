import { useState } from "react";
import PageHero from "../components/ui/PageHero.jsx";
import IndiaMap from "../components/ui/IndiaMap.jsx";
import { QuoteBand } from "./Home.jsx";
import { cities } from "../data/locations.js";
import { images } from "../data/images.js";
import { usePageMeta } from "../utils/usePageMeta.js";

export default function Locations() {
  const [active, setActive] = useState("Bengaluru");
  const city = cities.find((item) => item.name === active);
  usePageMeta(
    "Service Locations | SafarSetu",
    "SafarSetu coordinates relocations across Delhi, Mumbai, Bengaluru, Hyderabad, Pune, Kolkata, Chennai and other Indian cities.",
  );

  return (
    <>
      <PageHero
        image={images.cityStreet}
        eyebrow="Locations"
        title="Wherever Life Takes You."
        lede="Featured cities on a wider map of intercity lanes. Tell us both addresses and we will confirm how the move runs."
      />
      <section className="section">
        <div className="container">
          <IndiaMap active={active} onSelect={setActive} />
          {city ? (
            <p className="city-note">
              <strong>{city.name}.</strong> {city.note}
            </p>
          ) : null}
          <ul className="loc-grid">
            {cities.map((item) => (
              <li key={item.name}>
                <h2>{item.name}</h2>
                <p>{item.region}</p>
                <p>{item.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <QuoteBand />
    </>
  );
}
