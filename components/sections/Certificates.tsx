"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

export default function Certificates() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const [selectedCert, setSelectedCert] = useState<any>(null);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const certificates = [
    {
      title: "Software Development Certificate",
      issuer: "Life Choices Academy — YouthCode",
      year: "2025",
      image: "/Software.png",
    },
    {
      title: "Mobile Application",
      issuer: "Life Choices Studio",
      year: "2026",
      image: "/Mobile_App_Development_badge.png",
    },
    {
      title: "WeThinkCode Generative AI",
      issuer: "WeThinkCode",
      year: "2026",
      image: "/Sanelisiwe-Mhlawuli(1).png",
    },
    {
      title: "Cloud Computing Certificate",
      issuer: "Life Choices Studio",
      year: "2026",
      image: "/cloud.png",
    },
  ];

  return (
    <section
      id="certificates"
      className="bg-black text-white py-24 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto relative">

        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Certificates
        </h2>

        {/* Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 
          bg-[#519CAB]/20 hover:bg-[#519CAB]/40 
          p-3 rounded-full backdrop-blur transition"
        >
          <ChevronLeft className="text-[#519CAB]" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 
          bg-[#519CAB]/20 hover:bg-[#519CAB]/40 
          p-3 rounded-full backdrop-blur transition"
        >
          <ChevronRight className="text-[#519CAB]" />
        </button>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">

            {certificates.map((cert, index) => (
              <div
                key={index}
                className="min-w-[280px] md:min-w-[350px] group relative"
              >

                {/* Glow */}
                <div className="absolute inset-0 bg-[#519CAB]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

                <div className="bg-white/5 rounded-xl overflow-hidden 
                border border-white/10 
                transform transition duration-500 
                group-hover:scale-[1.03] group-hover:-translate-y-2">

                  {/* Image */}
                  <div className="relative h-[220px] overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold">
                      {cert.title}
                    </h3>

                    <p className="text-[#519CAB] text-sm mt-2">
                      {cert.issuer}
                    </p>

                    <p className="text-gray-500 text-xs mt-1 mb-4">
                      {cert.year}
                    </p>

                    {/* 🔥 MODAL BUTTON */}
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-block px-4 py-2 text-sm rounded-lg 
                      bg-[#519CAB] text-black 
                      hover:opacity-90 transition"
                    >
                      View Certificate
                    </button>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* 🔥 MODAL */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-black rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 bg-white/10 p-2 rounded-full hover:bg-white/20"
              >
                <X />
              </button>

              {/* Image */}
              <div className="relative w-full h-[70vh]">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}