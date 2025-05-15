import React, { useEffect, useState } from "react";
import image from "../assets/RIGVE - Premium Texture/MOR2103-HDR-1-scaled.jpg";

export const AboutUs = () => {
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
  return (
    <div id="about" className="w-full   md:px-24 px-6 py-16 ">
      <h1 className="text-5xl mt-2 font-bold mb-4 lg:text-start">About Us</h1>
      <hr />
      <div className="relative mt-4  grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative lg:h-[500px] flex flex-row justify-end   h-[300px]  overflow-hidden rounded-lg">
          <img
            src={aboutData[0]?.image}
            alt="Marble flooring with plant decoration"
            className="w-full h-auto rounded-lg object-cover"
          />

          {/* Orange overlay text box */}
          <div className="absolute bottom-8 left-8 right-8 bg-gray-200/50 drop-shadow-md  backdrop-blur-sm p-6 rounded-lg">
            <p className="text-black lg:text-xl text-base font-semibold">
              {aboutData[0]?.image_title}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 lg:text-start">
            <p className="text-gary-400 font-medium mb-2">
              {aboutData[0]?.sub_title}
            </p>
            <h2 className="lg:text-4xl text-2xl font-bold mb-6">
              {aboutData[0]?.title}
            </h2>
          </div>

          <div className="space-y-4  lg:text-start">
            {aboutData[0]?.description
              ?.split("\r\n\r\n")
              .map((paragraph, index) => (
                <p key={index} className="text-gray-700">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
