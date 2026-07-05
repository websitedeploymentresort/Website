import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const foodImages = [
  "/food/food1.jpg",
  "/food/food2.jpg",
  "/food/food3.jpg",
  "/food/food4.jpg",
  "/food/food5.jpg",
  "/food/food6.jpg",
];

export const metadata = {
  title: "Dining | La Damai Resort",
};

export default function DiningPage() {
  return (
    <>
      <Sidebar />

      <PageHero
        title="Dining"
        subtitle="A Multi-Cuisine Culinary Experience"
        image="/food/hero.jpg"
      />

      <section className="bg-porcelain py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="max-w-4xl mb-16">
            <p className="text-palm text-xs tracking-[0.4em] uppercase mb-4">
              Restaurant
            </p>

            <h2 className="font-display text-3xl md:text-5xl text-coffee mb-8">
              Dining at La Damai
            </h2>

            {/* Highlight Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "🍳 Complimentary Breakfast",
                "🥐 Continental Selection",
                "🍽️ Multi-Cuisine Restaurant",
                "🌿 Nature-View Dining",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-5 py-2 border border-palm/20 bg-palm/5 text-palm rounded-full text-sm"
                >
                  {badge}
                </span>
              ))}
            </div>

            <p className="text-coffee/70 leading-relaxed mb-8 text-lg">
              Every meal at <strong>La Damai</strong> is designed to be a memorable
              part of your stay. Begin your mornings with a generous breakfast
              spread featuring South Indian classics alongside continental
              selections. Throughout the day, enjoy a variety of North Indian,
              South Indian, and Chinese dishes, freshly prepared and served in a
              relaxed setting surrounded by nature. Our restaurant offers a
              thoughtfully curated menu designed to satisfy every palate.
            </p>

            <ul className="grid md:grid-cols-2 gap-y-4 gap-x-12 text-coffee/80">
              <li>• Freshly prepared meals throughout the day</li>
              <li>• South Indian specialties</li>
              <li>• North Indian favourites</li>
              <li>• Chinese cuisine</li>
              <li>• Vegetarian and non-vegetarian options</li>
              <li>• Family-friendly dining atmosphere</li>
              <li>• Scenic views overlooking nature</li>
            </ul>
          </div>

          {/* Food Gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {foodImages.map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden break-inside-avoid rounded-lg group"
                style={{
                  aspectRatio: index % 3 === 0 ? "4/5" : "4/3",
                }}
              >
                <Image
                  src={img}
                  alt={`Food ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-coffee/0 group-hover:bg-coffee/15 transition-colors duration-500" />
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}