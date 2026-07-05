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
              src="/room_pics/IMG_9387.PNG"
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
              Nestled amidst the lush coffee estates of Chikmagalur, La Damai was created
              as a peaceful escape where guests can slow down, reconnect with nature, and
              experience the warmth of genuine hospitality in an intimate setting.
            </p>

            <p className="text-coffee/70 leading-relaxed text-sm md:text-base mb-5">
              Every villa has been carefully designed to blend contemporary comfort with
              the surrounding landscape, offering elegant interiors, modern amenities, and
              uninterrupted views that celebrate the beauty of the Western Ghats.
            </p>

            <p className="text-coffee/70 leading-relaxed text-sm md:text-base">
              With just five exclusive villas, La Damai offers a level of privacy and
              personalized service that larger resorts cannot match, ensuring every stay
              feels relaxed, exclusive, and truly memorable.
            </p>
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
                From eco-friendly amenities to thoughtfully chosen materials, over 80% of the products used throughout La Damai are biodegradable, reflecting our commitment to responsible hospitality.
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
