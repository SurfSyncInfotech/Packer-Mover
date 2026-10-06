import { useState } from "react";
import Accordion from "../components/ui/Accordion.jsx";
import Button from "../components/ui/Button.jsx";
import { faqCategories } from "../data/faqs.js";
import { usePageMeta } from "../utils/usePageMeta.js";

export default function FAQ() {
  const [active, setActive] = useState("all");
  usePageMeta(
    "Frequently Asked Questions | SafarSetu",
    "Answers on household moves, office relocation, packing, vehicle transport, storage and pricing with SafarSetu.",
  );

  const visible = active === "all" ? faqCategories : faqCategories.filter((category) => category.id === active);

  return (
    <div className="page-offset">
      <section className="section faq-page">
        <div className="container">
          <p className="eyebrow">FAQ</p>
          <h1>Questions worth asking before a moving day.</h1>
          <div className="faq-cats" role="group" aria-label="FAQ categories">
            <button type="button" aria-pressed={active === "all"} className={active === "all" ? "is-on" : undefined} onClick={() => setActive("all")}>
              All
            </button>
            {faqCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                aria-pressed={active === category.id}
                className={active === category.id ? "is-on" : undefined}
                onClick={() => setActive(category.id)}
              >
                {category.title}
              </button>
            ))}
          </div>
          {visible.map((category) => (
            <section key={category.id} className="faq-block" aria-labelledby={`faq-${category.id}`}>
              <h2 id={`faq-${category.id}`}>{category.title}</h2>
              <Accordion items={category.items} />
            </section>
          ))}
          <div className="faq-end">
            <h2>Still deciding?</h2>
            <p>Tell us the cities and a rough date. A person will answer, not a script.</p>
            <Button to="/contact" variant="primary">
              Talk to Our Moving Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
