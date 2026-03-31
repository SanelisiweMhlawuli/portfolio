"use client";

import { useState } from "react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const frontendSkills = [
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 78 },
    { name: "Vue.js", level: 90 },
    { name: "Python", level: 70 },
    { name: "Bootstrap", level: 72 },
    { name: "Flutter", level: 81 },
    { name: "Oracle Apex", level: 80 },
  ];

  const coreUX = [
    "User Research",
    "Wireframing",
    "Prototyping",
    "User Experience (UX) Design",
    "User Interface (UI) Design",
    "Information Architecture",
    "Usability Testing",
    "Design Thinking",
  ];

  const uxTools = ["Figma", "Adobe XD", "Canva", "Blender", "Visily", "Stitch", "Draw.io", "Whimscical", "Framer", "InVision", "Maze"];

  const softSkills = [
    "Communication",
    "Problem Solving",
    "Team Collaboration",
    "Adaptability",
    "Time Management",
    "Attention to Detail",
  ];

  const tools = [
    "Git & GitHub",
    "VS Code",
    "Notion",
    "Vercel",
    "Figma Dev Mode",
  ];

  return (
   <section id="skills" className="bg-black text-white py-28 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Skills & Expertise
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {["frontend", "uiux", "other"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm border transition duration-300
              ${
                activeTab === tab
                  ? "bg-[#3A7F8C] text-black border-[#3A7F8C]"
                  : "border-white/20 hover:border-[#3A7F8C] hover:text-[#3A7F8C]"
              }`}
            >
              {tab === "frontend"
                ? "Frontend"
                : tab === "uiux"
                ? "UI/UX"
                : "Soft Skills & Tools"}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="text-left transition-all duration-500">

          {/* FRONTEND */}
          {activeTab === "frontend" && (
            <div className="grid md:grid-cols-2 gap-12 animate-fadeInUp">
              {[0, 1].map((col) => (
                <div key={col} className="space-y-8">
                  {frontendSkills
                    .slice(col * 5, col * 5 + 5)
                    .map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-[#3A7F8C] font-medium">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#3A7F8C] transition-all duration-700"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          )}

          {/* UI/UX */}
          {activeTab === "uiux" && (
            <div className="grid md:grid-cols-2 gap-12 animate-fadeInUp">

              {/* Core Skills */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-[#3A7F8C]">
                  Core Skills
                </h3>
                <div className="space-y-4 text-gray-300 text-sm">
                  {coreUX.map((skill, index) => (
                    <p key={index} className="border-b border-white/10 pb-2">
                      {skill}
                    </p>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-[#3A7F8C]">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {uxTools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full
                      hover:border-[#3A7F8C] hover:text-[#3A7F8C] transition duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* SOFT SKILLS + TOOLS */}
          {activeTab === "other" && (
            <div className="grid md:grid-cols-2 gap-12 animate-fadeInUp">

              {/* Soft Skills */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-[#3A7F8C]">
                  Soft Skills
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                  {softSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center
                      hover:border-[#3A7F8C] hover:text-[#3A7F8C] hover:scale-105 transition duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-[#3A7F8C]">
                  Tools
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center
                      hover:border-[#3A7F8C] hover:text-[#3A7F8C] hover:scale-105 transition duration-300"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}