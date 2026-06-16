import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Leaf, Award, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "About Us | La Damai Resort",
};

export default function AboutPage() {
  return (
    <>
      <Sidebar />
      <PageHero
        title="About La Damai"
        subtitle="Our Story"
        image="https://images.unsplash.com/photo-1582719201676-3a4b5b8a3a37?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Story section */}
      <section className="bg-porcelain py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[520px] order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop"
              alt="La Damai Resort grounds"
              fill
              className="object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 hidden md:block border border-palm" />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-palm text-xs tracking-[0.4em] uppercase mb-4">
              Since 2009
            </p>
            <h2 className="font-display text-3xl md:text-5xl mb-6 text-coffee">
              Born From A Love Of Untouched Places
            </h2>
            <p className="text-coffee/70 leading-relaxed text-sm md:text-base mb-5">
              La Damai began as a quiet promise — to create a retreat that felt
              less like a hotel and more like a private estate, where every
              guest could reconnect with nature without sacrificing an ounce
              of comfort.
            </p>
            <p className="text-coffee/70 leading-relaxed text-sm md:text-base mb-5">
              Over the years, our family of villas, suites and residences has
              grown, but our philosophy remains the same: thoughtful design,
              genuine hospitality, and an unwavering respect for the land we
              call home.
            </p>
            <p className="text-coffee/70 leading-relaxed text-sm md:text-base">
              Today, La Damai welcomes travellers from around the world seeking
              a rare kind of stillness — one found only where the forest meets
              the sea.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-vanilla py-20 md:py-28">
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
                From solar power to reef-safe practices, every initiative is
                designed to protect the ecosystem that surrounds us.
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
                Every detail, from linens to cuisine, is chosen with an
                uncompromising standard of quality and craftsmanship.
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
                Our team treats every guest as a returning friend — warm,
                attentive, and quietly anticipating your every need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
