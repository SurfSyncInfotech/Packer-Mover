import { usePageMeta } from "../utils/usePageMeta.js";

export default function Terms() {
  usePageMeta(
    "Terms & Conditions | SafarSetu",
    "Terms for using the SafarSetu website and for requesting a relocation quote.",
  );

  return (
    <div className="page-offset">
      <article className="section prose">
        <div className="container narrow">
          <p className="eyebrow">Terms</p>
          <h1>Terms & Conditions</h1>
          <p>
            Using this website means you understand it is a place to learn about SafarSetu and to request a
            conversation. A quote on the site is an invitation to agree a scope. It is not, by itself, a contract to
            move your home.
          </p>
          <h2>Quotes</h2>
          <p>
            Prices depend on what is described. If the volume, access or date changes, the quote can change before
            work begins. Nothing is collected from your home until a written scope and a date are confirmed.
          </p>
          <h2>Your responsibilities</h2>
          <p>
            Tell us about hazardous goods, access limits and items of unusual value. Do not pack dangerous
            materials into cartons. Keep passports, jewellery and documents you must carry with you, not in the
            truck, unless we have agreed otherwise in writing.
          </p>
          <h2>The website</h2>
          <p>
            Articles in the journal are general guidance for moving in India. They are not legal, customs or
            insurance advice. Have a professional review documents for an international shipment.
          </p>
          <h2>Contact</h2>
          <p>Questions about these terms: hello@safarsetu.com.</p>
        </div>
      </article>
    </div>
  );
}
