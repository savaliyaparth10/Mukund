import React from "react";
import { Mail, Phone, Linkedin, Github, Hash } from "lucide-react";
import profile_photo from "../assets/image_resources/profile_photo.jpg";

const ContactSection = () => {
  return (
    <div
      id="about"
      className="bg-[#000] from-blue-900 via-blue-950 to-black min-h-screen flex flex-col"
    >
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-between px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text and Buttons */}
          <div className="text-white space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                Feel Free to Reach Out
              </h1>
              <p className="text-gray-300 text-lg">
                Let's start a productive conversation
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 font-medium">
                <Mail size={20} />
                Send Email
              </button>
              <button className="border border-gray-400 text-white px-6 py-3 rounded hover:bg-white/10 transition-colors duration-300 flex items-center gap-2">
                <Phone size={20} />
                Book a call
              </button>
            </div>
          </div>

          {/* Right Column - Professional Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={profile_photo}
                alt="Professional portrait"
                className="rounded-lg shadow-2xl object-cover w-80 h-96 lg:w-84 lg:h-112"
              />

              {/* Social Media Icons */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={24} className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  aria-label="GitHub profile"
                >
                  <Github size={24} className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  aria-label="Other social media"
                >
                  <Hash size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <nav className="bg-blue-600 px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto">
          <ul className="flex flex-wrap justify-center gap-8 lg:gap-12 text-white">
            <li>
              <a
                href="#"
                className="hover:underline transition-all duration-300 font-medium"
                aria-label="Navigate to EN section"
              >
                EN
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:underline transition-all duration-300"
                aria-label="Navigate to About section"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:underline transition-all duration-300"
                aria-label="Navigate to Experience section"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:underline transition-all duration-300"
                aria-label="Navigate to Skills section"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:underline transition-all duration-300"
                aria-label="Navigate to Projects section"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline transition-all duration-300"
                aria-label="Navigate to Contact section"
              >
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default ContactSection;
