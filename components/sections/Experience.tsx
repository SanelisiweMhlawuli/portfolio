export default function Experience() {
  const experiences = [
    {
      period: "Oct 2025 – Apr 2026",
      role: "Software Development Intern",
      company: "Life Choices Studio",
      highlights: [
        "Collaborated in an agile team to build an attendance tracking system for internal use.",
        "Contributed to the development of a mobile application using Flutter.",
        "Worked on a Live Service Finder platform focused on real-time service discovery.",
        "Gained hands-on experience with real-world projects, version control, and team-based development workflows.",
      ],
    },
    {
      period: "Apr 2025 – Oct 2025",
      role: "Software Development Student",
      company: "Life Choices Academy — YouthCode Certificate",
      highlights: [
        "Completed an intensive 6-month software development program covering frontend and backend fundamentals.",
        "Built a frontend-only HR Management System to organize previously unstructured company data.",
        "Developed the backend system for the HR platform as a separate project.",
        "Worked on a full-stack eCommerce application including both frontend and backend functionality.",
        "Independently designed and built a complete application using Oracle APEX.",
        "Collaborated in group projects while also delivering solo, production-ready solutions.",
      ],
    },
    {
      period: "Completed 2024",
      role: "High School Graduate",
      company: "Bachelor’s Pass",
      highlights: [
        "Completed high school with a Bachelor’s pass.",
        "Built a strong foundation in problem-solving, discipline, and continuous learning.",
        "Developed an early interest in technology and software development.",
      ],
    },
  ];

  return (
   <section id="experience" className="bg-black text-white py-24 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold mb-16">
          Experience
        </h2>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-3 top-0 w-px h-full bg-white/20"></div>

          <div className="space-y-16">
            {experiences.map((item, index) => (
              <div key={index} className="relative pl-12">

                {/* Timeline Dot */}
               <div className="absolute left-0 top-2 w-6 h-6 bg-black border-2 border-[#519CAB] rounded-full flex items-center justify-center timeline-dot">
  <div className="w-2 h-2 bg-[#519CAB] rounded-full"></div>
</div>

                {/* Card */}
                <div className={`p-8 rounded-2xl border transition duration-300
                  ${index === 0 
                    ? "bg-white/10 border-white/30" 
                    : "bg-white/5 border-white/10 hover:border-white/30"
                  }`}>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-lg font-semibold">
                      {item.role}
                    </h3>
                    <span className="text-sm text-[#519CAB] font-medium">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mt-2">
                    {item.company}
                  </p>

                  <ul className="mt-6 space-y-3 text-gray-300 text-sm leading-relaxed">
                    {item.highlights.map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-white">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}