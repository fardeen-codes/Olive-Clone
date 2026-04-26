import { ImageMarquee } from "./Marquee";

const products = Array.from({ length: 10 }, (_, i) => `/olive/product-${i + 1}.png`);

export default function ProductMarquee() {
  return (
    <div className="pb-8">
      <ImageMarquee items={products} duration={45} />
    </div>
  );
}
