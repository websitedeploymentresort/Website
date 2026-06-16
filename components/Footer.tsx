import Link from "next/link";
import { Instagram, Facebook, Twitter as TwitterIcon, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-coffee text-porcelain">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        

        <div>
          <h4 className="font-display text-lg text-vanilla mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-porcelain/70">
            <li><Link href="/about" className="hover:text-palm transition-colors">About Us</Link></li>
            <li><Link href="/rooms" className="hover:text-palm transition-colors">Rooms &amp; Suites</Link></li>
            <li><Link href="/gallery" className="hover:text-palm transition-colors">Gallery</Link></li>
            <li><Link href="/booking" className="hover:text-palm transition-colors">Book Now</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-vanilla mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-porcelain/70">
            <li className="flex items-center gap-3">
              <MapPin
                size={18}
                strokeWidth={1.5}
                className="text-palm shrink-0 mt-0.5"
              />

              <a
                href="https://maps.app.goo.gl/AH27CMgGtsKM8Gzv6?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-palm transition-colors duration-300"
              >
                Hunasemakki, Chikmagalur - maps.app.goo.gl
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} strokeWidth={1.5} className="text-palm shrink-0" />
              +1 (555) 234-9871
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} strokeWidth={1.5} className="text-palm shrink-0" />
              reservations@damairesorts.com
            </li>
          </ul>
        </div>

        <div>
          
          <div className="flex flex-col gap-6 mt-6">
            <Instagram
              size={24}
              strokeWidth={1.5}
              className="text-vanilla hover:text-palm transition-colors cursor-pointer"
            />

            <Facebook
              size={24}
              strokeWidth={1.5}
              className="text-vanilla hover:text-palm transition-colors cursor-pointer"
            />

            <TwitterIcon
              size={24}
              strokeWidth={1.5}
              className="text-vanilla hover:text-palm transition-colors cursor-pointer"
            />
</div>
        </div>
      </div>
      <div className="border-t border-porcelain/10 py-6 text-center text-xs text-porcelain/40 tracking-wider">
        © {new Date().getFullYear()} La Damai Resort. All rights reserved.
      </div>
    </footer>
  );
}
