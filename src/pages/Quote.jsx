import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Button from "../components/ui/Button.jsx";
import { Field } from "./Contact.jsx";
import { cities } from "../data/locations.js";
import {
  inventoryOptions,
  moveTypes,
  propertyFields,
  quoteSteps,
} from "../data/quoteOptions.js";
import { services } from "../data/services.js";
import { isEmail, isIndianMobile, todayISO } from "../utils/validate.js";
import { submitInquiry } from "../utils/submit.js";
import { usePageMeta } from "../utils/usePageMeta.js";

const empty = {
  type: "",
  from: "",
  to: "",
  property: {},
  inventory: [],
  notes: "",
  name: "",
  phone: "",
  email: "",
  date: "",
  flexibility: "A few days either side",
};

export default function Quote() {
  usePageMeta(
    "Get a Free Quote | SafarSetu",
    "Tell SafarSetu about your move in a few calm steps and request a personalised relocation quote.",
  );

  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState(empty);
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const fields = propertyFields[data.type] || [];
  const items = inventoryOptions[data.type] || [];
  const move = moveTypes.find((item) => item.id === data.type);
  const reviewing = step === quoteSteps.length;

  function setField(key, value) {
    setData((current) => ({ ...current, [key]: value }));
  }

  function validate(index = step) {
    const next = {};
    if (index === 0 && !data.type) next.type = "Choose the kind of move.";
    if (index === 1) {
      if (data.from.trim().length < 2) next.from = "Enter the city you are leaving.";
      if (data.to.trim().length < 2) next.to = "Enter the destination.";
    }
    if (index === 2) {
      fields.forEach((field) => {
        const value = data.property[field.name];
        if (!value || !String(value).trim()) next[field.name] = "This detail is needed for the quote.";
      });
    }
    if (index === 3 && data.inventory.length === 0) {
      next.inventory = "Select at least one item. You can add a note as well.";
    }
    if (index === 4) {
      if (data.name.trim().length < 2) next.name = "Please enter your full name.";
      if (!isIndianMobile(data.phone)) next.phone = "Enter a 10-digit Indian mobile number.";
      if (!isEmail(data.email)) next.email = "Enter a valid email address.";
    }
    if (index === 5) {
      if (!data.date) next.date = "Choose a preferred date.";
      else if (data.date < todayISO()) next.date = "Choose today or a future date.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function go(nextStep) {
    setDir(nextStep > step ? 1 : -1);
    setStep(nextStep);
    setErrors({});
  }

  function next() {
    if (validate()) go(step + 1);
  }

  function toggleItem(item) {
    setData((current) => {
      const has = current.inventory.includes(item);
      return {
        ...current,
        inventory: has ? current.inventory.filter((entry) => entry !== item) : [...current.inventory, item],
      };
    });
  }

  async function submit() {
    const response = await submitInquiry("quote", data);
    setResult(response);
  }

  return (
    <div className="page-offset">
      <section className="section quote-page">
        <div className="container quote-shell">
          <aside className="quote-rail" aria-label="Quote progress">
            <p className="eyebrow">Free quote</p>
            <ol>
              {quoteSteps.map((item, index) => (
                <li key={item.id} className={index === step ? "is-current" : index < step ? "is-done" : undefined}>
                  <span>0{index + 1}</span>
                  {item.label}
                </li>
              ))}
            </ol>
          </aside>

          <div className="quote-panel">
            {result ? (
              <div className="form-success" role="status">
                <p className="eyebrow">Quote requested</p>
                <h1>Thank you. We have the shape of your move.</h1>
                <p>
                  {data.name.split(" ")[0]}, a SafarSetu advisor will call {data.phone} to talk through{" "}
                  {data.from} to {data.to}. Your reference is <strong>{result.reference}</strong>.
                </p>
                <Button to="/" variant="line">
                  Return home
                </Button>
              </div>
            ) : (
              <>
                <p className="quote-count">
                  {reviewing ? "Review" : `Step ${step + 1} of ${quoteSteps.length}`}
                </p>
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={step}
                    initial={reduce ? false : { opacity: 0, x: dir * 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduce ? undefined : { opacity: 0, x: dir * -28 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {step === 0 && (
                      <StepType data={data} error={errors.type} onPick={(type) => setField("type", type)} />
                    )}
                    {step === 1 && (
                      <StepRoute data={data} errors={errors} onChange={setField} />
                    )}
                    {step === 2 && (
                      <StepProperty
                        fields={fields}
                        property={data.property}
                        errors={errors}
                        onChange={(name, value) =>
                          setData((current) => ({
                            ...current,
                            property: { ...current.property, [name]: value },
                          }))
                        }
                      />
                    )}
                    {step === 3 && (
                      <StepInventory
                        items={items}
                        selected={data.inventory}
                        notes={data.notes}
                        error={errors.inventory}
                        onToggle={toggleItem}
                        onNotes={(notes) => setField("notes", notes)}
                      />
                    )}
                    {step === 4 && <StepContact data={data} errors={errors} onChange={setField} />}
                    {step === 5 && <StepDate data={data} errors={errors} onChange={setField} />}
                    {reviewing && <StepReview data={data} move={move} />}
                  </motion.div>
                </AnimatePresence>

                <div className="quote-nav">
                  {step > 0 ? (
                    <Button type="button" variant="line" onClick={() => go(step - 1)}>
                      Back
                    </Button>
                  ) : (
                    <span />
                  )}
                  {reviewing ? (
                    <Button type="button" variant="primary" onClick={submit}>
                      Request My Quote
                    </Button>
                  ) : (
                    <Button type="button" variant="primary" onClick={next}>
                      Continue
                    </Button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function StepType({ data, error, onPick }) {
  return (
    <>
      <h1>What are we moving?</h1>
      <p className="lede">Choose the closest fit. A move captain can combine services when we speak.</p>
      <div className="choice-grid" role="list">
        {moveTypes.map((type) => (
          <button
            key={type.id}
            type="button"
            className={data.type === type.id ? "choice is-on" : "choice"}
            aria-pressed={data.type === type.id}
            onClick={() => onPick(type.id)}
          >
            <strong>{type.title}</strong>
            <span>{type.text}</span>
          </button>
        ))}
      </div>
      {error ? <p className="field__error" role="alert">{error}</p> : null}
      <datalist id="service-names">
        {services.map((service) => (
          <option key={service.slug} value={service.title} />
        ))}
      </datalist>
    </>
  );
}

function StepRoute({ data, errors, onChange }) {
  const abroad = data.type === "international";
  return (
    <>
      <h1>{abroad ? "Where does the shipment begin?" : "Where is the move?"}</h1>
      <div className="form__row">
        <Field id="from" label={abroad ? "Origin city in India" : "Moving from"} error={errors.from}>
          <input
            id="from"
            list="city-names"
            value={data.from}
            onChange={(event) => onChange("from", event.target.value)}
          />
        </Field>
        <Field id="to" label={abroad ? "Destination city" : "Moving to"} error={errors.to}>
          <input id="to" list={abroad ? undefined : "city-names"} value={data.to} onChange={(event) => onChange("to", event.target.value)} />
        </Field>
      </div>
      <datalist id="city-names">
        {cities.map((city) => (
          <option key={city.name} value={city.name} />
        ))}
      </datalist>
    </>
  );
}

function StepProperty({ fields, property, errors, onChange }) {
  return (
    <>
      <h1>A few details about the place.</h1>
      <div className="form stack-fields">
        {fields.map((field) => (
          <Field key={field.name} id={field.name} label={field.label} error={errors[field.name]}>
            {field.type === "select" ? (
              <select
                id={field.name}
                value={property[field.name] || ""}
                onChange={(event) => onChange(field.name, event.target.value)}
              >
                <option value="">Select</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                placeholder={field.placeholder}
                value={property[field.name] || ""}
                onChange={(event) => onChange(field.name, event.target.value)}
              />
            )}
          </Field>
        ))}
      </div>
    </>
  );
}

function StepInventory({ items, selected, notes, error, onToggle, onNotes }) {
  return (
    <>
      <h1>What is coming with you?</h1>
      <p className="lede">An approximate list is enough. We refine it on the call.</p>
      <div className="chips">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            className={selected.includes(item) ? "chip is-on" : "chip"}
            aria-pressed={selected.includes(item)}
            onClick={() => onToggle(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {error ? <p className="field__error" role="alert">{error}</p> : null}
      <Field id="notes" label="Anything we should know?" error="">
        <textarea
          id="notes"
          rows={3}
          value={notes}
          placeholder="A piano, a tight staircase, a date that cannot move."
          onChange={(event) => onNotes(event.target.value)}
        />
      </Field>
    </>
  );
}

function StepContact({ data, errors, onChange }) {
  return (
    <>
      <h1>How should we reach you?</h1>
      <div className="form stack-fields">
        <Field id="quote-name" label="Full name" error={errors.name}>
          <input id="quote-name" autoComplete="name" value={data.name} onChange={(event) => onChange("name", event.target.value)} />
        </Field>
        <Field id="quote-phone" label="Phone" error={errors.phone}>
          <input id="quote-phone" type="tel" autoComplete="tel" value={data.phone} onChange={(event) => onChange("phone", event.target.value)} />
        </Field>
        <Field id="quote-email" label="Email" error={errors.email}>
          <input id="quote-email" type="email" autoComplete="email" value={data.email} onChange={(event) => onChange("email", event.target.value)} />
        </Field>
      </div>
    </>
  );
}

function StepDate({ data, errors, onChange }) {
  return (
    <>
      <h1>When would you like to move?</h1>
      <div className="form stack-fields">
        <Field id="move-date" label="Preferred moving date" error={errors.date}>
          <input
            id="move-date"
            type="date"
            min={todayISO()}
            value={data.date}
            onChange={(event) => onChange("date", event.target.value)}
          />
        </Field>
        <Field id="flexibility" label="Flexibility" error="">
          <select
            id="flexibility"
            value={data.flexibility}
            onChange={(event) => onChange("flexibility", event.target.value)}
          >
            <option>Fixed date</option>
            <option>A few days either side</option>
            <option>Anytime that month</option>
          </select>
        </Field>
      </div>
    </>
  );
}

function StepReview({ data, move }) {
  return (
    <>
      <h1>Your request is ready.</h1>
      <p className="lede">Read it once. When you send it, a move captain will prepare the quote with you.</p>
      <dl className="summary">
        <div>
          <dt>Move</dt>
          <dd>{move?.title}</dd>
        </div>
        <div>
          <dt>Route</dt>
          <dd>
            {data.from} to {data.to}
          </dd>
        </div>
        <div>
          <dt>Details</dt>
          <dd>{Object.values(data.property).join(" · ")}</dd>
        </div>
        <div>
          <dt>Inventory</dt>
          <dd>{data.inventory.join(", ")}</dd>
        </div>
        <div>
          <dt>Contact</dt>
          <dd>
            {data.name}
            <br />
            {data.phone}
            <br />
            {data.email}
          </dd>
        </div>
        <div>
          <dt>Date</dt>
          <dd>
            {data.date} · {data.flexibility}
          </dd>
        </div>
      </dl>
    </>
  );
}
