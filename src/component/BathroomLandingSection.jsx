import React, { useEffect, useState } from "react";
import Image from "../assets/RIGVE - Premium Texture/PD_2-1536x1025.webp";

export const BathroomLanding = () => {
  const [aboutData, setAboutData] = useState([]);
  const [extraDetails, setExtraDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://naturalx.in/admin/api/get_about");
        const result = await response.json();
        if (result.status === 1) {
          setAboutData(result.data);
          setExtraDetails(result.extra_details);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const stats = [
    {
      number: extraDetails?.total_awwards || "15",
      label: "Awwards",
      suffix: "",
    },
    {
      number: extraDetails?.total_projects || "1024",
      label: "Projects",
      suffix: "",
    },
    {
      number: extraDetails?.total_clients || "2024",
      label: "Happy clients",
      suffix: "+",
    },
  ];

  return (
    <div
      className="min-h-screen bg-white py-14   md:px-24 "
      style={{ marginTop: "-90px" }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-centser">
          {/* Left Content Section */}
          <div className="space-y-8 grid grid-cols-1 items-start">
            <div className="space-y-4">
              <p className="text-gray-600 text-lg">{aboutData[1]?.sub_title}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {aboutData[1]?.title}
              </h1>
            </div>

            <div className="space-y-6 text-gray-700">
              {aboutData[1]?.description?.split("\r\n\r\n")[0] && (
                <p className="md:text-lg text-sl">
                  {aboutData[1]?.description.split("\r\n\r\n")[0]}
                </p>
              )}

              <h2 className="text-2xl font-semibold mb-4">
                {aboutData[1]?.image_title}
              </h2>
              {aboutData[1]?.description?.split("\r\n\r\n")[0] && (
                <p className="md:text-lg text-sl">
                  {aboutData[1]?.description.split("\r\n\r\n")[1]}
                </p>
              )}
            </div>

            <div className="flex items-center justify-center flex-wrap gap-4">
              <button className="px-6 py-3 bg-orange-600 text-white rounded-3xl hover:bg-orange-700 transition-colors">
                <a href="#Collections">Explore Products</a>
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-3xl hover:bg-gray-50 transition-colors">
                <a href="#contact">Contact Us</a>
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid  grid-cols-3 md:px-2 px-8 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-900">
                    {stat.number}
                    {stat.suffix}
                  </div>
                  <div className="text-gray-600 mt-1 ">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <img
              src={aboutData[1]?.image}
              alt="Modern bathroom design"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-600 rounded-full opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
