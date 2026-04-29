import { useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Reveal } from "@/components/common/Reveal";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

const filters = ["Semua", "Latihan", "Pertandingan", "Acara"] as const;
type Filter = (typeof filters)[number];

const Activities = () => {
  const [active, setActive] = useState<Filter>("Semua");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const items = useMemo(() => {
    if (active === "Semua") return galleryItems;
    return galleryItems.filter((g) => g.category === active);
  }, [active]);

  // Handle image load errors with fallback
  const handleImageError = useCallback((itemId: string, src: string) => {
    setFailedImages((prev) => {
      const updated = new Set(prev);
      updated.add(itemId);
      return updated;
    });
    
    // Try PNG fallback if JPEG failed
    const fallbackSrc = src.replace('.jpeg', '.png');
    if (src !== fallbackSrc) {
      const img = new Image();
      img.src = fallbackSrc;
      img.onerror = () => {
        console.warn(`Failed to load image: ${fallbackSrc}`);
      };
    }
  }, []);

  // Get image source with fallback
  const getImageSrc = useCallback((item: GalleryItem): string => {
    if (failedImages.has(item.id) && item.src.includes('.jpeg')) {
      return item.src.replace('.jpeg', '.png');
    }
    return item.src;
  }, [failedImages]);

  return (
    <>
      <PageHeader
        eyebrow="Galeri Aktivitas"
        title="Setiap momen, setiap perjuangan."
        description="Latihan, pertandingan, dan acara — abadikan setiap langkah perjalanan kami menuju lapangan hijau yang lebih besar."
        breadcrumb={[
          { label: "Beranda", to: "/" },
          { label: "Galeri" },
        ]}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="container">
          {/* Filter tabs */}
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={cn(
                    "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-smooth",
                    active === f
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {active === f && (
                    <motion.span
                      layoutId="active-filter"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{f}</span>
                </button>
              ))}
              <div className="ml-auto self-center text-xs uppercase tracking-wider text-muted-foreground">
                {items.length} foto
              </div>
            </div>
          </Reveal>

          {/* Gallery grid */}
          <div className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[260px] lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {items.map((item, i) => (
                <motion.button
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                  onClick={() => setLightbox(item)}
                  className={cn(
                    "group relative overflow-hidden rounded-xl bg-secondary text-left",
                    item.span === "tall" && "row-span-2",
                    item.span === "wide" && "col-span-2"
                  )}
                >
                  <img
                    src={getImageSrc(item)}
                    alt={item.caption}
                    crossOrigin="anonymous"
                    loading="lazy"
                    onError={() => handleImageError(item.id, item.src)}
                    className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 transition-smooth group-hover:bg-foreground/40" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition-smooth group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-block rounded bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                      {item.category}
                    </span>
                    <p className="mt-2 text-sm font-semibold text-background">
                      {item.caption}
                    </p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-5xl"
            >
              <img
                src={getImageSrc(lightbox)}
                alt={lightbox.caption}
                crossOrigin="anonymous"
                onError={() => handleImageError(lightbox.id, lightbox.src)}
                className="max-h-[80vh] w-auto rounded-xl object-contain"
              />
              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-sm text-background">{lightbox.caption}</p>
                <span className="rounded bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  {lightbox.category}
                </span>
              </div>
              <button
                onClick={() => setLightbox(null)}
                aria-label="Tutup"
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-smooth hover:bg-primary"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Activities;
