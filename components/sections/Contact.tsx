"use client";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_sane6",
        "template_gqj1r2l",
        e.currentTarget,
        "DrYEQetV_UCHGNFOD"
      )
      .then(() => {
        setShowModal(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setLoading(false);
      });

    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-black text-white py-28 px-6 md:px-20">
      <div className="max-w-6xl mx-auto animate-fadeInUp">

        <h2 className="text-3xl md:text-4xl font-semibold mb-16">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-20">

          {/* Left Side */}
          <div className="space-y-8">

            <p className="text-gray-400 leading-relaxed">
              Interested in working together or have a project in mind?
              Feel free to reach out. I’m always open to discussing new
              opportunities and creative ideas.
            </p>

            <div className="space-y-3 text-gray-300">
              <p>Email: bongozwa50@gmail.com</p>
              <p>Phone: +27 81 508 8821</p>
            </div>

            <div className="flex gap-6 text-2xl mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-[#519CAB] hover:scale-110 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="text-[#519CAB] hover:scale-110 transition duration-300"
              >
                <FaGithub />
              </a>
            </div>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-[#519CAB] rounded-2xl p-10 space-y-6 backdrop-blur-sm transition duration-500 hover:shadow-[0_0_25px_rgba(81,156,171,0.25)]"
          >

            {/* Name */}
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-4 text-sm
              focus:outline-none focus:border-[#519CAB] focus:ring-1 focus:ring-[#519CAB] transition duration-300"
            />

            {/* Email */}
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-4 text-sm
              focus:outline-none focus:border-[#519CAB] focus:ring-1 focus:ring-[#519CAB] transition duration-300"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-4 text-sm resize-none
              focus:outline-none focus:border-[#519CAB] focus:ring-1 focus:ring-[#519CAB] transition duration-300"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#519CAB] text-black py-4 rounded-lg text-sm font-semibold
              hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(81,156,171,0.5)]
              transition duration-300 disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white text-black p-8 rounded-2xl w-[90%] max-w-md text-center animate-scaleIn">

              <h3 className="text-lg font-semibold mb-4">
                Message Sent Successfully
              </h3>

              <p className="text-sm text-gray-700 mb-6">
                Thank you for reaching out. I’ll get back to you as soon as possible.
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="bg-[#519CAB] text-black px-6 py-2 rounded-lg text-sm font-medium"
              >
                Close
              </button>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}