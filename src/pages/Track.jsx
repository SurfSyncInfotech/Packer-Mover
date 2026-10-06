import { useState } from "react";
import Button from "../components/ui/Button.jsx";
import { Field } from "./Contact.jsx";
import { submitInquiry } from "../utils/submit.js";
import { usePageMeta } from "../utils/usePageMeta.js";

export default function Track() {
  usePageMeta(
    "Track a Shipment | SafarSetu",
    "Share your SafarSetu booking reference and the moving desk will confirm the status of your move.",
  );
  const [reference, setReference] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    if (reference.trim().length < 4) {
      setError("Enter the booking reference from your quote or move confirmation.");
      setDone(false);
      return;
    }
    setError("");
    await submitInquiry("track", { reference, phone });
    setDone(true);
  }

  return (
    <div className="page-offset">
      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Track shipment</p>
          <h1>A person will confirm where your move stands.</h1>
          <p className="lede">
            Live tracking is shared once a move is scheduled. Send the reference and the mobile number on the
            booking, and the desk will call you back with the status.
          </p>
          {done ? (
            <div className="form-success" role="status">
              <h2>Reference noted.</h2>
              <p>
                We have {reference.trim()}. If it matches a scheduled move, the desk will confirm the status on the
                number you shared.
              </p>
            </div>
          ) : (
            <form className="form stack-fields" onSubmit={onSubmit} noValidate>
              <Field id="reference" label="Booking reference" error={error}>
                <input id="reference" value={reference} onChange={(event) => setReference(event.target.value)} />
              </Field>
              <Field id="track-phone" label="Phone on the booking" error="">
                <input id="track-phone" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
              </Field>
              <Button type="submit" variant="primary">
                Request a status call
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
