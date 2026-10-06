export default function PageHero({ eyebrow, title, lede, image, alt }) {
  return (
    <section className="page-hero">
      <div className="page-hero__media">
        <img src={image} alt={alt} />
      </div>
      <div className="page-hero__shade" />
      <div className="container page-hero__content">
        {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
        <h1>{title}</h1>
        {lede && <p className="page-hero__lede">{lede}</p>}
      </div>
    </section>
  )
}
