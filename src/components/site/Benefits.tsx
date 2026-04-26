import { Apple, Check } from "lucide-react";
import { TagMarquee } from "./Marquee";

const positives = [
  "Cholesterol-Free", "High Fibre", "No MSG", "Organic Ingredients", "Low PFAS",
  "Plant-Based", "Gluten-Free", "Non-GMO", "Rich in Antioxidants", "100% Whole Grain",
];
const negatives = [
  "Artificial Colors", "Sodium Nitrite", "TBHQ", "Monosodium Glutamate",
  "Potassium Sorbate", "BHA", "Carrageenan", "Potassium Bromate",
  "Aspartame", "Saccharin", "Palm Oil", "Sodium Benzoate", "Xanthan Gum",
];

const blocks = [
  {
    title: "Achieve Nutritional Clarity",
    bullets: [
      "Olive breaks down every ingredient into clear, actionable information.",
      "Olive scores products out of 100 based on additives, seedoils, processing level, and detected toxins.",
      "Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes.",
    ],
    visual: "score" as const,
  },
  {
    title: "Proactive Ingredient Filtering",
    bullets: [
      "Olive flags harmful additives and controversial ingredients before they become mainstream concerns.",
      "Keeps you ahead of potential food safety concerns.",
      "Gives busy parents the confidence to make safer food choices every time.",
    ],
    visual: "tags" as const,
  },
  {
    title: "Real Health Outcomes for Your Family",
    bullets: [
      "Empowers parents to feel more in control of their family's health.",
      "Delivers personalized suggestions for healthier food choices.",
      "Promotes long-term well-being through informed, balanced decisions.",
    ],
    visual: "outcome" as const,
  },
];

export default function Benefits() {
  return (
    <section className="py-24 lg:py-32 px-4 md:px-8 bg-mint-2/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14 reveal">
          <h2 className="font-display text-4xl md:text-6xl text-forest text-balance">
            Health Benefits <br /> of Using Olive
          </h2>
          <div className="space-y-6">
            <p className="text-[17px] text-forest/70 font-display">
              Olive proactively flags harmful ingredients and offers personalized recommendations,
              empowering you to make better choices for your family's health.
            </p>
            <a href="#download" className="btn-forest">
              <Apple className="w-4 h-4 fill-mint" /> Download for iOS
            </a>
          </div>
        </div>

        <div className="space-y-6">
          {blocks.map((b) => (
            <div
              key={b.title}
              className="grid lg:grid-cols-2 gap-8 rounded-3xl bg-white p-8 lg:p-12 border border-border reveal"
            >
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-forest mb-6">{b.title}</h3>
                <ul className="space-y-4">
                  {b.bullets.map((t) => (
                    <li key={t} className="flex gap-3 text-forest/75 text-[15px] font-display">
                      <span className="mt-1 w-5 h-5 rounded-full bg-leaf/30 text-forest flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-mint p-6 flex items-center justify-center min-h-[280px]">
                {b.visual === "score" && <ScoreCard />}
                {b.visual === "tags" && (
                  <div className="w-full space-y-2">
                    <TagMarquee items={positives} variant="good" />
                    <TagMarquee items={negatives} variant="bad" reverse />
                  </div>
                )}
                {b.visual === "outcome" && (
                  <div className="grid grid-cols-2 gap-3 w-full">
                    {[
                      ["Less stress", "🌿"],
                      ["Better energy", "⚡"],
                      ["Cleaner pantry", "🥗"],
                      ["Smarter swaps", "✨"],
                    ].map(([t, e]) => (
                      <div key={t} className="rounded-2xl bg-white border border-border p-4">
                        <div className="text-2xl mb-2">{e}</div>
                        <p className="text-sm font-medium text-forest font-display">{t}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScoreCard() {
  return (
    <div className="text-center">
      <img src="/olive/straus.png" alt="" className="w-32 h-32 mx-auto rounded-2xl object-cover mb-3" />
      <p className="font-display text-forest mb-1">Straus Ice Cream</p>
      <div className="font-display text-6xl text-forest leading-none">
        94<span className="text-2xl text-forest/40">/100</span>
      </div>
      <div className="mt-2 text-success font-display font-semibold">Excellent</div>
      <div className="mt-4 flex gap-2 justify-center">
        <span className="px-3 py-1 rounded-full bg-success/15 text-success text-xs font-display">Positives 12</span>
        <span className="px-3 py-1 rounded-full bg-[#FCC1C1]/40 text-[#7A2E2E] text-xs font-display">Negatives 1</span>
      </div>
    </div>
  );
}
