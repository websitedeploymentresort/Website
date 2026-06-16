import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/lib/data";

export const metadata = {
  title: "Rooms & Suites | La Damai Resort",
};

export default function RoomsPage() {
  return (
    <>
      <Sidebar />
      <PageHero
        title="Rooms & Suites"
        subtitle="Accommodation"
        image="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="bg-porcelain py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-palm text-xs tracking-[0.4em] uppercase mb-4">
              Choose Your Sanctuary
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-coffee mb-6">
              Every Stay, A Retreat
            </h2>
            <p className="text-coffee/70 text-sm md:text-base leading-relaxed">
              From overwater villas to forest canopy lofts, each of our
              accommodations is designed as a private world — spacious,
              serene, and finished with natural materials and bespoke
              furnishings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
