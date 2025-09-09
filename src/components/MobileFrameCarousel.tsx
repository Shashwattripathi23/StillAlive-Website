"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface MobileFrameCarouselProps {
  images: string[];
  autoSlide?: boolean;
  slideInterval?: number;
}

export default function MobileFrameCarousel({
  images,
  autoSlide = true,
  slideInterval = 3000,
}: MobileFrameCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, slideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, slideInterval, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600/20 via-yellow-500/20 to-yellow-400/20 rounded-[3rem] blur-lg opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

      {/* Mobile Frame */}
      <div className="relative bg-zinc-900 rounded-[2.5rem] p-3 border-2 border-zinc-700 shadow-2xl">
        {/* Screen Bezel */}
        <div className="relative bg-black rounded-[2rem] p-1 border border-zinc-800">
          {/* Notch */}
          {/* <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-zinc-900 rounded-full border border-zinc-700 z-10"></div> */}

          {/* Screen Content */}
          <div className="relative w-72 h-[32rem] bg-black rounded-[1.8rem] overflow-hidden">
            {/* Carousel Container */}
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full h-full flex-shrink-0">
                  <Image
                    src={image}
                    alt={`App Screenshot ${index + 1}`}
                    width={288}
                    height={512}
                    className="w-full h-full object-fit"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-zinc-600 rounded-full"></div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-yellow-500 shadow-lg shadow-yellow-500/20"
                : "bg-zinc-600 hover:bg-zinc-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
