// import Image from "next/image";
// import { notFound } from "next/navigation";

// import Sidebar from "@/components/Sidebar";
// import Footer from "@/components/Footer";

// import { rooms } from "@/lib/data";
// import { getRoomImages } from "@/lib/roomImages";

// export default async function RoomDetails({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;

//   const room = rooms.find((r) => r.id === id);

//   if (!room) notFound();

//   const images = getRoomImages(id);

//   // Include the hero image at the front of the scroll strip
//   const allImages = [room.image, ...images];

//   return (
//     <>
//       <Sidebar />

//       {/* Horizontal image scroll strip */}
//       <section className="w-full overflow-x-auto scrollbar-hide bg-[#1A1612]">
//         <div className="flex gap-2 p-2" style={{ width: "max-content" }}>
//           {allImages.map((img, i) => (
//             <div
//               key={img}
//               className={`relative shrink-0 ${
//                 i === 0
//                   ? "w-[70vw] h-[70vh]"
//                   : "w-[45vw] h-[70vh]"
//               }`}
//             >
//               <Image
//                 src={img}
//                 fill
//                 alt=""
//                 className="object-cover"
//                 priority={i === 0}
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Room name + description */}
//       <section className="bg-[#F7F4EE] pt-14 pb-0">
//         <div className="max-w-5xl mx-auto px-8">
//           <span className="text-xs tracking-[0.25em] uppercase text-[#8B6F47] block mb-4">
//             Aranya Resort
//           </span>
//           <h1 className="font-display text-5xl md:text-6xl text-[#1A1612] leading-[1.05] mb-6">
//             {room.name}
//           </h1>
//           <div className="w-10 h-px bg-[#8B6F47] mb-6" />
//           <p className="text-[#6B5E54] text-base leading-relaxed max-w-xl">
//             {room.description}
//           </p>
//         </div>
//       </section>

//       {/* Highlights + Amenities side by side */}
//       <section className="bg-[#F7F4EE] py-14">
//         <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-12">
//           {/* Highlights */}
//           <div>
//             <div className="flex items-center gap-5 mb-8">
//               <span className="text-xs tracking-[0.25em] uppercase text-[#8B6F47]">
//                 Highlights
//               </span>
//               <div className="h-px flex-1 bg-[#DDD8CE]" />
//             </div>
//             <ul className="space-y-4">
//               {room.highlights.map((item) => (
//                 <li
//                   key={item}
//                   className="flex items-start gap-3 text-sm text-[#3D3530] leading-relaxed"
//                 >
//                   <span className="mt-[7px] w-1 h-1 rounded-full bg-[#8B6F47] shrink-0" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Amenities */}
//           <div>
//             <div className="flex items-center gap-5 mb-8">
//               <span className="text-xs tracking-[0.25em] uppercase text-[#8B6F47]">
//                 Amenities
//               </span>
//               <div className="h-px flex-1 bg-[#DDD8CE]" />
//             </div>
//             <ul className="space-y-4">
//               {room.amenities.map((item) => (
//                 <li
//                   key={item}
//                   className="flex items-start gap-3 text-sm text-[#3D3530] leading-relaxed"
//                 >
//                   <span className="mt-[7px] w-1 h-1 rounded-full bg-[#8B6F47] shrink-0" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Pricing + Book */}
//       <section className="bg-[#1A1612] py-24">
//         <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
//           {/* Left: price block */}
//           <div>
//             <span className="text-xs tracking-[0.25em] uppercase text-[#8B6F47] block mb-3">
//               Per Night From
//             </span>
//             <p className="font-display text-6xl text-white leading-none mb-4">
//               ₹{room.price.toLocaleString("en-IN")}
//             </p>
//             <div className="flex flex-col gap-1 mt-4">
//               <span className="text-white/40 text-xs">{room.occupancy}</span>
//               <span className="text-white/40 text-xs">{room.mealPlan}</span>
//             </div>
//           </div>

//           {/* Right: CTA */}
//           <a
//             href={`/booking?room=${room.id}`}
//             className="inline-flex items-center justify-center bg-[#2C4A3E] hover:bg-[#3a5e50] text-white text-xs tracking-[0.2em] uppercase px-12 py-5 transition-colors duration-200 w-fit shrink-0"
//           >
//             Book Now
//           </a>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";



import {
  ChevronRight,
  Bath,
  BedDouble,
  Wifi,
  Coffee,
  Snowflake,
  Waves,
  Trees,
  Bird,
  Gamepad2,
  Mountain,
  Home,
  Shirt,
  Sparkles,
  BadgeCheck,
  Droplets,
  ShowerHead,
  Ruler
} from "lucide-react";

const iconMap = {
  bath: Bath,
  bed: BedDouble,
  wifi: Wifi,
  coffee: Coffee,
  snowflake: Snowflake,
  waves: Waves,
  trees: Trees,
  bird: Bird,
  gamepad: Gamepad2,
  mountain: Mountain,
  home: Home,
  shirt: Shirt,
  sparkles: Sparkles,
  badge: BadgeCheck,
  droplets: Droplets,
  shower: ShowerHead,
} as const;

type IconName = keyof typeof iconMap;
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

import { rooms } from "@/lib/data";
import { getRoomImages } from "@/lib/roomImages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const room = rooms.find((item) => item.id === id);

  if (!room) {
    return {
      title: "Room Not Found | La Damai Resort",
      description: "The requested room could not be found.",
    };
  }

  const highlightSummary = room.highlights
    .slice(0, 3)
    .map((item) => item.text.toLowerCase())
    .join(", ");

  return {
    title: `${room.name} | La Damai Resorts`,
    description: `${room.name} at La Damai Resorts in Chikmagalur offers ${room.size.toLowerCase()} with ${highlightSummary} for a luxurious stay in the Western Ghats.`,
    alternates: {
      canonical: `/rooms/${id}`,
    },
    openGraph: {
      title: `${room.name} | La Damai Resorts`,
      description: `${room.name} at La Damai Resorts in Chikmagalur offers a premium stay with scenic views and luxury amenities.`,
      url: `https://www.damairesorts.com/rooms/${id}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${room.name} | La Damai Resorts`,
      description: `${room.name} at La Damai Resorts in Chikmagalur offers a premium stay with scenic views and luxury amenities.`,
    },
  };
}

export default async function RoomDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

const room = rooms.find((r) => r.id === id);

if (!room) notFound();

// Get the next room in the list
const currentIndex = rooms.findIndex((r) => r.id === id);
const nextRoom = rooms[(currentIndex + 1) % rooms.length];

const images = getRoomImages(id);


  return (
    <>
      <Sidebar />

      <main className="bg-porcelain">

        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-24">

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-20">

            {/* ================= LEFT COLUMN ================= */}

            <div>

              <span className="text-palm text-xs tracking-[0.35em] uppercase">
                La Damai Resort
              </span>

              <h1 className="font-display text-5xl lg:text-6xl text-coffee mt-5 mb-8 leading-tight">
                {room.name}
              </h1>

              <div className="w-14 h-px bg-palm mb-8" />

              <p className="text-coffee/70 leading-8 text-lg mb-16 max-w-2xl">
                {room.description}
              </p>

              {/* ================= Highlights ================= */}

              <div className="mb-20">

                <div className="flex items-center gap-5 mb-8">

                  <span className="text-xs uppercase tracking-[0.35em] text-palm whitespace-nowrap">
                    Highlights
                  </span>

                  <div className="flex-1 h-px bg-coffee/15" />

                </div>

                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">

  {/* Room Area */}
  <div className="flex items-center gap-3">
    <Ruler size={18} className="text-palm shrink-0" />
    <span className="text-coffee/80">
      {room.area}
    </span>
  </div>

  {room.highlights.map((item) => {
    const Icon = iconMap[item.icon as IconName];

    return (
      <div
        key={item.text}
        className="flex items-center gap-3"
      >
        <Icon size={18} className="text-palm shrink-0" />

        <span className="text-coffee/80">
          {item.text}
        </span>
      </div>
    );
  })}

</div>

              </div>

              {/* ================= Amenities ================= */}

              <div className="mb-20">

                <div className="flex items-center gap-5 mb-8">

                  <span className="text-xs uppercase tracking-[0.35em] text-palm whitespace-nowrap">
                    Amenities
                  </span>

                  <div className="flex-1 h-px bg-coffee/15" />

                </div>

                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">

                  {room.amenities.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];

              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3"
                >
                  <Icon size={18} className="text-palm shrink-0" />
              
                  <span className="text-coffee/80">
                    {item.text}
                  </span>
                </div>
              );
            })}

                </div>

              </div>

              {/* ================= Pricing ================= */}

              <div className="border-t border-coffee/10 pt-14">

                <span className="text-xs uppercase tracking-[0.35em] text-palm block mb-5">
                </span>

                {/* <div className="flex items-end gap-3 mb-6">
                  <h2 className="font-display text-6xl text-coffee leading-none">
                    ₹{room.price.toLocaleString("en-IN")}
                  </h2>
                          
                  <span className="text-sm md:text-base text-coffee/60 mb-1">
                    + taxes
                  </span>
                </div> */}

            

                <Link
                  href={"https://bookingengine.stayflexi.com/?hotel_id=38902"}
                  className="inline-flex items-center justify-center bg-palm hover:bg-coffee text-vanilla px-12 py-5 uppercase tracking-[0.25em] text-xs transition-colors duration-300"
                >
                  Book Now
                </Link>

              </div>

            </div>

            {/* ================= RIGHT COLUMN ================= */}

            <div className="lg:sticky lg:top-28 self-start">

  <div className="grid grid-cols-2 gap-3">

    {images.map((img, index) => (

      <div
        key={index}
        className={`relative overflow-hidden rounded-md group ${
          index % 4 === 0
            ? "aspect-[4/5]"
            : index % 4 === 1
            ? "aspect-square"
            : index % 4 === 2
            ? "aspect-[3/4]"
            : "aspect-[5/4]"
        }`}
      >
        <Image
          src={img}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-coffee/0 group-hover:bg-coffee/20 transition duration-500" />

      </div>

    ))}

  </div>

</div>
          </div>

        </section>
      


      </main>
      <Link
  href={`/rooms/${nextRoom.id}`}
  aria-label={`View ${nextRoom.name}`}
  className="fixed right-5 top-1/2 -translate-y-1/2 z-50 group"
>
  <div className="relative">

    {/* Tooltip */}
    <div className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-coffee text-vanilla px-4 py-2 text-xs tracking-[0.18em] uppercase opacity-0 translate-x-3 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
      View Next Room
      <br />
      <span className="tracking-normal normal-case text-vanilla/80">
        {nextRoom.name}
      </span>
    </div>

    {/* Arrow */}
    <div className="w-11 h-11 rounded-full bg-palm border border-vanilla/20 flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-coffee hover:scale-110">
      <ChevronRight
        size={22}
        strokeWidth={1.75}
        className="text-vanilla transition-transform duration-300 group-hover:translate-x-1"
      />
    </div>

  </div>
</Link>

      <Footer />
    </>
  );
}

