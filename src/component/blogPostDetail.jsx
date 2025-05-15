import React from "react";
import img1 from "../assets/Cladding – Natural Stone & Tiles WordPress Theme/blog_post_1.webp";
import img2 from "../assets/Cladding – Natural Stone & Tiles WordPress Theme/blog_post_2.webp";

export const BlogPostDetail = () => {
  const post = {
    title: "The Timeless Beauty of Marble: Enhancing Your Home's Aesthetics",
    author: "admin",
    date: "April 27, 2023",
    category: "Installation",
    image: img1,
    image2: img2,
    content: `When choosing cabinet hardware for your kitchen, it is important to consider both the style of your kitchen and the function of the hardware. Will the hardware be used primarily for decoration, or will it be used for opening and closing cabinets? Do you want a traditional or a more modern look?

There are many different styles of cabinet hardware to choose from, so it is important to narrow down your options before making a final decision. Once you have decided on the style of hardware you prefer, you can then choose the material and finish that best suits your kitchen.

Cabinet hardware can be made from a variety of materials, including metal, glass, wood, and plastic. The most popular finishes for cabinet hardware are brass, chrome, and stainless steel.

If you are unsure of what style of cabinet hardware would best suit your kitchen, it is a good idea to consult with a kitchen designer or cabinet maker. They will be able to help you choose the right hardware for your specific needs.`,
    content2: `When choosing cabinet hardware for your kitchen, it is important to consider both the style of your kitchen and the function of the hardware. Will the hardware be used primarily for decoration, or will it be used for opening and closing cabinets? Do you want a traditional or a more modern look?

There are many different styles of cabinet hardware to choose from, so it is important to narrow down your options before making a final decision. Once you have decided on the style of hardware you prefer, you can then choose the material and finish that best suits your kitchen.

Cabinet hardware can be made from a variety of materials, including metal, glass, wood, and plastic. The most popular finishes for cabinet hardware are brass, chrome, and stainless steel.

If you are unsure of what style of cabinet hardware would best suit your kitchen, it is a good idea to consult with a kitchen designer or cabinet maker. They will be able to help you choose the right hardware for your specific needs.`,
  };

  return (
    <div className="max-w-5xl mt-16 mx-auto px-4 py-8">
      {/* Title Section */}
      <h1 className="lg:text-6xl md:text-4xl text-3xl text-left font-bold mb-6">
        {post.title}
      </h1>

      {/* Meta Information */}
      <div className="flex items-center gap-8 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 flex justify-center items-center text-xl rounded-full">
            A
          </div>
          <div>
            <span className="text-sm text-gray-600">Author</span>
            <p className="text-sm font-medium">{post.author}</p>
          </div>
        </div>

        <div>
          <span className="text-sm text-gray-600">Published</span>
          <p className="text-sm font-medium">{post.date}</p>
        </div>

        <div>
          <span className="text-sm text-gray-600">Categories</span>
          <p className="text-sm font-medium">{post.category}</p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Content */}
      <div className="prose max-w-none">
        {post.content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      {post.image2 && (
        <div className="mb-8">
          <img
            src={post.image2}
            alt={post.title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      )}
      {post.content2 && (
        <div className="prose max-w-none">
          {post.content2.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
