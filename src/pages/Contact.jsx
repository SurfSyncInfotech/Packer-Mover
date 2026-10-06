import { cloneElement, useState } from "react";
import { company } from "../data/company.js";
import { services } from "../data/services.js";
import { images } from "../data/images.js";
import { isEmail, isIndianMobile } from "../utils/validate.js";
import { submitInquiry } from "../utils/submit.js";
import { usePageMeta } from "../utils/usePageMeta.js";
import Button from "../components/ui/Button.jsx";

const initial = {
  name: "",
  phone: "",
  email: "",
  service: "",
  from: "",
  to: "",
  date: "",
  message: "",
};

export default function Contact() {
  usePageMeta(
    "Contact Us | SafarSetu",
    "Speak with a SafarSetu move captain. Call, write, or request a callback for a household, office or intercity move.",
  );

  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function validate(next = values) {
    const nextErrors = {};
    if (next.name.trim().length < 2) nextErrors.name = "Please enter your full name.";
    if (!isIndianMobile(next.phone)) nextErrors.phone = "Enter a 10-digit Indian mobile number.";
    if (!isEmail(next.email)) nextErrors.email = "Enter a valid email address.";
    if (!next.service) nextErrors.service = "Choose a service.";
    if (next.from.trim().length < 2) nextErrors.from = "Tell us where you are moving from.";
    if (next.to.trim().length < 2) nextErrors.to = "Tell us where you are moving to.";
    if (!next.date) nextErrors.date = "Choose a preferred moving date.";
    if (next.message.trim().length < 8) nextErrors.message = "Add a short note about the move.";
    return nextErrors;
  }

  async function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    await submitInquiry("contact", values);
    setDone(true);
  }

  return (
    <div className="page-offset">
      <section className="section contact-page">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Tell us the two addresses. We will take it from there.</h1>
            <p className="lede">
              A move captain reads every request. If you would rather speak, call the desk during the hours below.
            </p>
            <figure className="contact-photo">
              <img src={images.officeExterior.src} alt={images.officeExterior.alt} />
            </figure>
            <ul className="contact-facts">
              <li>
                <span>Phone</span>
                <a href={company.phoneHref}>{company.phone}</a>
              </li>
              <li>
                <span>Email</span>
                <a href={company.emailHref}>{company.email}</a>
              </li>
              <li>
                <span>Office</span>
                <p>
                  {company.address.line1}, {company.address.line2}
                  <br />
                  {company.address.city}
                  <br />
                  {company.address.region}
                </p>
              </li>
              <li>
                <span>Hours</span>
                <p>{company.hours}</p>
              </li>
            </ul>
          </div>

          {done ? (
            <div className="form-success" role="status">
              <p className="eyebrow">Request received</p>
              <h2>We will call you back.</h2>
              <p>
                Thank you, {values.name.split(" ")[0]}. A moving advisor will use {values.phone} to talk through{" "}
                {values.from} to {values.to}.
              </p>
              <Button
                type="button"
                variant="line"
                onClick={() => {
                  setDone(false);
                  setValues(initial);
                }}
              >
                Send another note
              </Button>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit} noValidate>
              <h2>Request a Callback</h2>
              <Field id="name" label="Full name" error={errors.name}>
                <input id="name" name="name" autoComplete="name" value={values.name} onChange={update} />
              </Field>
              <div className="form__row">
                <Field id="phone" label="Phone" error={errors.phone}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={values.phone}
                    onChange={update}
                  />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={update}
                  />
                </Field>
              </div>
              <Field id="service" label="Service required" error={errors.service}>
                <select id="service" name="service" value={values.service} onChange={update}>
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.slug} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </Field>
              <div className="form__row">
                <Field id="from" label="Moving from" error={errors.from}>
                  <input id="from" name="from" value={values.from} onChange={update} />
                </Field>
                <Field id="to" label="Moving to" error={errors.to}>
                  <input id="to" name="to" value={values.to} onChange={update} />
                </Field>
              </div>
              <Field id="date" label="Preferred moving date" error={errors.date}>
                <input id="date" name="date" type="date" value={values.date} onChange={update} />
              </Field>
              <Field id="message" label="Message" error={errors.message}>
                <textarea id="message" name="message" rows={4} value={values.message} onChange={update} />
              </Field>
              <Button type="submit" variant="primary">
                Request a Callback
              </Button>
            </form>
          )}
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="visit-heading">
        <div className="container map-block">
          <div>
            <p className="eyebrow">Visit</p>
            <h2 id="visit-heading">The Bengaluru desk</h2>
            <p>
              {company.address.line1}, {company.address.line2}, {company.address.city}. Come by appointment if you
              would like to talk through a large home or an office floor in person.
            </p>
            <p>
              <a href={company.mapLink} target="_blank" rel="noreferrer">
                Open the map
              </a>
            </p>
          </div>
          <iframe title="Map showing the SafarSetu office on Residency Road, Bengaluru" src={company.mapEmbed} loading="lazy" />
        </div>
      </section>
    </div>
  );
}

export function Field({ id, label, error, children }) {
  const control = cloneElement(children, {
    "aria-invalid": error ? "true" : "false",
    "aria-describedby": error ? `${id}-error` : undefined,
  });

  return (
    <div className={error ? "field has-error" : "field"}>
      <label htmlFor={id}>{label}</label>
      {control}
      {error ? (
        <p id={`${id}-error`} className="field__error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
