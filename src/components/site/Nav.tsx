import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const links = [
  { label: "Solutions", hasMenu: true },
  { label: "Features", hasMenu: false },
  { label: "Pricing", hasMenu: false },
  { label: "Blog", hasMenu: true },
  { label: "Restaurants", hasMenu: false },
  { label: "Food", hasMenu: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="px-4 md:px-8 pt-3 md:pt-5">
        <div className="hidden lg:flex items-center justify-between">
          <Link to="/" aria-label="Olive home" className="flex items-center">
            <img src="/olive/wordmark.svg" alt="Olive" className="h-12 w-auto" />
          </Link>

          <nav className="flex items-center gap-1 text-[15px] text-forest/85 font-display">
            {links.map((l) => (
              <button
                key={l.label}
                className="px-4 py-2 rounded-full hover:bg-forest/5 transition-colors flex items-center gap-1"
              >
                {l.label}
                {l.hasMenu && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="#" className="text-[15px] text-forest/80 hover:text-forest font-display">Sign in</a>
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-forest text-mint px-5 py-2.5 text-[15px] font-display hover:bg-forest/90 transition-all hover:-translate-y-0.5"
            >
              Get Olive
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="lg:hidden flex items-center justify-between">
          <Link to="/" aria-label="Olive home">
            <img src="/olive/wordmark.svg" alt="Olive" className="h-10 w-auto" />
          </Link>
          <div className="flex items-center gap-2">
            <a href="#download" className="rounded-full bg-forest text-mint px-4 py-2 text-sm">Get Olive</a>
            <button className="p-2" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X className="w-6 h-6 text-forest" /> : <Menu className="w-6 h-6 text-forest" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-4 mt-2 rounded-2xl border border-border bg-white p-3 shadow-xl">
          {links.map((l) => (
            <button key={l.label} className="block w-full text-left px-3 py-3 rounded-lg hover:bg-mint-2 font-display text-forest">
              {l.label}
            </button>
          ))}
          <a href="#" className="block px-3 py-3 text-foreground/70">Sign in</a>
        </div>
      )}
    </header>
  );
}
