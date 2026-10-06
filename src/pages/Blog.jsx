import { JournalCard } from "../components/home/Hero.jsx";
import { posts } from "../data/blogPosts.js";
import { usePageMeta } from "../utils/usePageMeta.js";

export default function Blog() {
  usePageMeta(
    "Moving Journal | SafarSetu",
    "Practical notes on moving house, packing, office relocation, vehicles and storage in India.",
  );
  const [feature, ...rest] = posts;

  return (
    <div className="page-offset">
      <section className="section journal">
        <div className="container">
          <p className="eyebrow">Moving journal</p>
          <h1>Notes for a move that still feels like yours.</h1>
          <p className="lede journal-intro">
            Checklists, city advice and the small decisions that make a household or an office arrive intact.
          </p>
          <JournalCard post={feature} featured />
          <div className="blog-grid">
            {rest.map((post) => (
              <JournalCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
