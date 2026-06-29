"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook, Twitter as TwitterIcon } from "lucide-react";
import Image from "next/image";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/rooms", label: "Rooms & Suites" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
  { href: "/booking", label: "Book Now" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 transition-all duration-500 ${
          scrolled
            ? "bg-coffee/95 backdrop-blur-sm py-3 shadow-lg shadow-black/20"
            : "bg-coffee py-5"
        }`}
      >
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="text-porcelain hover:text-vanilla transition-colors duration-300 cursor-pointer"
        >
          <Menu size={28} strokeWidth={1.5} />
        </button>

        <Link
  href="/"
  className="flex items-center justify-center translate-x-4"
> 
  <Image
    src="/logo/coffeebean.png"
    alt="La Damai"
    width={240}
    height={60}
    priority
    className="h-10 md:h-12 w-auto object-contain"
  />
  <Image
    src="/logo/navbar-Logo_Inverse_horizontal_copy_copy.JPG-removebg-preview.png"
    alt="La Damai"
    width={240}
    height={60}
    priority
    className="h-10 md:h-12 w-auto object-contain"
  />
</Link>

        <Link
          href="/booking"
          className="hidden sm:inline-block border border-vanilla/40 text-vanilla text-xs tracking-[0.2em] uppercase px-5 py-2 hover:bg-vanilla hover:text-coffee transition-all duration-300"
        >
          Book Now
        </Link>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-coffee/60 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[85%] max-w-sm bg-coffee text-porcelain transform transition-transform duration-500 ease-in-out flex flex-col ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-6 border-b border-porcelain/10">
          <span className="font-display text-vanilla text-xl tracking-[0.3em] uppercase">
            La Damai
          </span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-porcelain hover:text-vanilla transition-colors duration-300 cursor-pointer"
          >
            <X size={26} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-8 py-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={`font-display text-xl md:text-2xl py-3 border-b border-porcelain/10 text-porcelain hover:text-vanilla hover:pl-3 transition-all duration-300 ${
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto px-8 py-8 border-t border-porcelain/10">
          <p className="text-xs tracking-[0.2em] uppercase text-porcelain/50 mb-4">
            Follow Us
          </p>
          <div className="flex gap-5">
            <Instagram size={20} strokeWidth={1.5} className="text-vanilla hover:text-palm transition-colors cursor-pointer" />
            <Facebook size={20} strokeWidth={1.5} className="text-vanilla hover:text-palm transition-colors cursor-pointer" />
            <TwitterIcon size={20} strokeWidth={1.5} className="text-vanilla hover:text-palm transition-colors cursor-pointer" />
          </div>
          <p className="text-xs text-porcelain/40 mt-6 leading-relaxed">
            Hunasemakki
            <br />
            Chikamagaluru
          </p>
        </div>
      </aside>
    </>
  );
}
