"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Stargazing",
    subtitle: "Experience magical nights beneath the stars",
  },
  {
    title: "Trekking",
    subtitle: "Discover scenic trails around Chikmagalur",
  },
  {
    title: "Estate Walks",
    subtitle: "Stroll through lush coffee plantations",
  },
  {
    title: "Bird Watching",
    subtitle: "Wake up to the melodies of the Western Ghats",
  },
  {
    title: "Dining",
    subtitle: "Taste authentic flavours crafted with love",
    link: "/dining",
  },
];

export default function ExperienceVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateSlide = () => {
      const currentTime = video.currentTime;

      // Every 5 seconds switch text
      const index = Math.min(
        Math.floor(currentTime / 5),
        slides.length - 1
      );

      if (index !== currentSlide) {
        setCurrentSlide(index);
      }
    };

    video.addEventListener("timeupdate", updateSlide);

    return () => {
      video.removeEventListener("timeupdate", updateSlide);
    };
  }, [currentSlide]);

  return (
    <section className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-black">

      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/front_page/video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">

        <div
          key={currentSlide}
          className="max-w-3xl animate-fade-slide"
        >
          <h2 className="font-display text-4xl md:text-6xl text-vanilla mb-6">
            {slides[currentSlide].title}
          </h2>

          <p className="text-white/90 text-lg md:text-xl mb-8">
            {slides[currentSlide].subtitle}
          </p>

          {"link" in slides[currentSlide] && (
            <Link
              href={slides[currentSlide].link!}
              className="inline-block border border-vanilla px-8 py-3 text-sm uppercase tracking-[0.25em] text-vanilla hover:bg-vanilla hover:text-coffee transition"
            >
              Explore Dining
            </Link>
          )}
        </div>

      </div>
    </section>
  );
}