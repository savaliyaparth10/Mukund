import React from "react";
import profile_photo from "../assets/image_resources/WhatsApp_Image_2025-04-21_at_15.19.39_2__2_-removebg-preview.png";
import zeonlabs_logo from "../assets/image_resources/worke_with/zeonlabs_logo.svg";
import PlanetX from "../assets/image_resources/worke_with/Planet X.svg";
import MercedeLogo from "../assets/image_resources/worke_with/Mercede-benz_logo.svg";

const HeroSection = () => {
  return (
    <section
      className="  relative min-h-screen bg-black from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden flex items-center justify-center"
      role="banner"
      aria-label="Mukund - Data Professional Introduction"
    >
      {/* Background overlay for depth */}
      <div className="container  ">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="container relative z-10 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-8 sm:py-12 lg:py-20 h-full flex flex-col justify-between items-center ">
          {/* Main content */}
          <div className="flex max-w-[100%] lg:flex-row items-end justify-between flex-1 relative">
            {/* Text Section */}
            <div className="flex-1 items-end w-full text-center mb-24 lg:text-left z-40 relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-[5px]  lg:mb-0">
                <div className="flex">
                  <span className="block text-gray-200 mb-2">Hello there,</span>
                  <span className="block font-bold text-white">I'm Mukund</span>
                </div>
                <span className="block font-bold mt-2 text-white w-[150%] z-40 relative ">
                  a skilled data professional
                </span>
              </h1>
            </div>

            {/* Image Section */}
            <div className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 xl:w-112 z-10 relative mr-16">
              <div className="relative">
                <img
                  src={profile_photo}
                  alt="Mukund - Data Professional Portfolio"
                  className="object-cover w-full h-auto"
                  loading="lazy"
                  width="1200"
                  height="139"
                />
              </div>
            </div>
          </div>

          {/* Logos Section */}
          <div className=" container mt-12 lg:mt-20 text-center lg:text-left">
            <p className="text-sm md:text-base text-gray-400 mb-6 font-light">
              Worked with
            </p>

            <div className="overflow-hidden relative">
              <div className="flex items-center gap-16 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
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
                {/* Repeat for seamless loop */}
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
        </div>

        {/* Floating elements for visual enhancement */}
        <div className="absolute top-20 right-10 w-2 h-2 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-1 h-1 bg-white bg-opacity-30 rounded-full animate-pulse animation-delay-700"></div>
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-white bg-opacity-20 rounded-full animate-pulse animation-delay-500"></div>
      </div>
    </section>
  );
};

export default HeroSection;
