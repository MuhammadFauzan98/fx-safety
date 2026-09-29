import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "./data";
import { Wordmark } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow ${
        scrolled ? "shadow-card" : ""
      }`}
    >
      <div className="hidden bg-ink text-ink-foreground md:block">
        <div className="section-x flex items-center justify-between gap-4 py-1.5 text-xs">
          <p className="min-w-0 truncate">
            GSTIN: <span className="font-semibold text-highlight">{BUSINESS.gstin}</span>
          </p>
          <p className="shrink-0">
            {BUSINESS.contactPerson} ·{" "}
            <a className="hover:text-highlight" href={`tel:+91${BUSINESS.phones[0]}`}>
              {BUSINESS.phonesDisplay[0]}
            </a>
          </p>
        </div>
      </div>

      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="section-x grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
          <a href="#home" className="min-w-0">
            <Wordmark />
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03] hover:shadow-glow"
            >
              Get a Quote
            </a>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:+91${BUSINESS.phones[0]}`}
              aria-label="Call now"
              className="grid h-10 w-10 shrink-0 place-items-center rounded bg-primary text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-10 w-10 shrink-0 place-items-center rounded border border-border bg-secondary text-foreground"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background lg:hidden">
            <div className="section-x flex flex-col py-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 text-sm font-semibold uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 mb-4 rounded bg-primary py-3 text-center text-sm font-bold uppercase tracking-wide text-primary-foreground"
              >
                Get a Quote
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
