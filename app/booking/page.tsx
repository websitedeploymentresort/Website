import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Book Now | La Damai Resort",
};

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ room?: string }>;
}) {
  const { room } = await searchParams;

  return (
    <>
      <Sidebar />
      <PageHero
        title="Book Your Stay"
        subtitle="Reservations"
        image="https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="bg-coffee py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="text-vanilla text-xs tracking-[0.4em] uppercase mb-4">
              Reserve Your Escape
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-porcelain mb-6">
              Request A Reservation
            </h2>
            <p className="text-porcelain/70 text-sm md:text-base leading-relaxed">
              Submit your preferred dates and accommodation, and our
              reservations team will confirm availability and finalise the
              details with you directly.
            </p>
          </div>

          <BookingForm defaultRoom={room} />
        </div>
      </section>

      <Footer />
    </>
  );
}
