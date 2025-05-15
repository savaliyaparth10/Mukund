import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';

export const ProductDetail = () => {
  const [selectedTab, setSelectedTab] = useState('description');
  const [mainImage, setMainImage] = useState('https://marbleo.webdevia.com/wp-content/uploads/2023/04/product_15.webp');
  const [quantity, setQuantity] = useState(1);

  const thumbnails = [
    '/api/placeholder/100/100',
    '/api/placeholder/100/100'
  ];

  return (
    <div className="container mx-auto px-4  py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="relative mb-4">
            <img 
              src={mainImage} 
              alt="Product" 
              className="w-[400px] aspect-square object-cover"
            />
            <span className="absolute top-4 right-4 bg-[#1B3B36] text-white px-3 py-1">Sale!</span>
            <button className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg">
              <Search className="w-5 h-5" />
            </button>
          </div>
          <div className="flex gap-4">
            {thumbnails.map((thumb, idx) => (
              <button 
                key={idx}
                onClick={() => setMainImage(thumb)}
                className="w-24 aspect-square"
              >
                <img src={thumb} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Argos Black</h1>
          <div className="flex gap-2 items-center mb-6">
            <span className="line-through text-gray-500">$1,990.00</span>
            <span className="text-2xl font-bold">$1,890.00</span>
          </div>
          
          <p className="mb-8">
            Unleash the power of modern elegance with our exquisite "Argos Black" marble. 
            Crafted with meticulous attention to detail, this stunning natural stone exudes 
            an irresistible allure that will transform any space into a contemporary masterpiece.
          </p>

          <div className="mb-6">
            <label className="block mb-2">Quantity</label>
            <input 
              type="number" 
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 p-2 border rounded bg-[#FDF8F3]"
              min="1"
            />
          </div>

          <button className="bg-[#1B3B36] text-white px-8 py-3 rounded mb-8">
            Add to cart
          </button>

          <div className="text-sm">
            <p className="mb-2">Category: <a href="#" className="text-[#1B3B36]">Black Series</a></p>
            <p>Tags: 
              {['Modern', 'Natural', 'wood'].map((tag, idx) => (
                <a key={idx} href="#" className="text-[#1B3B36] ml-1">{tag}{idx < 2 && ','}</a>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <div className="border-b flex gap-8 mb-8">
          <button 
            onClick={() => setSelectedTab('description')}
            className={`pb-4 ${selectedTab === 'description' ? 'border-b-2 border-black' : ''}`}
          >
            Description
          </button>
          <button 
            onClick={() => setSelectedTab('reviews')}
            className={`pb-4 ${selectedTab === 'reviews' ? 'border-b-2 border-black' : ''}`}
          >
            Reviews (0)
          </button>
        </div>

        {selectedTab === 'description' && (
          <p>
            Unleash the power of modern elegance with our exquisite "Argos Black" marble. 
            Crafted with meticulous attention to detail, this stunning natural stone exudes 
            an irresistible allure that will transform any space into a contemporary masterpiece. 
            With its deep black backdrop and striking white veining, "Argos Black" marble offers 
            a captivating visual experience that will leave a lasting impression.
          </p>
        )}

        {selectedTab === 'reviews' && (
          <div>
            <p className="mb-4">There are no reviews yet.</p>
            <h3 className="text-2xl font-bold mb-4">Be the first to review "Argos Black"</h3>
            <p className="mb-4">Your email address will not be published. Required fields are marked *</p>
            
            <form className="space-y-4">
              <div>
                <label className="block mb-2">Your rating *</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} className="text-2xl text-gray-300">★</button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block mb-2">Your review *</label>
                <textarea className="w-full p-4 border rounded bg-[#FDF8F3] min-h-[200px]" />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};