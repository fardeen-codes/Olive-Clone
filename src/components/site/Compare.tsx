import { Check, X, Apple } from "lucide-react";

const rows = [
  "Detailed Product Breakdown",
  "Comprehensive Water Data",
  "Seed Oil Free Dining Map",
  "Seed Oil Flagging",
  "Certified Lab-Testing Data",
];
const others = ["Yuka", "Bobby", "FoodScan"];

export default function Compare() {
  return (
    <section className="px-4 md:px-8 pb-12">
      <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-forest text-mint p-8 md:p-14 reveal">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
          <h2 className="font-display text-4xl md:text-6xl text-mint text-balance">
            Olive Food Scanner <br /> App vs. The Rest
          </h2>
          <a href="#download" className="inline-flex items-center gap-2 rounded-full bg-mint text-forest px-6 py-3 text-sm font-display hover:bg-mint/90 self-start lg:self-auto">
            <Apple className="w-4 h-4" /> Download for iOS
          </a>
        </div>

        <div className="rounded-3xl border border-mint/15 overflow-hidden">
          <div className="grid grid-cols-5 bg-mint/5 text-sm">
            <div className="col-span-2 p-5 font-display font-medium">Feature</div>
            <div className="p-5 text-center">
              <div className="inline-flex items-center gap-1.5 font-display font-semibold">
                <img src="/olive/wordmark.svg" alt="Olive" className="h-5 w-auto invert brightness-200" />
              </div>
            </div>
            {others.map((o) => (
              <div key={o} className="p-5 text-center text-mint/60 font-display">{o}</div>
            ))}
          </div>

          {rows.map((r, i) => (
            <div key={r} className={`grid grid-cols-5 text-sm ${i % 2 === 0 ? "bg-transparent" : "bg-mint/[0.03]"}`}>
              <div className="col-span-2 p-5 border-t border-mint/10 font-display">{r}</div>
              <div className="p-5 text-center border-t border-mint/10">
                <Check className="w-5 h-5 mx-auto text-leaf" strokeWidth={3} />
              </div>
              {others.map((o, j) => (
                <div key={o} className="p-5 text-center border-t border-mint/10">
                  {j === 0 && i < 2 ? <Check className="w-5 h-5 mx-auto text-mint/40" /> : <X className="w-5 h-5 mx-auto text-mint/30" />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
