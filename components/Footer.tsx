"use client";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter as TwitterIcon,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import MapLocation from "@/components/MapLocation";

export default function Footer() {
  return (
    
    <footer className="bg-coffee text-porcelain">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-start">

          {/* Explore */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-2xl text-vanilla mb-6">
              Explore
            </h4>

            <ul className="space-y-3 text-base text-porcelain/70">
              <li>
                <Link
                  href="/about"
                  className="hover:text-palm transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/rooms"
                  className="hover:text-palm transition-colors"
                >
                  Rooms &amp; Suites
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="hover:text-palm transition-colors"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/booking"
                  className="hover:text-palm transition-colors"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-2xl text-vanilla mb-6">
              Contact
            </h4>

            <ul className="space-y-5 text-base text-porcelain/70">
              <li className="flex items-start justify-center md:justify-start gap-4">
                <MapPin
                  size={20}
                  strokeWidth={1.5}
                  className="text-palm mt-1 shrink-0"
                />

                <MapLocation />
              </li>

              <li className="flex items-center justify-center md:justify-start gap-4">
                <Phone
                  size={20}
                  strokeWidth={1.5}
                  className="text-palm shrink-0"
                />
                +91 99000 64697
              </li>

              <li className="flex items-center justify-center md:justify-start gap-4">
                <Mail
                  size={20}
                  strokeWidth={1.5}
                  className="text-palm shrink-0"
                />

                <Link
                  href="/contact#contact-form"
                  className="hover:text-palm transition-colors"
                >
                  reservations@damairesorts.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-2xl text-vanilla mb-6">
              Follow Us
            </h4>

            <div className="flex justify-center md:justify-end gap-8">
              <a
                href="https://www.instagram.com/la_damai.chikmagalur/"
                className="text-vanilla hover:text-palm transition-colors"
              >
                <Instagram size={30} strokeWidth={1.5} />
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-porcelain/10 py-5">
        <p className="text-center text-xs tracking-[0.25em] uppercase text-porcelain/40">
          © {new Date().getFullYear()} La Damai Resort. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

