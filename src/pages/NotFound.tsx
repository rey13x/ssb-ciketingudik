import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-background py-24">
      <div
        aria-hidden
        className="absolute -left-32 top-1/2 h-2 w-96 -translate-y-1/2 -rotate-12 bg-primary"
      />
      <div className="container relative text-center">
        <div className="font-display text-[10rem] leading-none text-primary sm:text-[16rem]">
          404
        </div>
        <h1 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
          Sepertinya Anda salah ambil arah. Mari kembali ke lapangan utama.
        </p>
        <Button asChild size="lg" variant="default" className="mt-8">
          <Link to="/">
            <ArrowLeft /> Kembali ke Beranda
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
