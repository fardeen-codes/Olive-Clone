import { useState } from "react";
import { Plus, Apple } from "lucide-react";

const faqs = [
  { q: "What is the Food Scanner App and how does it work?", a: "Olive uses your phone camera to scan barcodes and instantly returns a holistic ingredient breakdown, score, and safer alternatives — designed by registered holistic health experts." },
  { q: "How does Olive ensure the accuracy of the Food Scanner App results?", a: "Our database is curated by holistic health experts and validated against certified lab-testing data, with regular updates as new research emerges." },
  { q: "Which products can I scan with the Food Scanner App?", a: "Most packaged grocery items in the US — beverages, snacks, dairy, pantry staples and more. Coverage continues to expand based on user requests." },
  { q: "Can the Food Scanner App be customized to my family's dietary needs?", a: "Yes — set preferences like gluten-free, dairy-free, low-sugar, seed-oil-free, and Olive will tailor scores and recommendations." },
  { q: "Is my data secure when I use the Olive?", a: "We never sell your data. Scans are stored securely and used only to improve your personal experience and recommendations." },
  { q: "When will the Android version of the Food Scanner App be available?", a: "Android is on our roadmap — join the waitlist on our site to be notified at launch." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 lg:py-32 px-4 md:px-8 bg-mint-2/40">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <div className="reveal">
          <img src="/olive/olive-faq.png" alt="" className="w-16 h-16 mb-5" />
          <h2 className="font-display text-4xl md:text-5xl text-forest text-balance">
            Frequently Asked <br /> Questions by Parents
          </h2>
          <a href="#download" className="mt-8 btn-forest">
            <Apple className="w-4 h-4 fill-mint" /> Download for iOS
          </a>
        </div>

        <div className="divide-y divide-border reveal">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left py-6"
              >
                <div className="flex items-center justify-between gap-6">
                  <h3 className="font-display text-xl md:text-2xl text-forest">{f.q}</h3>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center text-forest transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-forest text-mint border-forest" : ""
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </div>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-forest/70 leading-relaxed pr-12 font-display text-[15px]">{f.a}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
