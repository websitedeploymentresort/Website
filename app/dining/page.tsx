import fs from "fs";
import path from "path";
import Image from "next/image";

import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const foodDir = path.join(process.cwd(), "public", "food");

const foodImages = fs
  .readdirSync(foodDir)
  .filter((file) => /\.(png|jpg|jpeg|webp|avif)$/i.test(file))
  .sort()
  .map((file) => `/food/${file}`);

const heroImage = foodImages[0];
const galleryImages = foodImages.slice(1);

const badges = [
  { icon: "🍳", label: "Complimentary Breakfast" },
  { icon: "🥐", label: "Continental Selection" },
  { icon: "🍽️", label: "Multi-Cuisine Restaurant" },
  { icon: "🌿", label: "Nature-View Dining" },
];

const menuItems = [
  "Freshly prepared meals throughout the day",
  "South Indian specialties",
  "North Indian favourites",
  "Chinese cuisine",
  "Vegetarian and non-vegetarian options",
  "Family-friendly dining atmosphere",
  "Scenic views overlooking nature",
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
        image={heroImage}
      />

      {/* Main content */}
      <section className="bg-[#F7F4EE] py-24">
        <div className="max-w-5xl mx-auto px-8">

          {/* Eyebrow + title */}
          <span className="text-xs tracking-[0.3em] uppercase text-[#8B6F47] block mb-5">
            Restaurant
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-[#1A1612] leading-[1.05] mb-4">
            Dining at La Damai
          </h2>
          <p className="text-[#8B6F47] text-lg font-light tracking-wide mb-8">
            A Multi-Cuisine Culinary Experience
          </p>
          <div className="w-10 h-px bg-[#8B6F47] mb-10" />

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-12">
            {badges.map(({ icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#8B6F47]/25 bg-white text-[#3D3530] text-sm rounded-full"
              >
                <span>{icon}</span>
                {label}
              </span>
            ))}
          </div>

          {/* Description + menu — two columns */}
          <div className="grid md:grid-cols-[3fr_2fr] gap-14 items-start">

            {/* Left: full description */}
            <div>
              <p className="text-[#3D3530] text-base leading-[1.85] mb-0">
                Every meal at <strong className="font-semibold text-[#1A1612]">La Damai</strong> is
                designed to be a memorable part of your stay. Begin your mornings
                with a generous breakfast spread featuring South Indian classics
                alongside continental selections. Throughout the day, enjoy a
                variety of North Indian, South Indian, and Chinese dishes, freshly
                prepared and served in a relaxed setting surrounded by nature. Our
                restaurant offers a thoughtfully curated menu designed to satisfy
                every palate.
              </p>
            </div>

            {/* Right: menu list */}
            <div className="bg-white border border-[#DDD8CE] px-8 py-8">
              <span className="text-xs tracking-[0.25em] uppercase text-[#8B6F47] block mb-6">
                On the Menu
              </span>
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#3D3530] leading-relaxed"
                  >
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-[#8B6F47] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#1A1612] py-3 px-3">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
          {galleryImages.map((img, i) => (
            <div
              key={img}
              className="relative overflow-hidden break-inside-avoid group"
              style={{
                aspectRatio: i % 5 === 0 ? "3/4" : i % 3 === 0 ? "4/3" : "1/1",
              }}
            >
              <Image
                src={img}
                alt={`Dining at La Damai — ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#F7F4EE] py-16 text-center">
        <span className="text-xs tracking-[0.3em] uppercase text-[#8B6F47]">
          Complimentary breakfast included with every room
        </span>
      </section>

      <Footer />
    </>
  );
}
