import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Reveal } from "@/components/common/Reveal";
import { blogPosts } from "@/data/blog";

const Blog = () => {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHeader
        eyebrow="Blog & Berita"
        title="Cerita dari ruang ganti kami."
        description="Update prestasi, tips latihan, pengumuman penting, dan artikel edukatif untuk siswa dan orang tua."
        breadcrumb={[
          { label: "Beranda", to: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="container">
          {/* Featured post */}
          <Reveal>
            <Link
              to="#"
              className="group grid overflow-hidden rounded-2xl bg-card transition-smooth hover:shadow-elegant lg:grid-cols-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  crossOrigin="anonymous"
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-block rounded bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
                  Unggulan · {featured.category}
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" /> {featured.author}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight text-foreground transition-smooth group-hover:text-primary md:text-4xl lg:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-smooth group-hover:text-primary">
                  Baca selengkapnya
                  <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Posts grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.id} delay={i * 0.07}>
                <Link
                  to="#"
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
    </>
  );
};

export default Blog;
