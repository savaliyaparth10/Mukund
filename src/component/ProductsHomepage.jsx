import React, { useCallback, useEffect, useMemo, useState } from "react";
import LoadingAM from "../assets/Frame 5.gif";
import { Calendar } from "lucide-react";
import img1 from "../assets/Cladding – Natural Stone & Tiles WordPress Theme/blog_post_1.webp";
import img2 from "../assets/Cladding – Natural Stone & Tiles WordPress Theme/blog_post_2.webp";
import img3 from "../assets/Cladding – Natural Stone & Tiles WordPress Theme/FSX-7993-615428_2048x.webp";
import img4 from "../assets/Cladding – Natural Stone & Tiles WordPress Theme/decorative_mosaic_tiles (1).webp";
import img5 from "../assets/Cladding – Natural Stone & Tiles WordPress Theme/product_10_2-1024x768.webp";
import img6 from "../assets/Cladding – Natural Stone & Tiles WordPress Theme/collection_image_1.webp";
import { useNavigate, useParams } from "react-router-dom";
// Sample Products data
const ProductsPosts = [
  {
    id: 1,
    title: "The Timeless Beauty of Marble: Enhancing Your Home's Aesthetics",
    date: "April 27, 2023",
    categories: ["Installation"],
    image: img1,
  },
  {
    id: 2,
    title: "Choosing the Perfect Tiles for Your Kitchen Renovation",
    date: "April 27, 2023",
    categories: ["Remodelling"],
    image: img2,
  },
  {
    id: 3,
    title: "Flooring Trends: Exploring the Latest Styles and Designs",
    date: "February 18, 2023",
    categories: ["Design", "Interior"],
    image: img3,
  },
  {
    id: 4,
    title: "Modern Interior Design Trends for 2023",
    date: "February 15, 2023",
    categories: ["Design", "Interior"],
    image: img4,
  },
  {
    id: 5,
    title: "Kitchen Renovation Guide: From Planning to Execution",
    date: "February 10, 2023",
    categories: ["Renovation", "Kitchen"],
    image: img5,
  },
  {
    id: 6,
    title: "Bathroom Remodeling: Contemporary Design Ideas",
    date: "February 5, 2023",
    categories: ["Remodeling", "Bathroom"],
    image: img6,
  },
];

export const ProductsHomepage = () => {
  const navigate = useNavigate();
  const { id, main_cat_id } = useParams();
  const [products, setProducts] = useState([]);
  console.log("🚀 ~ ProductsHomepage ~ products:", products);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setSelectedCategory(id);
  }, [id]);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await fetch(
        `https://naturalx.in/admin/api/get_category?main_cat_id=2`
      );
      if (!response.ok) throw new Error("Failed to fetch categories");
      const data = await response.json();
      setCategories(data?.data || []);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const fetchProducts = useCallback(
    async (page = 1) => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://naturalx.in/admin/api/getproduct?main_cat_id=${2}&cat_id=${
            selectedCategory || 0
          }&page=${page}`
        );
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        console.log("🚀 ~ data:", data);
        setProducts(data.data?.data);
        setTotalPages(data.data?.last_page);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    },
    [selectedCategory, id]
  );

  useEffect(() => {
    fetchProducts(currentPage);
  }, [fetchProducts, currentPage]);

  const memoizedProducts = useMemo(() => products, [products]);
  console.log("🚀 ~ ProductsHomepage ~ memoizedProducts:", memoizedProducts);

  if (isLoading)
    return (
      <div className="text-center py-24 mt-50 w-[100%] min-h-[80vh] flex justify-center items-center">
      <img src={LoadingAM} className="w-[70px] h-[70px]" alt="Loading" />
    </div>
    );
  if (error)
    return <p className="text-center py-20 text-red-500">Error: {error}</p>;

  return (
    <div className="container flex flex-col justify-center items-center mx-auto mt-12  px-8 py-8">
      {/* Header */}
      <header className="mb-8 sl:mb-4">
        <h1 className="text-5xl font-bold mb-8">Products</h1>
      </header>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {memoizedProducts?.map((post) => (
          <article
            key={post?.id}
            onClick={() => navigate(`/Products/${post?.id}`)}
            className="flex flex-col max-w-[450px] group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative rounded-lg overflow-hidden  mb-4">
              <img
                src={post?.image}
                alt={post?.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
              {/* Date and Categories */}
              <div className="flex items-center gap-4 text-gray-600 mb-2">
                <div className="flex gap-2">
                  {post?.category?.map((category, index) => (
                    <span key={index} className="text-sm">
                      {category}
                      {index < post?.category.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl text-left font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                {post?.title}
              </h2>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
