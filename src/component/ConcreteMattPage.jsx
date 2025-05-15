import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const ConcreteMattPage = () => {
  const { id, page, main_cat_id, CategoryId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://naturalx.in/admin/api/getproduct?main_cat_id=${main_cat_id}&cat_id=${CategoryId}&page=${page}`
      );
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data.data?.data);
      setTotalPages(data.data?.last_page);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [selectedCategory, id, main_cat_id]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const memoizedProducts = useMemo(() => products, [products]);
  const selectedProduct = memoizedProducts?.find(
    (product) => product.id === parseInt(id)
  );

  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    setMainImage(selectedProduct?.image);
  }, [selectedProduct]);

  const thumbnails = [
    selectedProduct?.image,
    ...(selectedProduct?.gallery?.map((imgObj) => imgObj.img) || []),
  ].filter(Boolean);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const otherProducts = memoizedProducts
    .filter((product) => product.id !== parseInt(id))
    .slice(0, 3);

  const businessPhoneNumber = "+91 99988 52256";
  const whatsappMessage = `Hello! I am interested in *${selectedProduct?.title}*.
Category: ${selectedProduct?.category}
Description: ${selectedProduct?.description}

Can you provide more details?`;

  const displayedThumbnails = showAll ? thumbnails : thumbnails.slice(0, 4);

  const handleWhatsAppClick = () => {
    const whatsappUrl = `whatsapp://send?phone=${businessPhoneNumber}&text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.location.href = whatsappUrl; // Tries to open the WhatsApp app
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-12">
      <Helmet>
        <title>{`${selectedProduct?.title} - Professional Products Pattern`}</title>
        <meta
          name="description"
          content={`Discover ${selectedProduct?.title}, a professional product pattern in the category of ${selectedProduct?.category}. Learn more about its features and benefits.`}
        />
        <meta
          name="keywords"
          content={`${selectedProduct?.title}, professional products, ${selectedProduct?.category}, product details`}
        />
        <meta
          property="og:title"
          content={`${selectedProduct?.title} - Professional Products Pattern`}
        />
        <meta
          property="og:description"
          content={`Discover ${selectedProduct?.title}, a professional product pattern in the category of ${selectedProduct?.category}. Learn more about its features and benefits.`}
        />
        <meta property="og:image" content={selectedProduct?.image} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <h2 className="text-xl mb-4 sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight ">
        Professional Products Pattern:
        <span className="border-b-4 border-orange-500 ml-2">
          {selectedProduct?.title}
        </span>
      </h2>

      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-8">
        {/* Left Side - Image Gallery */}
        <div className="flex flex-col space-y-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <a href={mainImage} target="_blank" rel="noopener noreferrer">
              <img
                src={mainImage}
                alt={`${selectedProduct?.title} - Concrete Matt finish`}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover cursor-pointer"
              />
            </a>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {displayedThumbnails.map((thumb, index) => (
              <div
                key={index}
                className="relative bg-white rounded-md overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition duration-300"
                onClick={() => handleThumbnailClick(thumb)}
              >
                <img
                  src={thumb}
                  alt={`Thumbnail ${index + 1} of ${selectedProduct?.title}`}
                  className="w-full h-20 sm:h-24 object-cover"
                />
                {/* Show "+X more" overlay on 4th image if more images exist */}
                {!showAll && index === 3 && thumbnails.length > 4 && (
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-sm sm:text-base font-semibold"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering handleThumbnailClick
                      setShowAll(true);
                    }}
                  >
                    +{thumbnails.length - 4} more
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
            {selectedProduct?.title}
          </h1>

          <div className="prose prose-lg text-gray-600">
            <p>{selectedProduct?.description}</p>
          </div>

          <p className="text-sm text-gray-600">
            Product:{" "}
            <span className="font-medium">{selectedProduct?.category}</span>
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="w-full flex items-center justify-center bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-500 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.373 0 0 4.99 0 11.143c0 2.144.606 4.233 1.756 6.034L.098 23.375l6.449-1.663a11.877 11.877 0 005.453 1.363h.002c6.627 0 12-4.99 12-11.143C24 4.99 18.627 0 12 0zm0 20.571a9.363 9.363 0 01-4.863-1.325l-.347-.21-3.829 1.01 1.02-3.605-.226-.37a9.161 9.161 0 01-1.397-4.427c0-4.998 4.477-9.071 10-9.071s10 4.073 10 9.071-4.477 9.072-10 9.072zm5.45-7.196c-.298-.149-1.763-.87-2.036-.97-.273-.1-.472-.149-.671.149s-.77.97-.947 1.168c-.173.199-.347.224-.645.075-.298-.149-1.259-.464-2.4-1.479-.886-.79-1.484-1.767-1.659-2.065s-.018-.461.131-.61c.135-.135.298-.347.447-.521.151-.174.2-.299.3-.498.1-.198.05-.373-.025-.521-.075-.149-.671-1.619-.92-2.22-.243-.583-.488-.505-.671-.515-.173-.008-.372-.009-.571-.009s-.523.075-.797.373c-.274.298-1.048 1.022-1.048 2.494s1.074 2.895 1.223 3.097c.15.199 2.11 3.223 5.133 4.521.718.31 1.278.495 1.717.634.722.229 1.377.197 1.894.12.577-.088 1.763-.72 2.01-1.415.248-.695.248-1.29.173-1.415-.074-.124-.273-.198-.571-.347z"
                clipRule="evenodd"
              />
            </svg>
            Request a Quote on WhatsApp
          </button>
        </div>
      </div>

      {/* Other Products Section */}
      <div className="mt-20 text-start text-xl font-semibold text-gray-900 border-b-2 pb-4">
        Related Other Products Pattern
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {otherProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2 sm:mb-3">
              {product.title}
            </h3>
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              className="w-full h-[180px] sm:h-[200px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-600 text-sm sm:text-base mt-2 sm:mt-3">
              {product.description}
            </p>
            <div className="mt-3">
              <a
                href={`/product/${product.id}/${page}/${main_cat_id}/${CategoryId}/${product.title}`}
                className="block text-blue-600 hover:underline"
              >
                View Product →
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <a
          href={`/collections/${CategoryId}/${main_cat_id}`} // Adjust URL as per your routing
          className="inline-block bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition duration-300"
        >
          See All Patterns
        </a>
      </div>
    </div>
  );
};

export default ConcreteMattPage;
