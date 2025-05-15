import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import ProductDetailModal from "./ProductDetailModal";
import LoadingAM from "../assets/Frame 5.gif";

export const ProductGridmainSection = () => {
  const { id, main_cat_id } = useParams();
  const [products, setProducts] = useState([]);
  console.log("🚀 ~ ProductGridmainSection ~ products:", products);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [imageLoading, setImageLoading] = useState({});

  useEffect(() => {
    setSelectedCategory(id);
  }, [id]);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await fetch(
        `https://naturalx.in/admin/api/get_category?main_cat_id=${main_cat_id}`
      );
      if (!response.ok) throw new Error("Failed to fetch categories");
      const data = await response.json();
      setCategories(data?.data || []);
    } catch (err) {
      setError(err.message);
    }
  }, [main_cat_id]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const fetchProducts = useCallback(
    async (page = 1) => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://naturalx.in/admin/api/getproduct?main_cat_id=${main_cat_id}&cat_id=${
            selectedCategory || id
          }&page=${page}`
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
    },
    [selectedCategory, id, main_cat_id]
  );

  useEffect(() => {
    fetchProducts(currentPage);
  }, [fetchProducts, currentPage]);

  const memoizedProducts = useMemo(() => products, [products]);
  console.log(
    "🚀 ~ ProductGridmainSection ~ memoizedProducts:",
    memoizedProducts
  );

  if (isLoading)
    return (
      <div className="text-center py-24 mt-50 w-[100%] min-h-[80vh] flex justify-center items-center">
        <img src={LoadingAM} className="w-[70px] h-[70px]" alt="Loading" />
      </div>
    );
  if (error)
    return <p className="text-center py-20 text-red-500">Error: {error}</p>;

  return (
    <section className="container min-h-[67vh] py-20 mx-auto px-8 md:px-12 lg:px-24">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight ">
        Professional Products Pattern
      </h1>

      {/* Category Dropdown */}
      <div className="flex justify-between mt-4 md:flex-row items-center mb-8 gap-4">
        <div className="flex justify-between items-center">
          <label
            htmlFor="categoryFilter"
            className="text-sm text-gray-900 font-semibold"
          >
            Filter by Pattern:
          </label>
          <select
            id="categoryFilter"
            className="border rounded px-4 py-2 bg-white text-gray-900"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value={0}>All</option>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category?.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {memoizedProducts?.map((product) => (
          <article
            key={product.id}
            className="group relative bg-white rounded-lg overflow-hidden"
          >
            <div className="relative mb-4">
              <a
                href={`/product/${product.id}/${currentPage}/${main_cat_id}/${
                  selectedCategory || id
                }/${product.title}`}
                className="block"
                aria-label={`View details for ${product.title}`}
              >
                {imageLoading[product.id] ? (
                  <img
                    src={LoadingAM}
                    className="w-[70px] h-[70px] mx-auto"
                    alt="Loading"
                  />
                ) : (
                  <img
                    src={product.image}
                    alt={
                      product.title
                        ? `Image of ${product.title}`
                        : "Product image"
                    }
                    loading="lazy"
                    width="300"
                    height="300"
                    className="w-full h-[300px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    onLoad={() =>
                      setImageLoading((prev) => ({
                        ...prev,
                        [product.id]: false,
                      }))
                    }
                  />
                )}
              </a>
              {
                // <button
                //   onClick={() => setSelectedProduct(product)}
                //   className="absolute top-2 right-2 bg-orange-600 text-white hover:bg-orange-700 px-3 py-1 rounded"
                //   aria-label={`Get in touch about ${product.title}`}
                // >
                //   Get in touch
                // </button>
              }{" "}
            </div>
            <h3 className="text-lg font-semibold mb-1 text-gray-900">
              {product.title}
            </h3>
            <p className="text-sm text-gray-700">{product.category}</p>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 text-gray-600"
              : "bg-orange-600 text-white hover:bg-orange-700"
          }`}
          aria-label="Previous Page"
        >
          Previous
        </button>
        <span className="px-4 py-2 font-bold text-gray-900">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages || !products}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages || !products
              ? "bg-gray-300 text-gray-600"
              : "bg-orange-600 text-white hover:bg-orange-700"
          }`}
          aria-label="Next Page"
        >
          Next
        </button>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};
