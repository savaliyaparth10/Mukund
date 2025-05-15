import React, { useEffect, useState } from "react";

export const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  console.log("🚀 ~ Gallery ~ galleryData:", galleryData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    const fetchGalleryData = async (page) => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://naturalx.in/admin/api/getgallery?type=0&page=${page}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data.status === 1) {
          setGalleryData(data.data.data);
          setLastPage(data.data.last_page);
        } else {
          throw new Error("Failed to fetch gallery data");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData(currentPage);
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (loading) {
    return <p>Loading gallery...</p>;
  }

  if (error) {
    return <p>Error loading gallery: {error}</p>;
  }

  return (
    <div className="container mx-auto px-4 mt-12 lg:px-24 py-8">
      <h1 className="text-6xl font-bold lg:mb-12 md:mb-8 mb-6">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryData?.map((media, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg group"
          >
            <a
              href={media.image}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {media?.type === 1 ? (
                // Render Image
                <img
                  src={media.image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-[550px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              ) : media?.type === 2 ? (
                // Render Video
                <video
                  src={media.image}
                  autoPlay
                  muted
                  loop                
                  className="w-full h-[550px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              ) : null}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300"
              : "bg-orange-500 text-white hover:bg-orange-700"
          }`}
        >
          Previous
        </button>
        <span className="px-4 py-2 font-bold">
          Page {currentPage} of {lastPage}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === lastPage}
          className={`px-4 py-2 rounded-lg ${
            currentPage === lastPage
              ? "bg-gray-300"
              : "bg-orange-500 text-white hover:bg-orange-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
