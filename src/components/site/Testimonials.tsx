const items = [
  {
    name: "Megan L.",
    avatar: "/olive/meghan-l.png",
    quote: "Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry.",
  },
  {
    name: "Tina B.",
    avatar: "/olive/tina-b.png",
    quote: "Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy.",
  },
  {
    name: "Lila M.",
    avatar: "/olive/lila-m.png",
    quote: "After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <h2 className="font-display text-4xl md:text-6xl text-forest">Real Mothers, Real Results</h2>
          <p className="mt-5 text-[17px] text-forest/70 font-display">
            Join thousands of satisfied parents who trust Olive to help them make healthier choices for their families.
          </p>
        </div>

        <div className="relative rounded-[2.5rem] overflow-hidden bg-mint-2 p-6 lg:p-10 reveal">
          <div className="aspect-[16/9] md:aspect-[21/8] rounded-3xl overflow-hidden mb-10 bg-leaf/20">
            <img src="/olive/testimonials.png" alt="" className="w-full h-full object-cover" />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {items.map((it) => (
              <figure key={it.name} className="rounded-2xl bg-white p-6 border border-border">
                <blockquote className="text-forest/80 leading-relaxed font-display text-[15px]">
                  "{it.quote}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <img src={it.avatar} alt={it.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                  <span className="font-display font-semibold text-forest">{it.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="#" className="inline-flex items-center gap-2 text-forest font-display underline underline-offset-4 hover:no-underline">
              read all 3,147+ reviews →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
