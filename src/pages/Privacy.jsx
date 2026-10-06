import { usePageMeta } from "../utils/usePageMeta.js";

export default function Privacy() {
  usePageMeta(
    "Privacy Policy | SafarSetu",
    "How SafarSetu handles the details you share when you request a quote, a callback or a newsletter note.",
  );

  return (
    <div className="page-offset">
      <article className="section prose">
        <div className="container narrow">
          <p className="eyebrow">Privacy</p>
          <h1>Privacy Policy</h1>
          <p>
            This page explains, in plain language, how a SafarSetu website enquiry is meant to be handled. It is a
            website policy for this project, not a substitute for advice from your own counsel before launch.
          </p>
          <h2>What you share</h2>
          <p>
            Quote, contact, tracking and newsletter forms ask for your name, phone, email, addresses of a move, and
            details of a home, office or vehicle. Share only what the request needs.
          </p>
          <h2>How it is used</h2>
          <p>
            Those details exist so a move captain can reply, prepare a quote, or confirm a booking reference. They
            are not a mailing list unless you join the journal notes and can leave that list by writing to the desk.
          </p>
          <h2>This build</h2>
          <p>
            The forms in this website keep a request in your browser session until a delivery endpoint is connected.
            Do not enter information you would not want stored that way. Connect a processor, publish a retention
            period, and name a contact for access or deletion before you invite the public to use the forms.
          </p>
          <h2>Questions</h2>
          <p>Write to hello@safarsetu.com with the subject “Privacy”.</p>
        </div>
      </article>
    </div>
  );
}
