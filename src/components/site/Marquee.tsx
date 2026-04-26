type Props = { items: string[]; reverse?: boolean; duration?: number; size?: number };

export function ImageMarquee({ items, reverse, duration = 40, size = 160 }: Props) {
  const list = [...items, ...items];
  return (
    <div className="overflow-hidden py-4">
      <div
        className={`marquee-track gap-4 ${reverse ? "marquee-rev" : ""}`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {list.map((src, i) => (
          <div
            key={i}
            className="shrink-0 rounded-3xl bg-white shadow-md overflow-hidden ring-1 ring-black/5"
            style={{ width: size, height: size }}
          >
            <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TagMarquee({
  items,
  variant = "default",
  reverse,
  duration = 35,
}: {
  items: string[];
  variant?: "default" | "good" | "bad";
  reverse?: boolean;
  duration?: number;
}) {
  const list = [...items, ...items];
  const cls =
    variant === "good"
      ? "bg-[#E8F2DA] text-forest border-[#C9DDB3]"
      : variant === "bad"
      ? "bg-[#FCC1C1]/40 text-[#7A2E2E] border-[#FCC1C1]"
      : "bg-white text-forest border-border";
  return (
    <div className="overflow-hidden">
      <div
        className={`marquee-track gap-3 py-2 ${reverse ? "marquee-rev" : ""}`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {list.map((t, i) => (
          <span
            key={i}
            className={`shrink-0 px-5 py-2.5 rounded-full border text-sm font-display whitespace-nowrap ${cls}`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
