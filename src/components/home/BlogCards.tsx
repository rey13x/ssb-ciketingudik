import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Reveal } from "@/components/common/Reveal";

export const BlogCards = () => {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16 text-center">
            <div className="text-xs font-bold uppercase tracking-[0.25em] opacity-70">
              Artikel & Berita
            </div>
            <h2 className="mt-3 font-display text-4xl leading-[0.95] tracking-tight md:text-5xl">
              Baca Artikel Terbaru
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Kumpulan informasi, tips, dan cerita menarik dari SSB Ciketing Udik
            </p>
          </div>
        </Reveal>

        {/* Blog Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.07}>
              <Link
                to={`/blog/${post.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.title}
                    crossOrigin="anonymous"
                    loading="lazy"
                    className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 inline-block rounded bg-background px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl leading-tight tracking-tight text-foreground transition-smooth group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-smooth group-hover:text-primary">
                    Baca artikel
                    <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
