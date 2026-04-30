import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Mail, MessageCircle, Send, Clock } from "lucide-react";

import { PageHeader } from "@/components/common/PageHeader";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(8, "Nomor telepon tidak valid"),
  ageGroup: z.string().min(1, "Pilih kategori usia"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      ageGroup: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Pesan terkirim!", {
      description: `Terima kasih ${values.name}, tim kami akan menghubungi via WhatsApp dalam 1x24 jam.`,
    });
    form.reset();
    setSubmitting(false);
  };

  const contactItems = [
    {
      icon: MapPin,
      label: "Alamat",
      value: "Jl. Raya Ciketing Udik No. 12, Bantargebang, Bekasi 17152",
      href: "#map",
    },
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 812 3456 7890",
      href: "tel:+6281234567890",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@ssbciketingudik.id",
      href: "mailto:info@ssbciketingudik.id",
    },
    {
      icon: Clock,
      label: "Jam Operasional",
      value: "Senin–Sabtu, 14:00 — 20:00",
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Hubungi Kami"
        title="Mari bicara langsung."
        description="Punya pertanyaan tentang pendaftaran, jadwal, atau kerja sama? Hubungi kami melalui kanal di bawah ini — atau langsung mampir ke lapangan."
        breadcrumb={[
          { label: "Beranda", to: "/" },
          { label: "Kontak" },
        ]}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Info column */}
            <Reveal className="lg:col-span-5">
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                    Informasi kontak
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Tim kami siap merespon paling lambat dalam 1x24 jam pada
                    hari kerja.
                  </p>
                </div>

                <ul className="space-y-4">
                  {contactItems.map((c) => {
                    const Wrapper = c.href ? "a" : "div";
                    return (
                      <li key={c.label}>
                        <Wrapper
                          href={c.href}
                          className="group flex items-start gap-4 rounded-xl bg-card p-5 transition-smooth hover:shadow-card-soft"
                        >
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary transition-bounce group-hover:bg-primary group-hover:text-primary-foreground">
                            <c.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                              {c.label}
                            </div>
                            <div className="mt-1 text-sm font-medium text-foreground">
                              {c.value}
                            </div>
                          </div>
                        </Wrapper>
                      </li>
                    );
                  })}
                </ul>

                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20SSB%20Ciketing%20Udik%2C%20saya%20ingin%20bertanya%20tentang%20pendaftaran."
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle /> Chat via WhatsApp
                  </a>
                </Button>
              </div>
            </Reveal>

            {/* Form column */}
            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="rounded-2xl bg-card p-8 shadow-card-soft sm:p-10">
                <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                  Kirim pesan
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Isi formulir di bawah, kami akan segera membalas.
                </p>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mt-8 space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nama lengkap</FormLabel>
                            <FormControl>
                              <Input placeholder="Budi Santoso" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nomor WhatsApp</FormLabel>
                            <FormControl>
                              <Input placeholder="08xx xxxx xxxx" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="email@contoh.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="ageGroup"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Kategori usia</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Pilih kategori" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="u10">U10 (7–10 tahun)</SelectItem>
                              <SelectItem value="u13">U13 (11–13 tahun)</SelectItem>
                              <SelectItem value="u16">U16 (14–16 tahun)</SelectItem>
                              <SelectItem value="other">Pertanyaan umum</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pesan</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder="Tulis pesan, pertanyaan, atau permintaan trial di sini..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      variant="default"
                      disabled={submitting}
                      className="w-full sm:w-auto"
                    >
                      {submitting ? "Mengirim..." : <>Kirim Pesan <Send /></>}
                    </Button>
                  </form>
                </Form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-foreground/70">
                  Lokasi Lapangan
                </div>
                <h2 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
                  Datang dan rasakan langsung.
                </h2>
              </div>
              <Button asChild variant="outline-yellow">
                <a
                  href="https://maps.google.com/?q=Ciketing+Udik+Bantargebang+Bekasi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Buka di Google Maps
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
              <iframe
                title="Lokasi SSB Ciketing Udik"
                src="https://www.google.com/maps?q=Ciketing+Udik+Bantargebang+Bekasi&output=embed"
                className="h-[420px] w-full grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
