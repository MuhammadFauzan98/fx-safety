import { useMemo, useState } from "react";
import { Phone, MapPin, MessageCircle, CheckCircle2, ArrowRight, Flame } from "lucide-react";
import heroImg from "@/assets/hero-extinguisher.jpg";
import aboutImg from "@/assets/about-technician.jpg";
import {
  BUSINESS,
  PRODUCTS,
  PRODUCT_CATEGORIES,
  SAFETY_EQUIPMENT,
  SERVICES,
  WHY_US,
  prodPpe,
  whatsappLink,
  type ProductCategory,
} from "./data";
import { ICONS } from "./icons";
import { Logo } from "./Logo";

function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2
        className={`mt-3 text-4xl uppercase sm:text-5xl ${dark ? "text-ink-foreground" : "text-foreground"}`}
      >
        {title} {highlight && <span className="text-highlight">{highlight}</span>}
      </h2>
      <span className="mx-auto mt-4 block h-1 w-20 bg-primary" />
      {subtitle && (
        <p className={`mt-4 text-sm ${dark ? "text-ink-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-fire pt-28 md:pt-36">
      <span className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
      <div className="section-x relative grid items-center gap-10 pb-16 md:grid-cols-[1.1fr_0.9fr] md:pb-24">
        <div className="text-ink-foreground">
          <p className="inline-flex items-center gap-2 rounded-full border border-highlight/40 bg-ink/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-highlight">
            <Flame className="h-3.5 w-3.5" /> Telangana · Fire Safety Specialists
          </p>
          <h1 className="mt-6 text-5xl uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
            Complete <span className="text-highlight">Fire &amp; Protection</span> Safety Solutions
          </h1>
          <p className="mt-5 text-lg font-semibold italic text-ink-foreground/90">
            <span className="text-primary-foreground">Protecting Lives.</span> Securing Dreams.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-foreground/70">
            Extinguishers, alarm and hydrant systems, sprinklers, signage and safety gear — supplied,
            installed and maintained by {BUSINESS.name}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03] hover:shadow-glow"
            >
              Explore Products <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded border border-highlight px-6 py-3 text-sm font-bold uppercase tracking-wide text-highlight transition-colors hover:bg-highlight hover:text-highlight-foreground"
            >
              Request a Quote
            </a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-ink-foreground/15 pt-6">
            {[
              ["7+", "Service Categories"],
              ["AMC", "For All Systems"],
              ["24x7", "Enquiry Support"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-3xl text-highlight">{k}</dt>
                <dd className="text-[0.7rem] uppercase tracking-wide text-ink-foreground/60">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <span className="absolute inset-0 -rotate-3 rounded-2xl border border-highlight/30" />
          <img
            src={heroImg}
            alt="ABC dry powder fire extinguisher"
            width={1024}
            height={1280}
            className="relative w-full rounded-2xl object-cover shadow-glow"
          />
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="bg-background py-20">
      <div className="section-x grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Technician inspecting a fire alarm control panel"
            loading="lazy"
            width={1200}
            height={912}
            className="w-full rounded-2xl object-cover shadow-card"
          />
          <div className="absolute -bottom-6 left-6 rounded-xl bg-primary px-6 py-4 text-primary-foreground shadow-glow">
            <p className="font-display text-3xl leading-none">AMC</p>
            <p className="text-[0.7rem] uppercase tracking-wide">For all fire systems</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">About Us</p>
          <h2 className="mt-3 text-4xl uppercase sm:text-5xl">
            Your Partner In <span className="text-primary">Fire Safety</span>
          </h2>
          <span className="mt-4 block h-1 w-20 bg-highlight" />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {BUSINESS.name} is a fire safety and protection equipment business based in Medchal
            Malkangiri District, Telangana. We supply, install, refill and maintain fire fighting
            equipment and industrial safety gear for factories, warehouses, commercial buildings,
            hospitals, schools and residential projects.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            From a single extinguisher refill to a complete hydrant and alarm installation with an
            annual maintenance contract, our team handles the work end to end — with quality
            products, correct documentation and service you can rely on.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {WHY_US.map((item) => (
              <div
                key={item.title}
                className="flex min-w-0 items-start gap-3 rounded-lg border border-border bg-secondary/60 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <p className="font-display text-xl">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-ink-gradient py-20">
      <div className="section-x">
        <SectionHeading
          dark
          eyebrow="Our Services"
          title="What We"
          highlight="Deliver"
          subtitle="Complete fire protection scope — supply, installation, testing and maintenance."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <article
                key={service.title}
                className="group rounded-xl border border-ink-foreground/10 bg-ink-soft p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground transition-colors group-hover:bg-highlight group-hover:text-highlight-foreground">
                  {Icon && <Icon className="h-6 w-6" />}
                </span>
                <h3 className="mt-5 text-2xl uppercase text-ink-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-foreground/65">
                  {service.description}
                </p>
                <a
                  href={whatsappLink(`Hi, I want details about ${service.title} from FX Safety Solutions.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-highlight hover:gap-3"
                >
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Products() {
  const [active, setActive] = useState<ProductCategory>("All");
  const visible = useMemo(
    () => (active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="products" className="bg-secondary py-20">
      <div className="section-x">
        <SectionHeading
          eyebrow="Our Products"
          title="Fire Fighting"
          highlight="Equipment"
          subtitle="Browse by category and send an enquiry straight to our team on WhatsApp."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-background text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <article
              key={product.name}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-contain p-4 transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">
                  {product.category}
                </p>
                <h3 className="mt-2 text-2xl uppercase">{product.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{product.description}</p>
                <a
                  href={whatsappLink(`Hi, I would like to enquire about ${product.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded bg-ink px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-ink-foreground transition-colors hover:bg-primary"
                >
                  <MessageCircle className="h-4 w-4" /> Enquire Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SafetyEquipment() {
  return (
    <section id="safety-equipment" className="bg-background py-20">
      <div className="section-x">
        <SectionHeading
          eyebrow="Safety Equipment"
          title="Personal"
          highlight="Protection"
          subtitle="Site-ready protective gear for your workforce, available in bulk."
        />
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <img
            src={prodPpe}
            alt="Safety helmet, jacket, shoes, gloves and goggles"
            loading="lazy"
            width={1024}
            height={768}
            className="w-full rounded-2xl border border-border object-contain p-4 shadow-card"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {SAFETY_EQUIPMENT.map((item) => (
              <article
                key={item.name}
                className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <h3 className="text-xl uppercase">{item.name}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">{item.description}</p>
                <a
                  href={whatsappLink(`Hi, I would like to enquire about ${item.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary hover:gap-3"
                >
                  Enquire Now <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="bg-ink py-20">
      <div className="section-x">
        <SectionHeading dark eyebrow="Why Choose Us" title="We Ensure Safety," highlight="You Stay Secured" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <article
                key={item.title}
                className="rounded-xl border-t-4 border-primary bg-ink-soft p-6 text-center transition-transform hover:-translate-y-1"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-highlight text-highlight-foreground">
                  {Icon && <Icon className="h-7 w-7" />}
                </span>
                <h3 className="mt-4 text-xl uppercase text-ink-foreground">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-foreground/65">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AmcBanner() {
  return (
    <section className="relative overflow-hidden bg-fire py-16">
      <span className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-highlight/15 blur-3xl" />
      <div className="section-x relative grid items-center gap-8 text-center md:grid-cols-[auto_1fr_auto] md:text-left">
        <Logo className="mx-auto h-20 w-20 text-highlight" />
        <div>
          <h2 className="text-4xl uppercase leading-tight text-ink-foreground sm:text-5xl">
            We Undertake AMC For <span className="text-highlight">All Fire Systems</span>
          </h2>
          <p className="mt-3 text-sm text-ink-foreground/75">
            Scheduled inspection, refilling, testing and documentation so your premises stay
            compliant all year round.
          </p>
        </div>
        <a
          href="#contact"
          className="mx-auto inline-flex shrink-0 items-center gap-2 rounded bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03] hover:shadow-glow"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}

type ContactField = "name" | "phone" | "email" | "service" | "message";
type ContactErrors = Partial<Record<ContactField, string>>;

export function Contact() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState(false);

  const set = (key: ContactField, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setSent(false);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: ContactErrors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[0-9]{10}$/.test(values.phone.replace(/\D/g, "").slice(-10)))
      next.phone = "Enter a valid 10-digit phone number.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Enter a valid email address.";
    if (!values.service) next.service = "Select the service you need.";
    if (values.message.trim().length < 10) next.message = "Tell us a little more (10+ characters).";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const field =
    "mt-1.5 w-full rounded border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30";

  return (
    <section id="contact" className="bg-secondary py-20">
      <div className="section-x">
        <SectionHeading
          eyebrow="Contact Us"
          title="Talk To"
          highlight="Our Team"
          subtitle="Call, WhatsApp or send an enquiry — we respond quickly."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <div className="rounded-xl bg-ink p-6 text-ink-foreground">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-highlight">
                Contact Person
              </p>
              <p className="mt-1 font-display text-3xl">{BUSINESS.contactPerson}</p>

              <div className="mt-5 space-y-3 text-sm">
                {BUSINESS.phones.map((phone, i) => (
                  <a
                    key={phone}
                    href={`tel:+91${phone}`}
                    className="flex items-center gap-3 hover:text-highlight"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    {BUSINESS.phonesDisplay[i]}
                  </a>
                ))}
                <p className="flex items-start gap-3 text-ink-foreground/80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {BUSINESS.address}
                </p>
                <p className="border-t border-ink-foreground/15 pt-3 text-xs uppercase tracking-wide text-ink-foreground/70">
                  GSTIN: <span className="font-semibold text-highlight">{BUSINESS.gstin}</span>
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:+91${BUSINESS.phones[0]}`}
                  className="inline-flex items-center justify-center gap-2 rounded bg-primary px-4 py-3 text-xs font-bold uppercase tracking-wide text-primary-foreground hover:shadow-glow"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a
                  href={whatsappLink("Hi FX Safety Solutions, I would like a quote.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded border border-highlight px-4 py-3 text-xs font-bold uppercase tracking-wide text-highlight hover:bg-highlight hover:text-highlight-foreground"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <iframe
                title="FX Safety Solutions location"
                src="https://www.google.com/maps?q=Basaragadi%20Village%20Medchal%20Malkajgiri%20Telangana%20501401&output=embed"
                loading="lazy"
                className="h-64 w-full border-0"
              />
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h3 className="text-2xl uppercase">Send An Enquiry</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              This form checks your details on this page only — please call or WhatsApp us to
              confirm your enquiry.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold">
                Name
                <input
                  className={field}
                  value={values.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Your full name"
                />
                {errors.name && <span className="mt-1 block text-xs text-primary">{errors.name}</span>}
              </label>
              <label className="block text-sm font-semibold">
                Phone Number
                <input
                  className={field}
                  value={values.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="10-digit mobile number"
                  inputMode="tel"
                />
                {errors.phone && <span className="mt-1 block text-xs text-primary">{errors.phone}</span>}
              </label>
            </div>

            <label className="mt-4 block text-sm font-semibold">
              Email (optional)
              <input
                className={field}
                value={values.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="you@company.com"
              />
              {errors.email && <span className="mt-1 block text-xs text-primary">{errors.email}</span>}
            </label>

            <label className="mt-4 block text-sm font-semibold">
              Service Required
              <select
                className={field}
                value={values.service}
                onChange={(e) => set("service", e.target.value)}
              >
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Safety Equipment">Safety Equipment</option>
              </select>
              {errors.service && <span className="mt-1 block text-xs text-primary">{errors.service}</span>}
            </label>

            <label className="mt-4 block text-sm font-semibold">
              Message
              <textarea
                rows={4}
                className={field}
                value={values.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder="Tell us what you need, quantity and location"
              />
              {errors.message && (
                <span className="mt-1 block text-xs text-primary">{errors.message}</span>
              )}
            </label>

            <button
              type="submit"
              className="mt-6 w-full rounded bg-primary py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.01] hover:shadow-glow"
            >
              Submit Enquiry
            </button>

            {sent && (
              <p className="mt-4 flex items-start gap-2 rounded border border-border bg-secondary p-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Thank you, {values.name.split(" ")[0]}! Your details look good. Please call or
                WhatsApp us so we can action your enquiry right away.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-ink-foreground">
      <div className="section-x grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <Logo className="h-12 w-12 shrink-0 text-primary" />
            <div className="min-w-0">
              <p className="font-display text-2xl leading-none">
                <span className="text-primary">FX</span> SAFETY
              </p>
              <p className="text-[0.6rem] tracking-[0.3em] text-ink-foreground/60">SOLUTIONS</p>
            </div>
          </div>
          <p className="mt-4 text-sm italic text-highlight">{BUSINESS.tagline}</p>
          <p className="mt-2 text-xs text-ink-foreground/60">{BUSINESS.slogan}</p>
          <div className="mt-4 flex gap-2">
            {["FB", "IG", "IN"].map((s) => (
              <span
                key={s}
                className="grid h-9 w-9 place-items-center rounded border border-ink-foreground/20 text-[0.65rem] font-bold text-ink-foreground/70"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl uppercase text-highlight">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/70">
            {["#home", "#about", "#products", "#services", "#safety-equipment", "#contact"].map(
              (href) => (
                <li key={href}>
                  <a href={href} className="capitalize hover:text-primary">
                    {href.replace("#", "").replace("-", " ")}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-xl uppercase text-highlight">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/70">
            {SERVICES.map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl uppercase text-highlight">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/70">
            <li className="font-semibold text-ink-foreground">{BUSINESS.contactPerson}</li>
            {BUSINESS.phones.map((p, i) => (
              <li key={p}>
                <a href={`tel:+91${p}`} className="hover:text-primary">
                  {BUSINESS.phonesDisplay[i]}
                </a>
              </li>
            ))}
            <li>{BUSINESS.address}</li>
            <li className="text-xs uppercase">GSTIN: {BUSINESS.gstin}</li>
          </ul>
        </div>
      </div>

      <div className="section-x mt-10 border-t border-ink-foreground/15 pt-6 text-center text-xs text-ink-foreground/50">
        © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
      </div>
    </footer>
  );
}
