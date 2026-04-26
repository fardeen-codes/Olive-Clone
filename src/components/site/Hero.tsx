import { Apple } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=120&h=120&fit=crop",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop",
];

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-12 px-4 md:px-8 text-center">
      {/* Trust badge */}
      <div className="inline-flex items-center gap-3 mb-7 reveal">
        <div className="flex -space-x-2">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-9 h-9 rounded-full border-2 border-mint object-cover"
              loading="lazy"
            />
          ))}
          <div className="w-9 h-9 rounded-full border-2 border-mint bg-forest text-mint text-[11px] font-semibold flex items-center justify-center">
            3k+
          </div>
        </div>
        <p className="text-sm text-forest/70 font-display">Trusted by thousands of healthy families</p>
      </div>

      <h1 style={{ fontFamily: 'inherit' }} className="font-display font-semibold text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.035em] text-forest text-balance reveal">
        The Safest Way to <br className="hidden sm:block" />
        Shop for Groceries
      </h1>

      <p className="mt-7 max-w-2xl mx-auto text-[17px] md:text-lg text-forest/65 leading-relaxed font-display reveal">
        Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients
        from Your Family's Diet and Get Expert-Backed Food Insights
      </p>

      <div className="mt-9 flex justify-center reveal">
        <a
          href="#download"
          className="inline-flex items-center gap-3 rounded-full bg-forest text-mint px-7 py-4 text-base font-display hover:bg-forest/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-forest/15"
        >
          <Apple className="w-5 h-5 fill-mint" /> Download for iOS
        </a>
      </div>

      <PhoneMock />
    </section>
  );
}

function PhoneMock() {
  const sideCards = [
    { src: "/olive/product-1.png", className: "hidden md:block absolute left-[8%] top-[18%] w-28 h-28 lg:w-36 lg:h-36 rotate-[-10deg]" },
    { src: "/olive/product-2.png", className: "hidden md:block absolute left-[18%] top-[6%] w-24 h-24 lg:w-32 lg:h-32 rotate-[-4deg]" },
    { src: "/olive/product-9.png", className: "hidden md:block absolute right-[18%] top-[6%] w-24 h-24 lg:w-32 lg:h-32 rotate-[4deg]" },
    { src: "/olive/product-6.png", className: "hidden md:block absolute right-[8%] top-[18%] w-28 h-28 lg:w-36 lg:h-36 rotate-[10deg]" },
  ];

  return (
    <div className="mt-16 relative mx-auto max-w-5xl reveal">
      {sideCards.map((c, i) => (
        <div key={i} className={`${c.className} rounded-3xl bg-white shadow-xl ring-soft overflow-hidden`}>
          <img src={c.src} alt="" className="w-full h-full object-cover opacity-40" loading="lazy" />
        </div>
      ))}

      <div className="relative mx-auto w-[300px] md:w-[320px] aspect-[9/19] rounded-[3rem] bg-[#E5E7E5] p-2.5 shadow-[0_40px_80px_-30px_rgba(31,56,36,0.35)]">
        <div className="w-full h-full rounded-[2.5rem] bg-mint overflow-hidden relative">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />

          {/* Detail screen image as faithful replica */}
          <img
            src="/olive/product-5-details.png"
            alt="San Pellegrino Sparkling Natural Mineral Water"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
