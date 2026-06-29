import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import HomeRoomCard from "@/components/HomeRoomCard";
import ReviewCard from "@/components/ReviewCard";
import { rooms, reviews } from "@/lib/data";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Trees,
  Heart,
  Home as HomeIcon,
  ConciergeBell,
  Bath,
  BedDouble,
  Mountain,
  Waves,
  Coffee,
  Compass,
} from "lucide-react";

export default function HomePage() {
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
<div className="absolute top-20 right-6 md:right-12 z-10 flex flex-col items-end">
  <Image
    src="/logo/Logo_Inverse_horizontal_copy_copy.JPG-removebg-preview.png"   // <-- Replace with your logo path
    alt="La Damai Logo"
    width={280}
    height={150}
    priority
    className="object-contain"
  />

  
</div>

        {/* Dummy text left */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-16 max-w-2xl">
            <p className="text-vanilla font-bold text-xs md:text-sm tracking-[0.4em] uppercase mb-6">
              In the echoes of peace 
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
      {/* Intro / Why Choose Us */}
<section className="bg-palm border-y border-vanilla/10 pt-8 pb-20 md:pt-10 md:pb-16">
  <div className="max-w-6xl mx-auto px-6 md:px-6 text-center">
    

    

    {/* <p className="text-vanilla/80 leading-relaxed max-w-3xl mx-auto text-sm md:text-base">
      Set amidst the tranquil coffee estates of Chikmagalur, La Damai is a
      destination where nature and refined luxury exist in perfect harmony.
      Every stay is thoughtfully crafted to offer serenity, privacy, and
      unforgettable experiences surrounded by breathtaking landscapes.
    </p> */}

    {/* Why Choose Us */}
    <div>
      {/* <p className="text-vanilla/70 text-xs tracking-[0.4em] uppercase mb-4">
        Why Choose Us
      </p> */}

      <h3 className="font-display text-3xl md:text-4xl text-vanilla mb-14">
        Why Guests Love La Damai
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">

        {/* Card 1 */}
        <div className="flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-vanilla/10 flex items-center justify-center mb-5 transition group-hover:bg-vanilla/20">
            <Trees size={30} className="text-vanilla" />
          </div>

          <h4 className="font-display text-[1.15rem] text-vanilla mb-2">
            Secluded Escape
          </h4>

          <p className="text-sm text-vanilla/75 leading-relaxed">
            Quiet coffee estate surroundings.</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-vanilla/10 flex items-center justify-center mb-5 transition group-hover:bg-vanilla/20">
            <Bath size={30} className="text-vanilla" />
          </div>

          <h4 className="font-display text-[1.15rem] text-vanilla mb-2">
            Luxury Villas
          </h4>

          <p className="text-sm text-vanilla/75 leading-relaxed">
            Jacuzzis and luxury bathrooms.</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-vanilla/10 flex items-center justify-center mb-5 transition group-hover:bg-vanilla/20">
            <Heart size={30} className="text-vanilla" />
          </div>

          <h4 className="font-display text-[1.15rem] text-vanilla mb-2">
            Romantic Stay
          </h4>

          <p className="text-sm text-vanilla/75 leading-relaxed">
            Curated stays for couples.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-vanilla/10 flex items-center justify-center mb-5 transition group-hover:bg-vanilla/20">
            <HomeIcon size={30} className="text-vanilla" />
          </div>

          <h4 className="font-display text-[1.15rem] text-vanilla mb-2">
            Family Friendly
          </h4>

          <p className="text-sm text-vanilla/75 leading-relaxed">
            Spacious cottages for families.
          </p>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-vanilla/10 flex items-center justify-center mb-5 transition group-hover:bg-vanilla/20">
            <ConciergeBell size={30} className="text-vanilla" />
          </div>

          <h4 className="font-display text-[1.15rem] text-vanilla mb-2">
            Warm Hospitality
          </h4>

          <p className="text-sm text-vanilla/75 leading-relaxed">
            Warm, personalized guest service.
          </p>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-vanilla/10 flex items-center justify-center mb-5 transition group-hover:bg-vanilla/20">
            <BedDouble size={30} className="text-vanilla" />
          </div>

          <h4 className="font-display text-[1.15rem] text-vanilla mb-2">
            Spacious Rooms
          </h4>

          <p className="text-sm text-vanilla/75 leading-relaxed">
            Large rooms with premium comfort.</p>
        </div>

      </div>
    </div>
  </div>
</section>
{/* Experience Gallery */}
<section className="bg-porcelain py-0">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">

    {[
      {
        image: "/front_page/image1.PNG",
        title: "Stargazing",
      },
      {
        image: "/front_page/image2.PNG",
        title: "Bird Watching",
      },
      {
        image: "/front_page/image3.PNG",
        title: "Estate Walks",
      },
      {
        image: "/front_page/image4.PNG",
        title: "Trekking",
      },
      {
        image: "/front_page/image5.PNG",
        title: "Dining",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="relative h-[240px] overflow-hidden group"
      >
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 "
        />

        {/* Dark translucent overlay */}
        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-500" />

        {/* Text Box */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="border border-vanilla bg-black/20 backdrop-blur-sm px-8 py-4 text-center transition-all duration-300 group-hover:bg-black/35">
            <h3 className="font-display text-2xl text-vanilla mb-2">
              {item.title}
            </h3>

            {/* <div className="w-20 h-px bg-vanilla mx-auto" /> */}
          </div>
        </div>
      </div>
    ))}

  </div>
</section>
      {/* Rooms Section */}
      <section className="bg-porcelain pt-8 pb-8 md:pt-10 md:pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-palm text-xs tracking-[0.4em] uppercase mb-4">
                Accommodation
              </p>

              <Link href="/rooms">
  <h2 className="font-display text-3xl md:text-5xl text-coffee hover:text-palm transition-colors duration-300 cursor-pointer">
    Rooms &amp; Suites
  </h2>
</Link>
            </div>

            <div className="hidden md:flex items-center gap-3 text-coffee/60">
              <span className="text-xs uppercase tracking-[0.3em]">
                Scroll →
              </span>
            </div>
          </div>

          {/* Horizontal Scroller */}
          <div className="relative">
            <div
              className="
                flex
                items-start
                gap-8
                overflow-x-auto
                scroll-smooth
                snap-x
                snap-mandatory
                pb-6
                px-1
                scrollbar-hide
              "
            >
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="snap-start flex-shrink-0"
                >
                  <HomeRoomCard room={room} />
                </div>
              ))}
            </div>
            
            {/* Scroll Hint */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/90 shadow-lg border border-coffee/10 pointer-events-none">
              <ArrowRight
                size={22}
                className="text-coffee animate-pulse"
              />
            </div>
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
      <section className="bg-coffee py-10 md:py-14">
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
      {/* <section className="relative py-24 md:py-32 overflow-hidden">
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
      </section> */}

      
{/* Nearby Attractions */}
<section className="bg-porcelain py-12 md:py-16">
  <div className="max-w-6xl mx-auto px-6 md:px-10">

    <div className="text-center mb-14">
      <p className="text-palm text-xs tracking-[0.4em] uppercase mb-4">
        Explore Chikmagalur
      </p>

      <h2 className="font-display text-3xl md:text-5xl text-coffee">
        Places To Visit Nearby
      </h2>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center">

      <div className="flex flex-col items-center gap-4">
        <Mountain size={30} strokeWidth={1.5} className="text-palm" />
        <div>
          <h3 className="font-semibold text-coffee">
            Devaramane Betta
          </h3>
          <p className="text-sm text-coffee/60">
            45 km
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Waves size={30} strokeWidth={1.5} className="text-palm" />
        <div>
          <h3 className="font-semibold text-coffee">
            Hirekolale Lake
          </h3>
          <p className="text-sm text-coffee/60">
            24 km
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Mountain size={30} strokeWidth={1.5} className="text-palm" />
        <div>
          <h3 className="font-semibold text-coffee">
            Rangana Betta
          </h3>
          <p className="text-sm text-coffee/60">
            5 km
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Trees size={30} strokeWidth={1.5} className="text-palm" />
        <div>
          <h3 className="font-semibold text-coffee">
            Bhadra Wildlife Sanctuary
          </h3>
          <p className="text-sm text-coffee/60">
            32 km
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Coffee size={30} strokeWidth={1.5} className="text-palm" />
        <div>
          <h3 className="font-semibold text-coffee">
            Coffee Museum
          </h3>
          <p className="text-sm text-coffee/60">
            25 km
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Mountain size={30} strokeWidth={1.5} className="text-palm" />
        <div>
          <h3 className="font-semibold text-coffee">
            Mullayanagiri Peak
          </h3>
          <p className="text-sm text-coffee/60">
            37 km
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Waves size={30} strokeWidth={1.5} className="text-palm" />
        <div>
          <h3 className="font-semibold text-coffee">
            Hebbe Falls
          </h3>
          <p className="text-sm text-coffee/60">
            39 km
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
          <Compass size={30} strokeWidth={1.5} className="text-palm" />
          <div>
            <h3 className="font-semibold text-coffee">
              Z Point
            </h3>
            <p className="text-sm text-coffee/60">
              76 km
            </p>
          </div>
      </div>

    </div>

  </div>
</section>


      <Footer />
    </>
  );
}
