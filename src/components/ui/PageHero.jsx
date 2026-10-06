export default function PageHero({ image, eyebrow, title, lede }) {
  return (
    <section className="page-hero">
      <div className="page-hero__media">
        <img src={image.src} alt={image.alt} />
      </div>
      <div className="page-hero__shade" />
      <div className="container page-hero__content">
        {eyebrow ? <p className="eyebrow eyebrow--light">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {lede ? <p className="lede lede--light">{lede}</p> : null}
      </div>
    </section>
  );
}
