import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import ReviewCard from "@/components/ReviewCard";
import { rooms, reviews } from "@/lib/data";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Home() {
  return (
    <>
      <Sidebar />

      {/* Hero Section */}
      <section className="relative h-[130vh] w-full overflow-hidden">
        <Image
          src="/room_pics/opening_image.PNG"
          alt="La Damai Resort overwater villas at golden hour"
          fill
          priority
          className="object-cover w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee/50 via-coffee/20 to-coffee/60" />

        {/* Logo top right */}
        <div className="absolute top-24 right-6 md:right-12 z-10 text-right">
          <span className="font-display text-vanilla text-2xl md:text-4xl tracking-[0.35em] uppercase block translate-x-6">
          La Damai
        </span>
          <span className="text-porcelain/70 text-[10px] md:text-xs tracking-[0.4em] uppercase mt-1 block">
            Luxury Resort 
          </span>
        </div>

        {/* Dummy text left */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-16 max-w-2xl">
            <p className="text-vanilla font-bold text-xs md:text-sm tracking-[0.4em] uppercase mb-6">
              An Escape Beyond The Ordinary
            </p>
            <h1 className="font-display text-porcelain text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Chikamagaluru's
              <br />
              luxury retreat...
            </h1>
            <p className="text-porcelain/80 font-semibold text-sm md:text-base leading-relaxed mb-10 max-w-md">
              A sanctuary in the hills of Chikmagalur, where silence lingers and mornings arrive gently. In the echos of peace.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="bg-vanilla text-coffee px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-palm transition-colors duration-300"
              >
                Book Your Stay
              </Link>
              <Link
                href="/rooms"
                className="border border-porcelain/40 text-porcelain px-8 py-4 text-xs uppercase tracking-[0.25em] hover:border-vanilla hover:text-vanilla transition-colors duration-300"
              >
                Explore Rooms
              </Link>
            </div>
          </div>
        </div>

        
        
      </section>

      {/* Intro / Solid colour section */}
      <section className="bg-vanilla py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <p className="text-coffee/60 text-xs tracking-[0.4em] uppercase mb-4">
            Welcome To La Damai
          </p>
          <h2 className="font-display text-3xl md:text-5xl mb-6 text-coffee">
            An Exclusive Escape in Chikmagalur
          </h2>
          <p className="text-coffee/70 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
            Set within the serene hills of Chikmagalur, this exclusive sanctuary offers an escape where luxury unfolds in harmony with nature. Surrounded by lush coffee plantations and panoramic mountain vistas, every experience is designed to immerse guests in unparalleled comfort, tranquillity, and timeless elegance.
          </p>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="bg-porcelain py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="text-palm text-xs tracking-[0.4em] uppercase mb-4">
              Accommodation
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-coffee">
              Rooms &amp; Suites
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-coffee border-b border-coffee/30 pb-1 hover:border-palm hover:text-palm transition-colors duration-300"
            >
              View All Accommodations
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-coffee py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="text-vanilla text-xs tracking-[0.4em] uppercase mb-4">
              Testimonials
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-porcelain">
              Words From Our Guests
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-porcelain p-1">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Now CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=2000&auto=format&fit=crop"
          alt="Sunset over resort lagoon"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-coffee/70" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-porcelain mb-6">
            Your Story Begins Here
          </h2>
          <p className="text-porcelain/80 text-sm md:text-base mb-10 leading-relaxed">
            Reserve your dates and let us take care of everything else. Limited
            villas available for the upcoming season.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-palm text-coffee px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-vanilla transition-colors duration-300"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Contact Details */}
      <section className="bg-porcelain py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="text-palm text-xs tracking-[0.4em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-coffee">
              Contact Details
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <MapPin size={28} strokeWidth={1.5} className="text-walnut" />
              <p className="text-sm text-coffee/70 leading-relaxed">
                123 Coastal Reserve Road,
                <br />
                Whispering Palms, Maldives
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Phone size={28} strokeWidth={1.5} className="text-walnut" />
              <p className="text-sm text-coffee/70 leading-relaxed">
                +1 (555) 234-9871
                <br />
                +1 (555) 234-9872
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Mail size={28} strokeWidth={1.5} className="text-walnut" />
              <p className="text-sm text-coffee/70 leading-relaxed">
                reservations@La Damairesort.com
                <br />
                concierge@La Damairesort.com
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Clock size={28} strokeWidth={1.5} className="text-walnut" />
              <p className="text-sm text-coffee/70 leading-relaxed">
                Front Desk: 24 Hours
                <br />
                Concierge: 6 AM – 11 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
