import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import ProductMarquee from "@/components/site/ProductMarquee";
import HowItWorks from "@/components/site/HowItWorks";
import Benefits from "@/components/site/Benefits";
import Testimonials from "@/components/site/Testimonials";
import Compare from "@/components/site/Compare";
import Pricing from "@/components/site/Pricing";
import CTA from "@/components/site/CTA";
import Independent from "@/components/site/Independent";
import FAQ from "@/components/site/FAQ";
import Footer from "@/components/site/Footer";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Olive — The Safest Way to Shop for Groceries" },
      {
        name: "description",
        content:
          "Use the Olive Food Scanner App to instantly eliminate harmful ingredients from your family's diet and get expert-backed food insights.",
      },
      { property: "og:title", content: "Olive — The Safest Way to Shop for Groceries" },
      {
        property: "og:description",
        content:
          "Scan barcodes, get a holistic ingredient breakdown, and shop with confidence.",
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-white">
      {/* Outer rounded panel like the original */}
      <div className="mt-4 md:mt-6 mb-10 md:mb-16 max-w-[1440px] 2xl:max-w-7xl px-4 md:px-6 mx-auto">
        <div className="relative border border-neutral-200 rounded-3xl bg-mint overflow-hidden">
          <Nav />
          <main>
            <Hero />
            <ProductMarquee />
          </main>
        </div>
      </div>

      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Compare />
      <Pricing />
      <CTA />
      <Independent />
      <FAQ />
      <Footer />
    </div>
  );
}
