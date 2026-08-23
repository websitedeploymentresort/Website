import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { getGalleryImages } from "@/lib/gallery";

export const metadata = {
  title: "Gallery | La Damai Resorts",
  description:
    "View luxury villas, dining spaces, and scenic landscapes at La Damai Resorts in Chikmagalur through our resort gallery.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  const galleryImages = getGalleryImages();

  return (
    <>
      <Sidebar />

      <PageHero
        title="Gallery"
        subtitle="A Glimpse Of Paradise"
        image="/room_pics/opening_image.PNG"
      />

      <section className="bg-porcelain py-1 md:py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-palm text-xs tracking-[0.4em] uppercase mb-4">
              Visual Journey
            </p>

            <h2 className="font-display text-3xl md:text-5xl text-coffee">
              A Glimpse Of Paradise
            </h2>
          </div> */}

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="relative w-full overflow-hidden break-inside-avoid group"
                style={{
                  aspectRatio: i % 3 === 0 ? "3/4" : "4/3",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-coffee/0 group-hover:bg-coffee/20 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}