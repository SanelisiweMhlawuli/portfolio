import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left Side */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">
              SANELISIWE MHLAWULI
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              UI/UX Designer & Frontend Developer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-gray-400 transition"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-gray-400 transition"
            >
              <Github size={20} />
            </a>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-10 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Sanelisiwe Mhlawuli. All rights reserved.
        </div>

      </div>
    </footer>
  );
}