import React from "react";
import profile_photo from "../assets/image_resources/profile_photo.jpg";
import zeonlabs_logo from "../assets/image_resources/worke_with/zeonlabs_logo.svg";
import PlanetX from "../assets/image_resources/worke_with/Planet X.svg";
import MercedeLogo from "../assets/image_resources/worke_with/Mercede-benz_logo.svg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-black from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden"
      role="banner"
      aria-label="Mukund - Data Professional Introduction"
    >
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-8 sm:py-12 lg:py-20 h-full flex flex-col justify-between">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 flex-1">
          {/* Text Section */}
          <div className="flex-1 max-w-4xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-4 lg:mb-0">
              <span className="block text-gray-200 mb-2">Hello there,</span>
              <span className="block font-extrabold text-white">
                I'm Mukund
              </span>
              <span className="block font-extrabold mt-2 text-white">
                a skilled data professional
              </span>
            </h1>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 xl:w-112">
            <div className="relative">
              <img
                src={profile_photo}
                alt="Mukund - Data Professional Portfolio"
                className="object-cover w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
                loading="lazy"
                width="1200"
                height="1600"
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-transparent via-transparent to-white opacity-10"></div>
            </div>
          </div>
        </div>

        {/* Logos Section */}
        <div className="mt-12 lg:mt-20 text-center lg:text-left">
          <p className="text-sm md:text-base text-gray-400 mb-6 font-light">
            Worked with
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 md:gap-12 lg:gap-16">
            <img
              src={MercedeLogo}
              alt="Mercedes-Benz - Previous client"
              className="h-6 md:h-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
            <img
              src={zeonlabs_logo}
              alt="Zeonlabs - Previous client"
              className="h-6 md:h-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
            <img
              src={PlanetX}
              alt="Planet X - Previous client"
              className="h-6 md:h-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Floating elements for visual enhancement */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-1 h-1 bg-white bg-opacity-30 rounded-full animate-pulse animation-delay-700"></div>
      <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-white bg-opacity-20 rounded-full animate-pulse animation-delay-500"></div>
    </section>
  );
};

export default HeroSection;
