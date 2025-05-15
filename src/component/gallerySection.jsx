import React, { useEffect, useState } from "react";
// import image_1 from "../assets/RIGVE - Premium Texture/1.1.0-scaled.jpg";
// import image_2 from "../assets/RIGVE - Premium Texture/1669269909037HAS_4-1.jpg";
// import image_3 from "../assets/RIGVE - Premium Texture/3-1536x1536.jpg";
// import image_4 from "../assets/RIGVE - Premium Texture/31_Cave_1920_1281_72_jboda-1536x1025.webp";
// import image_5 from "../assets/RIGVE - Premium Texture/IMG20240208110043-scaled.jpg";
// import image_6 from "../assets/RIGVE - Premium Texture/IMG_1169-1536x1152.jpg";
import { useNavigate } from "react-router-dom";

// const galleryItems = [
//   {
//     id: 1,
//     imageUrl: image_1,
//     className: "col-span-1 row-span-1 ",
//   },
//   {
//     id: 2,
//     imageUrl: image_2,
//     className: "col-span-1 row-span-1 ",
//   },
//   {
//     id: 3,
//     imageUrl: image_3,
//     className: "col-span-1 row-span-1",
//   },
//   {
//     id: 4,
//     imageUrl: image_4,
//     className: "col-span-1 row-span-1",
//   },
//   {
//     id: 5,
//     imageUrl: image_5,
//     className: "col-span-1 row-span-1",
//   },
//   {
//     id: 6,
//     imageUrl: image_6,
//     className: "col-span-1 row-span-1",
//   },
// ];
export const GallerySection = () => {
  const navigate = useNavigate();
  const [galleryData, setGalleryData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const galleryItems = galleryData?.map((item, index) => ({
    id: item.id,
    imageUrl: item.image,
    className: "col-span-1 row-span-1",
    type: item.type,
  }));
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch(
          "https://naturalx.in/admin/api/getgallery?type=0"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response?.json();
        if (data.status === 1) {
          setGalleryData(data?.data?.data);
        } else {
          throw new Error("Failed to fetch gallery data");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  if (loading) {
    return <p>Loading gallery...</p>;
  }

  if (error) {
    return <p>Error loading gallery: {error}</p>;
  }

  return (
    <div
      id="pricing"
      className="min-h-screen bg-white   py-16  md:px-24 px-6"
      style={{ marginBottom: "-40px" }}
    >
      {/* Header Section */}
      <div className="text-center mt-2 mb-12">
        <h2 className="text-gray-600 text-sl font-bold mb-2">
          Exclusive gallery showcasing premium textures for elegant, timeless
          designs.
        </h2>
        <div className="relative inline-block">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="border-b-4 border-orange-500">Gallery</span>
          </h1>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryItems?.map((item, index) => {
          if (index >= 9) return null; // Stop rendering after index 7 (8 items total)
          return (
            <div
              key={item.id}
              className={`${item.className} rounded-lg overflow-hidden group`}
            >
              <div className="relative h-full w-full overflow-hidden">
                {item?.type === 1 ? (
                  // Render Image
                  <img
                    src={item.imageUrl}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-[550px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                ) : item?.type === 2 ? (
                  // Render Video
                  <video
                    src={item.imageUrl}
                    autoPlay
                    muted
                    loop
                    className="w-full h-[550px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                ) : null}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-5">
        <button
          className="px-8 py-3 bg-orange-600 text-white rounded-3xl hover:bg-orange-700 transition-colors text-lg"
          onClick={() => {
            navigate("/gallery");
          }}
        >
          View More
        </button>
      </div>
    </div>
  );
};
