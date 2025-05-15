import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingAM from "../assets/Frame 5.gif";

export const ProfessionalCollections = () => {
  const navigate = useNavigate();
  const { id, name } = useParams();
  const [mainCategories, setMainCategories] = useState([]);
  const [selectedMainCatId, setSelectedMainCatId] = useState(null);
  const [collections, setCollections] = useState([]);
  console.log("🚀 ~ ProfessionalCollections ~ collections:", collections);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch main categories
  useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        const response = await fetch(
          "https://naturalx.in/admin/api/get_main_category"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch main categories");
        }
        const data = await response.json();
        setMainCategories(data.data || []);
        setSelectedMainCatId(data.data[0]?.id || null);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      }
    };

    fetchMainCategories();
  }, []);

  // Fetch categories based on selected main category
  useEffect(() => {
    if (!selectedMainCatId) return;

    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://naturalx.in/admin/api/get_category?main_cat_id=${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCollections(data.data || []);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, [selectedMainCatId, id]);

  if (isLoading)
    return (
      <div className="text-center py-24 mt-50 w-[100%] min-h-[80vh] flex justify-center items-center">
        <img src={LoadingAM} className="w-[70px] h-[70px]" alt="Loading" />
      </div>
    );

  if (error) {
    return <p className="text-center py-20 text-red-500">Error: {error}</p>;
  }

  return (
    <div
      id="Collections"
      className="min-h-screen bg-white py-12 px-6 md:px-14"
      // style={{ marginBottom: "-130px" }}
    >
      {/* Header Section */}
      <div className="text-left py-16 px-4">
        {
          // <p className="text-gray-600 text-sm font-bold mb-2">
          //   YOUR DREAM HOME AWAITS
          // </p>
        }{" "}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight px-2 sm:px-0">
          Professional{" "}
          <span className="border-b-2 sm:border-b-4 border-orange-500">
            Products
          </span>{" "}
          / <span className="text-gray-500 font-[500]">{name}</span>
        </h1>
      </div>
      {/* Tabs for Main Categories */}
      {/* Collections Grid */}
      <div className="mb-4 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {collections?.map((collection) => (
            <div
              key={collection.id}
              className="group relative aspect-square w-full overflow-hidden rounded-lg cursor-pointer"
              onClick={() =>
                navigate(`/collections/${collection.id}/${id}`)
              }
            >
              <img
                src={collection.image}
                alt={collection.name || "Collection Image"}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
                  {collection.name}
                </h3>
                <p className="text-white/90 text-sm transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 line-clamp-3">
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Call to Action */}
      {
        // <div className="text-center pb-16">
        //   <button
        //     className="px-6 py-3 bg-orange-600 text-white rounded-3xl hover:bg-orange-700 transition-colors"
        //     onClick={() => navigate(`/collections/0/${selectedMainCatId}`)}
        //   >
        //     Explore All Products
        //   </button>
        // </div>
      }{" "}
    </div>
  );
};
