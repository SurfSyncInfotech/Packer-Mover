import { Link, useParams } from "react-router-dom";
import PageHero from "../components/ui/PageHero.jsx";
import { JournalCard } from "../components/home/Hero.jsx";
import NotFound from "./NotFound.jsx";
import { getPost, relatedPosts } from "../data/blogPosts.js";
import { usePageMeta } from "../utils/usePageMeta.js";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = getPost(slug);

  usePageMeta(
    post ? `${post.title} | SafarSetu Journal` : "Journal | SafarSetu",
    post ? post.excerpt : "SafarSetu moving journal.",
  );

  if (!post) return <NotFound />;

  const related = relatedPosts(post.slug);

  return (
    <>
      <PageHero image={post.image} eyebrow={post.category} title={post.title} lede={post.excerpt} />
      <article className="section prose">
        <div className="container narrow">
          <p className="meta">
            <span>{post.displayDate}</span>
            <span>{post.readTime} read</span>
          </p>
          {post.content.map((block, index) => {
            if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
            if (block.type === "ul") {
              return (
                <ul key={index}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return <p key={index}>{block.text}</p>;
          })}
          <p>
            <Link to="/blog" className="text-link">
              Back to the journal
            </Link>
          </p>
        </div>
      </article>
      <section className="section section--sand">
        <div className="container">
          <h2>Continue reading</h2>
          <div className="blog-grid">
            {related.map((item) => (
              <JournalCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
