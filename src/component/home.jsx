import React, { useState, useEffect } from "react";
import { ImageCardSlider } from "./imageSlider";
import Typewriter from "typewriter-effect";

export const HomePage = () => {
  const [messages, setMessages] = useState([]);
  const [homePageData, setHomePageData] = useState({});
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://naturalx.in/admin/api/get_extra_details"
      );
      const result = await response.json();
      if (result.status === 1) {
        setHomePageData(result.data);
        setMessages(result.data?.main_title || []);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://naturalx.in/admin/api/get_home_category"
      );
      const data = await response.json();
      if (data.status === 1) {
        setProducts(data.data || []);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchProducts();
  }, []);

  return (
    <div id="home" className="bg-white" style={{ marginBottom: "-50px" }}>
      {/* Hero Section */}
      <div className="mx-auto w-full px-4 pt-20 md:pt-18 lg:pt-18">
        {
          // <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full justify-center">
          //   {/* Left Content */}
          //   <div className="relative w-full flex justify-center item-center lg:justify-end lg:w-[100%]">
          //     <div className="space-y-6 lg:space-y-8 text-center lg:text-left w-full max-w-xl lg:w-[100%] flex flex-col justify-center items-center lg:items-start rounded-lg">
          //       <div className="text-2xl min-h-[100px] md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
          //         <Typewriter
          //           options={{
          //             strings: messages,
          //             autoStart: true,
          //             loop: true,
          //           }}
          //         />
          //       </div>
          //       <p className="text-base max-w-xl">
          //         {homePageData?.home_descripton}
          //       </p>
          //       <div className="flex flex-wrap justify-center items-center gap-4">
          //         <a
          //           href="#Collections"
          //           className="px-6 py-3 bg-orange-600 text-white rounded-3xl hover:bg-orange-700 transition-colors"
          //         >
          //           <span className="font-bold">Explore Collections</span>
          //         </a>
          //         <a
          //           href="#contact"
          //           className="px-6 py-3 border border-gray-300 text-gray-700 rounded-3xl hover:bg-gray-50 transition-colors"
          //         >
          //           Contact Us
          //         </a>
          //       </div>
          //     </div>
          //   </div>
          //   {/* Right Image */}
          //   <div className="flex justify-center items-center">
          //     <div className="relative md:p-6 md:h-[600px] md:w-[500px] overflow-hidden">
          //       <ImageCardSlider />
          //     </div>
          //   </div>
          // </div>
        }
        <div>
          {/* Left Content */}

          <ImageCardSlider />
          {/* Right Image */}
        </div>
      </div>

      {/* Features Grid */}
      <div className="mx-auto pb-8 px-4 md:px-24 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          {products.map((item) => (
            <div
              key={item.id}
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center">
                <div className="min-w-12 h-12 bg-orange-100 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-orange-600 text-xl">✦</span>
                </div>
                <h3 className="text-xl ml-2 font-semibold mb-2">
                  {item?.name}
                </h3>
              </div>
              <p className="text-gray-600">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
