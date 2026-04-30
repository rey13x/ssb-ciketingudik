import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import { Logo } from "./Logo";

const footerLinks = {
  Navigasi: [
    { to: "/about", label: "Tentang Kami" },
    { to: "/programs", label: "Program Latihan" },
    { to: "/activities", label: "Galeri" },
    { to: "/blog", label: "Blog" },
  ],
  Program: [
    { to: "/programs#u16", label: "Kategori U16" },
    { to: "/contact", label: "Pendaftaran" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-gradient-subtle">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Mencetak generasi pemain sepak bola muda Indonesia dengan
              pelatihan profesional, disiplin, dan semangat juara.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Sosial media"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-smooth hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2 lg:col-span-2">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-display text-lg tracking-wide text-foreground mb-4">
                  {title}
                </h4>
                <ul className="space-y-2.5 text-sm">
                  {links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="text-muted-foreground transition-smooth hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-display text-lg tracking-wide text-foreground mb-4">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>
                  Jl. Raya Ciketing Udik No. 12,
                  <br />
                  Bantargebang, Bekasi 17152
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href="tel:+6281234567890" className="hover:text-primary transition-smooth">
                  +62 812 3456 7890
                </a>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href="mailto:info@ssbciketingudik.id" className="hover:text-primary transition-smooth">
                  info@ssbciketingudik.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SSB Ciketing Udik. Semua hak dilindungi.</p>
          <p>Dibangun dengan semangat sepak bola Indonesia.</p>
        </div>
      </div>
    </footer>
  );
};
