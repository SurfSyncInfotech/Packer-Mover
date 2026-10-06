import PageHero from "../components/ui/PageHero.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import IndiaMap from "../components/ui/IndiaMap.jsx";
import { QuoteBand } from "./Home.jsx";
import { images } from "../data/images.js";
import { principles, people, values, mission, vision } from "../data/company.js";
import { usePageMeta } from "../utils/usePageMeta.js";
import { useState } from "react";

export default function About() {
  const [active, setActive] = useState("Bengaluru");
  usePageMeta(
    "About Us | SafarSetu",
    "SafarSetu exists to make relocation across India feel considered, secure and human — for families and for businesses.",
  );

  return (
    <>
      <PageHero
        image={images.aboutPeople}
        eyebrow="About us"
        title="We move homes the way we would want our own moved."
        lede="A relocation company for people who are changing cities, not merely shifting cartons."
      />

      <section className="section">
        <div className="container split">
          <figure className="portrait">
            <img src={images.aboutStory.src} alt={images.aboutStory.alt} />
          </figure>
          <div>
            <SectionHeading eyebrow="Our story" title="The move is the easy part to underestimate." />
            <p>
              SafarSetu began from a familiar Indian scene: a family ready to leave, a truck that arrived as a
              stranger, and a day that ran on instructions shouted up a stairwell. The furniture survived. The
              feeling of the move did not.
            </p>
            <p>
              We built a company around the opposite habit. One captain holds the file. Packing follows the rooms
              people actually live in. The price is explained before the day, and someone still answers when the
              truck is between cities.
            </p>
            <p>
              The name holds the idea. <em>Safar</em> is the journey. <em>Setu</em> is the bridge. We exist to
              connect the address you are leaving with the one that will become home.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container narrow">
          <SectionHeading eyebrow="Why we started" title="Because a move should not feel like a loss of control." />
          <p>
            People change cities for work, for parents, for a child&apos;s school, for a company that has outgrown a
            floor. Those are tender reasons. They deserve a crew that can talk about a puja shelf and a server rack
            with the same steadiness.
          </p>
          <blockquote className="pull">
            We started so that care would be a method — a named person, a written scope, a way of packing — and not
            a slogan on the side of a truck.
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our approach" title="Four habits we do not treat as optional." />
          <ol className="approach">
            {principles.map((item, index) => (
              <li key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container split split--top">
          <div>
            <SectionHeading eyebrow="Our people" title="Roles, not a crowd at the door." />
            <ul className="role-list">
              {people.map((person) => (
                <li key={person.role}>
                  <h3>{person.role}</h3>
                  <p>{person.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <figure>
            <img src={images.aboutStandards.src} alt={images.aboutStandards.alt} />
            <figcaption>A check before the shutter comes down, not after a complaint.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionHeading eyebrow="Our commitment to care" title="Care is visible in the small decisions." />
          <p>
            Which carton is opened first. Whether a glass top is crated. Whether the crew will wait for the
            society&apos;s slot instead of arguing with the watchman. Whether a parent&apos;s kitchen is packed
            with them in the room.
          </p>
          <p>
            We would rather move fewer homes carefully than fill a highway with days we cannot stand behind.
          </p>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container narrow">
          <SectionHeading
            invert
            eyebrow="Safety and quality"
            title="Standards you can ask to see."
          />
          <ul className="check-list">
            <li>Condition notes for vehicles, and an inventory for goods that go into storage.</li>
            <li>Materials chosen for the object: books, brass, glass, mattresses and IT do not share one method.</li>
            <li>Crews briefed on the building before they arrive, including lift windows and tight stairwells.</li>
            <li>A move captain who remains reachable through transit, not only at the booking.</li>
            <li>No hazardous goods — fuel, loose paint, gas cylinders — on a household or office truck.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="India-wide network"
            title="Cities connected by a single file."
          />
          <p className="lede">
            Coordination sits in Bengaluru. The work happens in the cities below, with crews who know local access
            and the roads between them.
          </p>
          <IndiaMap active={active} onSelect={setActive} />
        </div>
      </section>

      <section className="section section--sand">
        <div className="container mission">
          <article>
            <p className="eyebrow">Mission</p>
            <p>{mission}</p>
          </article>
          <article>
            <p className="eyebrow">Vision</p>
            <p>{vision}</p>
          </article>
        </div>
        <div className="container values">
          {values.map((value) => (
            <article key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>
      <QuoteBand />
    </>
  );
}
