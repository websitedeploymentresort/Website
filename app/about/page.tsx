import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Leaf, Award, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "About La Damai Resorts | Luxury Resort in Chikmagalur",
  description:
    "Discover La Damai Resorts, a luxury plantation retreat in Chikmagalur offering privacy, nature, and personalized hospitality in the Western Ghats.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Sidebar />
      {/* <PageHero
        title="About La Damai"
        subtitle="Our Story"
        image="https://images.unsplash.com/photo-1582719201676-3a4b5b8a3a37?q=80&w=2000&auto=format&fit=crop"
      /> */}

      {/* Story section */}
      <section className="bg-porcelain py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[520px] order-2 lg:order-1">
            <Image
              src="/room_pics/about_us.png"
              alt="La Damai Resort grounds"
              fill
              className="object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 hidden md:block border border-palm" />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl md:text-5xl mb-6 text-coffee">
              Born From A Love Of Untouched Places
            </h2>
            <p className="text-coffee/70 leading-relaxed text-sm md:text-base mb-5">
            Nestled amidst the mist-covered coffee estates of Chikmagalur, La Damai is a sanctuary where nature, luxury, and tranquility exist in perfect harmony. Conceived as an intimate retreat, it invites guests to slow down, reconnect with what truly matters, and embrace the gentle rhythm of the Western Ghats.
            </p>

            <p className="text-coffee/70 leading-relaxed text-sm md:text-base mb-5">
            Every villa has been thoughtfully crafted to blend contemporary elegance with the surrounding landscape. Spacious interiors, curated comforts, private outdoor spaces, and sweeping estate views create an experience that feels both refined and deeply connected to nature.</p>

            <p className="text-coffee/70 leading-relaxed text-sm md:text-base">
            With only five exclusive villas, La Damai offers an uncommon sense of privacy and personalized hospitality. Every stay is carefully tailored, allowing each guest to experience the warmth of heartfelt service, the serenity of the hills, and moments that linger long after the journey ends.
            </p>
            <br></br>
            <div className="mt-6 flex flex-col items-end text-right">
  <p className="mb-2 text-coffee/70 italic">
    — With Love,
  </p>

  <Image
    src="/logo/logo_normal-removebg-preview.png"
    alt="La Damai"
    width={260}
    height={70}
    className="h-auto w-36 md:w-44"
  />
</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-vanilla py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="text-coffee/60 text-xs tracking-[0.4em] uppercase mb-4">
              What We Stand For
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-coffee">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-coffee flex items-center justify-center mb-6">
                <Leaf size={26} strokeWidth={1.5} className="text-vanilla" />
              </div>
              <h3 className="font-display text-xl mb-3 text-coffee">
                Sustainability
              </h3>
              <p className="text-sm text-coffee/70 leading-relaxed max-w-xs">
                We believe that luxury and responsibility can coexist beautifully. From eco-friendly amenities to thoughtfully sourced materials, over 80% of the products used across La Damai are biodegradable, reflecting our commitment to preserving the natural beauty that surrounds us for generations to come.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-coffee flex items-center justify-center mb-6">
                <Award size={26} strokeWidth={1.5} className="text-vanilla" />
              </div>
              <h3 className="font-display text-xl mb-3 text-coffee">
                Excellence
              </h3>
              <p className="text-sm text-coffee/70 leading-relaxed max-w-xs">
                True luxury lies in the details. Every element—from the comfort of our linens and the design of our spaces to the meals we serve and the experiences we curate—is thoughtfully chosen to deliver exceptional quality and timeless elegance.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-coffee flex items-center justify-center mb-6">
                <HeartHandshake size={26} strokeWidth={1.5} className="text-vanilla" />
              </div>
              <h3 className="font-display text-xl mb-3 text-coffee">
                Genuine Hospitality
              </h3>
              <p className="text-sm text-coffee/70 leading-relaxed max-w-xs">
                At La Damai, hospitality is heartfelt and personal. We welcome every guest with warmth, care, and genuine attention, creating meaningful experiences that feel effortless, unhurried, and truly memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
