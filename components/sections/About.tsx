import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image Section */}
        <div className="relative group">

          {/* Glow */}
          <div className="absolute -left-4 -top-4 w-full h-full bg-[#519CAB]/25 rounded-xl blur-lg -z-10 transition duration-500 group-hover:opacity-80"></div>

          {/* Optional Border */}
          <div className="absolute -left-4 -top-4 w-full h-full border border-[#519CAB]/200 "></div>

          {/* Image */}
          <div className="relative w-full h-[400px] overflow-hidden transform transition duration-500 group-hover:scale-[1.02]">
            <Image
              src="/sane.png"
              alt="Sanelisiwe Mhlawuli"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8">
            I am a UI/UX Designer and Frontend Developer focused on creating
            thoughtful user experiences and building responsive, high-quality
            web interfaces. I combine design strategy with clean code to deliver
            digital products that are both functional and visually refined.
          </p>

          {/* Info Grid */}
          <div className="grid sm:grid-cols-2 gap-6 text-sm">

            <div>
              <p className="text-gray-500">Name</p>
              <p className="mt-1">Sanelisiwe Mhlawuli</p>
            </div>

            <div>
              <p className="text-gray-500">Role</p>
              <p className="mt-1">UI/UX Designer & Frontend Developer</p>
            </div>

            <div>
              <p className="text-gray-500">Email</p>
              <p className="mt-1">bongozwa50@gmail.com</p>
            </div>

            <div>
              <p className="text-gray-500">Location</p>
              <p className="mt-1">Cape Town, South Africa</p>
            </div>

          </div>

          {/* Button */}
          {/* <button className="mt-10 px-8 py-3 border border-[#519CAB] text-[#519CAB] rounded-full hover:bg-[#519CAB] hover:text-black transition duration-300">
            Download CV
          </button> */}
        </div>

      </div>
    </section>
  );
}