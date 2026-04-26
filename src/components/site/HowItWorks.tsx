import { ImageMarquee } from "./Marquee";

const products = Array.from({ length: 10 }, (_, i) => `/olive/product-${i + 1}.png`);

const steps = [
  {
    n: "01",
    title: "Scan & Detect",
    body:
      "When you open Olive simply scan the barcode to instantly detect product ingredients. Olive's intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.",
    visual: "barcode" as const,
  },
  {
    n: "02",
    title: "Data Analysis & Validation",
    body:
      "After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess.",
    visual: "marquee" as const,
  },
  {
    n: "03",
    title: "Actionable Insights & Recommendations",
    body:
      "Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family's health & nutrition.",
    visual: "stack" as const,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="flex justify-center mb-4">
            <img src="/olive/title.png" alt="" className="h-10 w-auto" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-forest text-balance">
            How the Olive Food <br /> Scanner App Works
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`grid md:grid-cols-2 gap-10 lg:gap-20 items-center reveal ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="font-display text-leaf text-xl mb-3">{s.n}</div>
                <h3 className="font-display text-3xl md:text-4xl text-forest mb-4">{s.title}</h3>
                <p className="text-forest/70 text-[17px] leading-relaxed font-display">{s.body}</p>
              </div>

              <div className="rounded-3xl bg-mint-2/60 p-6 lg:p-8 border border-border min-h-[320px] flex items-center">
                {s.visual === "barcode" && (
                  <div className="w-full">
                    <img src="/olive/barcode.png" alt="Barcode" className="w-full max-w-sm mx-auto" />
                  </div>
                )}
                {s.visual === "marquee" && (
                  <div className="w-full space-y-4">
                    <ImageMarquee items={products} duration={30} size={120} />
                    <ImageMarquee items={products} reverse duration={36} size={120} />
                  </div>
                )}
                {s.visual === "stack" && (
                  <div className="grid grid-cols-3 gap-3 w-full">
                    {products.slice(0, 9).map((p) => (
                      <div key={p} className="aspect-square rounded-2xl overflow-hidden bg-white shadow-sm">
                        <img src={p} alt="" className="w-full h-full object-cover" loading="lazy" />
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
