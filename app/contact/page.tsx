import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import MapLocation from "@/components/MapLocation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
export const metadata = {
  title: "Contact Us | La Damai Resort",
};

export default function ContactPage() {
  return (
    <>
      <Sidebar />

      <PageHero
        title="Contact Us"
        subtitle="We'd Love To Hear From You"
        image="/room_pics/IMG_9364.png"
      />

      <section className="bg-porcelain py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-5 gap-12">

          <div className="lg:col-span-3">
            <p className="text-palm text-xs tracking-[0.4em] uppercase mb-4">
              Send A Message
            </p>

            <h2 className="font-display text-3xl md:text-5xl text-coffee mb-8">
              Get In Touch
            </h2>

            <ContactForm />
          </div>

          <div className="lg:col-span-2 bg-coffee text-porcelain p-8 md:p-10 flex flex-col gap-8 h-fit">

            <div>
              <h3 className="font-display text-2xl text-vanilla mb-2">
                La Damai Resort
              </h3>
            </div>

            <div className="flex items-start gap-4">
              <MapPin
                  size={20}
                  strokeWidth={1.5}
                  className="text-palm mt-1 shrink-0"
                />

                <a
                  href="https://maps.app.goo.gl/cyEybjTLgwtZhtpx9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-porcelain/80 leading-relaxed hover:text-palm transition-colors"
                >
                  Hunasemakki, Kallugudde Road,
                  <br />
                  Chikmagalur - 577133
                </a>
            </div>

            <div className="flex items-start gap-4">
              <Phone
                size={22}
                strokeWidth={1.5}
                className="text-palm shrink-0 mt-1"
              />

              <p className="text-sm text-porcelain/80 leading-relaxed">
                +91 99000 64697
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Mail
                size={22}
                strokeWidth={1.5}
                className="text-palm shrink-0 mt-1"
              />
            <Link
              href="/contact#contact-form"
              className="text-sm text-porcelain/80 leading-relaxed hover:text-palm transition-colors"
            >
              reservations@damairesorts.com
            </Link>
              
            </div>

            <div className="flex items-start gap-4">
              <Clock
                size={22}
                strokeWidth={1.5}
                className="text-palm shrink-0 mt-1"
              />

              <p className="text-sm text-porcelain/80 leading-relaxed">
                Front Desk: 9 AM – 9 PM
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}