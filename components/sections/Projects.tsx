"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  const scrollPrev = () => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  };

  const projects = [
    {
      title: "MODERNTECH SOLUTIONS",
      image: "/MODERNTECH.png",
      description:
        "Full-stack HR Management System built with Vue.js to organize and structure company data.",
      role: "UI/UX Design & Frontend Development",
      link: "https://moderntech-solutions-hr-system.vercel.app/",
    },
    {
      title: "OT Enterprise Systems Dashboard",
      image: "/OT.png",
      description:
        "Interactive analytics dashboard built with Oracle APEX featuring KPI cards and reports.",
      role: "UI/UX Designer & Oracle APEX Developer",
      link: "https://oracleapex.com/ords/r/lc_sanelisiwe/ot-enterprise-systems171544/home",
    },
    {
      title: "NUE Restaurant Website",
      image: "/NUE-FOOD.png",
      description:
        "Modern restaurant website with ordering and reservations built with Vue.js.",
      role: "UI/UX Designer & Frontend Developer",
      link: "https://nue-food-bice.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Projects
        </h2>

        {/* Arrows (NOW visible on mobile) */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 
          bg-[#519CAB]/20 hover:bg-[#519CAB]/40 
          p-2 md:p-3 rounded-full transition"
        >
          <ChevronLeft className="text-[#519CAB]" size={20} />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 
          bg-[#519CAB]/20 hover:bg-[#519CAB]/40 
          p-2 md:p-3 rounded-full transition"
        >
          <ChevronRight className="text-[#519CAB]" size={20} />
        </button>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex gap-4 md:gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="
                flex-[0_0_90%]   /* 🔥 better mobile width */
                sm:flex-[0_0_75%]
                md:flex-[0_0_45%]
                lg:flex-[0_0_30%]
                transition-transform duration-300
                "
              >
                <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
                  
                  {/* Image */}
                  <div className="relative h-[200px] md:h-[220px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5">
                    <h3 className="text-base md:text-lg font-semibold mb-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-xs md:text-sm mb-3">
                      {project.description}
                    </p>

                    <p className="text-[#519CAB] text-xs mb-4">
                      {project.role}
                    </p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-[#519CAB] text-black rounded-lg text-xs md:text-sm hover:opacity-90 transition"
                    >
                      View Project
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}