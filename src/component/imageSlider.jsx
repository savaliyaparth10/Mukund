import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay"; // Import autoplay styles

// Import required Swiper modules
import { EffectCards, Autoplay } from "swiper/modules";

// Import images
import homeImage1 from "../assets/RIGVE - Premium Texture/1669269909037HAS_4-1-768x512.jpg";
import homeImage2 from "../assets/RIGVE - Premium Texture/1.1.0-1024x503.jpg";
import homeImage7 from "../assets/RIGVE - Premium Texture/IMG_E9831-1024x1024.jpg";

const imageData = [
  {
    id: 1,
    image: homeImage1,
    title: "Natural Stone Cladding",
  },
  {
    id: 2,
    image: homeImage2,
    title: "Natural Stone Tiles",
  },
  // {
  //   id: 3,
  //   image: homeImage3,
  //   title: "Natural Stone Pavers",
  // },
  // {
  //   id: 4,
  //   image: homeImage4,
  //   title: "Natural Stone Pavers",
  // },
  // {
  //   id: 5,
  //   image: homeImage5,
  //   title: "Natural Stone Pavers",
  // },
  // {
  //   id: 6,
  //   image: homeImage6,
  //   title: "Natural Stone Pavers",
  // },
  {
    id: 7,
    image: homeImage7,
    title: "Natural Stone Pavers",
  },
];

export const ImageCardSlider = () => {
  const [ImageData, setImageData] = useState([]);
  console.log("🚀 ~ ImageCardSlider ~ ImageData:", ImageData);

  const imageData = ImageData?.map((item, index) => ({
    id: item?.id,
    image: item?.image,
    title: item?.name,
    className: "col-span-1 row-span-1",
  }));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await fetch(
          "https://naturalx.in/admin/api/getgallery?type=1"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response?.json();
        if (data.status === 1) {
          setImageData(data?.data?.data);
        } else {
          throw new Error("Failed to fetch gallery data");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImageData();
  }, []);
  return (
    <div className="">
      <Swiper
        // effect={"cards"}
        grabCursor={true}
        initialSlide={1}
        speed={2000}
        autoplay={{
          delay: 2000, // Change slide every 1 second (1000 ms)
          disableOnInteraction: false, // Allow autoplay to continue after user interaction
        }}
        modules={[EffectCards, Autoplay]} // Include Autoplay module
        className="mySwiper"
      >
        {imageData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full  overflow-hidden rounded-3xl shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-[100vw] h-[85vh]  object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
