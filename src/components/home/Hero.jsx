import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button.jsx";
import { images } from "../../data/images.js";

const ease = [0.22, 1, 0.36, 1];

const heroSlides = [
  {
    image: images.heroFamily,
    eyebrow: "Packers & movers across India",
    title: (
      <>
        Every Move
        <br />
        Has a <em>Story.</em>
      </>
    ),
    quote: "A home should arrive as carefully as it left.",
  },
  {
    image: images.aboutPeople,
    eyebrow: "A named crew",
    title: (
      <>
        People Who
        <br />
        Treat It as <em>Theirs.</em>
      </>
    ),
    quote: "One captain, one file, and a team that has already walked the rooms.",
  },
  {
    image: images.featuredJourney,
    eyebrow: "The full day",
    title: (
      <>
        From the First
        <br />
        Box to the <em>Last Key.</em>
      </>
    ),
    quote: "Planning, the road and unpacking stay with the same pair of hands.",
  },
  {
    image: images.serviceHousehold,
    eyebrow: "Household care",
    title: (
      <>
        Room by Room,
        <br />
        Never in a <em>Rush.</em>
      </>
    ),
    quote: "The kitchen, the almirah and the puja shelf are packed as they are lived in.",
  },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [slide, setSlide] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  useEffect(() => {
    if (reduce) return undefined;
    const id = window.setInterval(() => {
      setSlide((current) => (current + 1) % heroSlides.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, [reduce, slide]);

  const parent = reduce
    ? {}
    : {
        hidden: {},
        show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
      };
  const child = reduce
    ? {}
    : {
        hidden: { opacity: 0, y: 26 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
      };

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero__media" style={reduce ? undefined : { y }}>
        {heroSlides.map((item, index) => (
          <img
            key={item.image.src}
            src={item.image.src}
            alt={index === slide ? item.image.alt : ""}
            fetchPriority={index === 0 ? "high" : "low"}
            className={index === slide ? "is-active" : undefined}
          />
        ))}
      </motion.div>
      <div className="hero__shade" />
      <motion.div className="container hero__content" initial="hidden" animate="show" variants={parent}>
        <div className="hero__quotes" aria-live="polite">
          <motion.div
            className="hero__quote"
            key={heroSlides[slide].image.src}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
          >
            <p className="eyebrow eyebrow--light">{heroSlides[slide].eyebrow}</p>
            <h1>{heroSlides[slide].title}</h1>
            <p className="hero__lead">{heroSlides[slide].quote}</p>
          </motion.div>
        </div>
        <motion.div className="hero__actions" variants={child}>
          <Button to="/quote" variant="primary">
            Get a Free Quote
          </Button>
          <Button to="/services" variant="light">
            Explore Our Services
          </Button>
        </motion.div>
      </motion.div>
      <a className="hero__scroll" href="#trust">
        Scroll
        <span />
      </a>
      <div className="hero__dots" role="tablist" aria-label="Featured photographs">
        {heroSlides.map((item, index) => (
          <button
            key={item.image.src}
            type="button"
            role="tab"
            className={index === slide ? "is-active" : undefined}
            aria-selected={index === slide}
            aria-label={`Show image ${index + 1} of ${heroSlides.length}`}
            onClick={() => setSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

export function JournalCard({ post, featured = false }) {
  return (
    <article className={featured ? "post-card post-card--feature" : "post-card"}>
      <Link to={`/blog/${post.slug}`} className="post-card__media">
        <img src={post.image.src} alt={post.image.alt} />
      </Link>
      <div className="post-card__body">
        <p className="meta">
          <span>{post.category}</span>
          <span>{post.displayDate}</span>
        </p>
        <h3>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="text-link">
          Read Article
        </Link>
      </div>
    </article>
  );
}
