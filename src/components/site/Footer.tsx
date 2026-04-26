import { Apple, Check } from "lucide-react";

export default function Footer() {
  return (
    <footer id="download" className="bg-forest text-mint pt-20 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="font-display text-5xl md:text-7xl text-mint text-balance leading-[1.02]">
            Keep your family <br /> safe with Olive
          </h2>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-mint/75 text-sm font-display">
            {["Effortless food scanning", "Peace of mind for parents", "Healthy product recommendations"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-leaf" strokeWidth={3} /> {t}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-mint text-forest px-7 py-4 font-display font-medium hover:-translate-y-0.5 transition-transform"
          >
            <Apple className="w-5 h-5" /> Download for iOS
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-mint/15 pt-12 text-sm">
          <div className="col-span-2">
            <img src="/olive/wordmark.svg" alt="Olive" className="h-10 w-auto mb-4 invert brightness-200" />
            <p className="text-mint/60 max-w-xs font-display">
              The safest way to shop for groceries — built for healthy families.
            </p>
          </div>
          {[
            { h: "Product", l: ["Features", "Pricing", "Restaurants", "Food"] },
            { h: "Company", l: ["About", "Blog", "Careers", "Press"] },
            { h: "Support", l: ["Help center", "Privacy", "Terms", "Contact"] },
          ].map((c) => (
            <div key={c.h}>
              <h4 className="text-mint font-display font-semibold mb-4">{c.h}</h4>
              <ul className="space-y-2 text-mint/70 font-display">
                {c.l.map((x) => (
                  <li key={x}><a href="#" className="hover:text-mint">{x}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-mint/10 text-xs text-mint/50 flex flex-col md:flex-row gap-3 justify-between font-display">
          <p>© {new Date().getFullYear()} Olive. All rights reserved.</p>
          <p>Crafted with care for healthier families.</p>
        </div>
      </div>
    </footer>
  );
}
