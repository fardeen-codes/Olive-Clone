import { Check } from "lucide-react";

const plans = [
  {
    name: "monthly",
    price: "$14.99",
    suffix: "/monthly",
    features: ["Unlimited Scans", "Unlimited Database Searches", "Comprehensive Lab-Testing Data"],
    highlight: false,
  },
  {
    name: "yearly",
    price: "$69.99",
    strike: "$179.88",
    suffix: "/yearly",
    features: ["Everything in monthly plan", "Get 7 months free", "60% Savings"],
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 lg:py-32 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 reveal">
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-full bg-leaf/30 flex items-center justify-center">
              <span className="text-3xl">🫒</span>
            </div>
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-forest text-balance">
            Healthy Choices, <br /> Honest Pricing
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 reveal">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl p-8 border ${
                p.highlight ? "bg-forest text-mint border-forest" : "bg-white border-border"
              }`}
            >
              <p className={`text-sm uppercase tracking-widest mb-4 font-display ${p.highlight ? "text-leaf" : "text-forest/50"}`}>
                {p.name}
              </p>
              <div className="flex items-end gap-2 mb-6 flex-wrap">
                <span className={`font-display text-5xl ${p.highlight ? "text-mint" : "text-forest"}`}>{p.price}</span>
                {p.strike && <span className="line-through opacity-50 mb-1">{p.strike}</span>}
                <span className="opacity-70 mb-2 font-display">{p.suffix}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 font-display">
                    <Check className={`w-4 h-4 ${p.highlight ? "text-leaf" : "text-forest"}`} strokeWidth={3} />
                    <span className={p.highlight ? "text-mint/90" : "text-forest/80"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`block text-center rounded-full py-3 font-display font-medium transition-all hover:-translate-y-0.5 ${
                  p.highlight
                    ? "bg-leaf text-forest hover:bg-leaf-deep"
                    : "bg-forest text-mint hover:bg-forest/90"
                }`}
              >
                Subscribe
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
