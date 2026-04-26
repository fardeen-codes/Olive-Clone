import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-4 md:px-8 pb-12">
      <div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden relative min-h-[420px] flex items-center justify-center text-center p-10 reveal">
        <img
          src="/olive/showcase.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-forest/20 to-transparent" />
        <div className="relative">
          <h2 className="font-display text-4xl md:text-6xl text-mint text-balance drop-shadow">
            Protect Your Family <br /> From Hidden Toxins
          </h2>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-mint text-forest px-7 py-4 font-display font-medium hover:-translate-y-0.5 transition-transform"
          >
            Sign up for Olive today <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
