export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full text-white overflow-hidden pt-24">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/nelly.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-8 md:px-20">
        <div className="max-w-2xl">
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            SANELISIWE <br />
            <span className="text-[#519CAB]">MHLAWULI</span>
          </h1>

          <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
            UI/UX Designer & Frontend Developer passionate about crafting
            intuitive digital experiences and building modern, responsive
            interfaces that feel seamless and purposeful.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">

            {/* View CV */}
            <a
              href="/Sanelisiwe's_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#519CAB] text-[#519CAB] rounded-full 
              hover:bg-[#519CAB] hover:text-black 
              transition duration-300"
            >
              View CV
            </a>

            {/* Contact Me */}
            <a
              href="#contact"
              className="px-6 py-3 bg-[#519CAB] text-black rounded-full 
              hover:scale-105 hover:shadow-[0_0_20px_rgba(81,156,171,0.6)] 
              transition duration-300"
            >
              Contact Me
            </a>

          </div>
        </div>
      </div>

    </section>
  );
}