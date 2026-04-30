import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ageGroups } from "@/data/programs";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";

export const ProgramsTeaser = () => {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Program Latihan"
            title="Tiga jenjang. Satu jalur menuju puncak."
            description="Setiap kategori usia memiliki kurikulum, beban latihan, dan tujuan yang berbeda — disesuaikan dengan tahap perkembangan atlet muda."
          />
          <Reveal delay={0.1}>
            <Button asChild variant="outline-yellow" size="lg" className="hidden md:inline-flex">
              <Link to="/programs">
                Semua Program <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-8 md:hidden">
          <Button asChild variant="outline-yellow" size="lg" className="w-full">
            <Link to="/programs">
              Semua Program <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
