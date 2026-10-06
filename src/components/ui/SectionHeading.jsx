export default function SectionHeading({ eyebrow, title, lede, invert = false, as: Tag = "h2" }) {
  return (
    <div className={invert ? "heading heading--invert" : "heading"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Tag>{title}</Tag>
      {lede ? <p className="lede">{lede}</p> : null}
    </div>
  );
}
