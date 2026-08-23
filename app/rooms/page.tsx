import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/lib/data";
import {
  Clock3,
  Coffee,
  BadgeInfo,
} from "lucide-react";
export const metadata = {
  title: "Rooms & Suites | La Damai Resorts",
  description:
    "Browse luxury rooms and suites at La Damai Resorts in Chikmagalur, including couple suites, family cottages, and estate-view stays.",
  alternates: {
    canonical: "/rooms",
  },
};

export default function RoomsPage() {
  return (
    <>
      <Sidebar />
      <PageHero
        title="Rooms & Suites"
        subtitle="Choose Your Sanctuary"
        image="/room_pics/IMG_9364.PNG"
      />

      <section className="bg-porcelain py-1 md:py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {rooms.map((room) => (
    <RoomCard key={room.id} room={room} />
  ))}
  {/* WhatsApp CTA Card */}
<div className="h-[560px] bg-palm text-vanilla flex flex-col items-center justify-center p-10 text-center transition-shadow duration-300 hover:shadow-xl">
  <div className="mb-8">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-14 h-14 fill-current mx-auto"
    >
      <path d="M16.003 3C8.822 3 3 8.822 3 16.003c0 2.535.742 4.999 2.146 7.107L3 29l6.08-2.111A13 13 0 0016.003 29C23.182 29 29 23.178 29 15.997 29 8.822 23.182 3 16.003 3zm0 23.666a10.6 10.6 0 01-5.394-1.48l-.386-.23-3.607 1.253 1.178-3.52-.25-.397a10.62 10.62 0 1118.08-6.295 10.62 10.62 0 01-10.62 10.669zm5.82-7.925c-.319-.16-1.885-.93-2.177-1.037-.292-.106-.505-.16-.718.16-.213.319-.824 1.037-1.01 1.25-.186.213-.372.24-.691.08-.319-.16-1.35-.498-2.57-1.588-.95-.847-1.59-1.893-1.776-2.212-.186-.319-.02-.492.14-.652.144-.143.319-.372.479-.558.16-.186.213-.319.319-.532.106-.213.053-.399-.027-.558-.08-.16-.718-1.732-.984-2.37-.26-.624-.524-.54-.718-.55h-.612c-.213 0-.558.08-.85.399-.292.319-1.116 1.09-1.116 2.662 0 1.572 1.143 3.09 1.302 3.303.16.213 2.252 3.44 5.455 4.822.762.33 1.356.527 1.819.674.764.243 1.46.209 2.01.127.613-.091 1.885-.77 2.15-1.514.266-.744.266-1.382.186-1.515-.08-.133-.292-.213-.611-.372z" />
    </svg>
  </div>

  <h3 className="font-display text-3xl mb-5 leading-snug">
    Confused which room
    <br />
    to book?
  </h3>

  <p className="text-vanilla/80 leading-relaxed max-w-xs mb-10">
    Tell us your preferences and we'll help you choose the perfect stay.
  </p>

  <a
    href="https://wa.me/919900064697?text=Hi%20La%20Damai!%20I'm%20confused%20about%20which%20room%20to%20book.%20Can%20you%20help%20me%20choose?"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center uppercase tracking-[0.25em] text-sm border border-vanilla px-8 py-4 transition-all duration-300 hover:bg-vanilla hover:text-palm"
  >
    Chat on WhatsApp
  </a>
</div>
  
</div>
        </div>
      </section>
      <section className="bg-palm py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-10">

    <div className="text-center mb-14">
      <h2 className="font-display text-3xl md:text-5xl text-porcelain">
        Stay Essentials
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Check-in / Check-out */}
      <div className="rounded-xl bg-vanilla border border-palm/15 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center gap-4 mb-7">
          <div className="w-14 h-14 rounded-full border border-palm/20 flex items-center justify-center">
            <Clock3
              size={24}
              strokeWidth={1.5}
              className="text-palm"
            />
          </div>

          <h3 className="font-display text-2xl text-palm">
            Check-in / Check-out
          </h3>
        </div>

        <ul className="space-y-4 text-palm/80 leading-relaxed">
          <li>• Check-in: 2:00 PM onwards</li>
          <li>• Check-out: 11:00 AM</li>
          <li>• Early check-in subject to availability</li>
          <li>• Late check-out subject to availability</li>
        </ul>
      </div>

      {/* Inclusions */}
      <div className="rounded-xl bg-vanilla border border-palm/15 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center gap-4 mb-7">
          <div className="w-14 h-14 rounded-full border border-palm/20 flex items-center justify-center">
            <Coffee
              size={24}
              strokeWidth={1.5}
              className="text-palm"
            />
          </div>

          <h3 className="font-display text-2xl text-palm">
            Inclusions
          </h3>
        </div>

        <ul className="space-y-4 text-palm/80 leading-relaxed">
          <li>• Complimentary breakfast</li>
          <li>• Welcome drink on arrival</li>
          <li>• Complimentary Wi-Fi</li>
          <li>• Parking included</li>
        </ul>
      </div>

      {/* Cancellation Policy */}
      <div className="rounded-xl bg-vanilla border border-palm/15 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center gap-4 mb-7">
          <div className="w-14 h-14 rounded-full border border-palm/20 flex items-center justify-center">
            <BadgeInfo
              size={24}
              strokeWidth={1.5}
              className="text-palm"
            />
          </div>

          <h3 className="font-display text-2xl text-palm">
            Cancellation Policy
          </h3>
        </div>

        <ul className="space-y-4 text-palm/80 leading-relaxed">
          <li>• Free cancellation up to 14 days before arrival</li>
          <li>• 100% booking amount charged if cancelled within 14 days of arrival</li>
          <li>• Please contact us for special circumstances</li>
        </ul>
      </div>

    </div>
  </div>
</section>
      
      

      <Footer />
    </>
  );
}
