"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Link from "next/link";


const ProductCard = ({ title, products }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Responsive logic
  const updateItemsPerPage = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width >= 1024) setItemsPerPage(4);
      else if (width >= 768) setItemsPerPage(1);
      else setItemsPerPage(1);
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalItems = products.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= totalItems ? totalItems - itemsPerPage : prevIndex + 2
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 < 0 ? 0 : prevIndex - 2));
  };

  return (
    <div className="mb-5">
      <div className="overflow-hidden">
        {/* Header Section */}
        <div className="flex items-center justify-between px-2">
          <h1 className="text-2xl md:text-3xl tracking-normal">{title}</h1>
          <div className="flex space-x-4 items-center justify-center">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`flex items-center justify-center w-9 border-2 border-[#7E53D4] h-9 rounded-full transition-all duration-300 ${currentIndex === 0
                ? "text-gray-300 border-gray-300 cursor-not-allowed"
                : "hover:text-white hover:bg-[#7E53D4] text-[#7E53D4]"
                }`}
              aria-label="Left Arrow"
            >
              <FiArrowLeft className="w-6 h-6" />
            </button>
            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={currentIndex + itemsPerPage >= totalItems}
              className={`flex items-center justify-center w-9 border-2 border-[#7E53D4] h-9 rounded-full transition-all duration-300 ${currentIndex + itemsPerPage >= totalItems
                ? "text-gray-300 border-gray-300 cursor-not-allowed"
                : "hover:text-white hover:bg-[#7E53D4] text-[#7E53D4]"
                }`}
              aria-label="Right Arrow"
            >
              <FiArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative mt-8">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex / totalItems) * 100}%)`,
              width: `${(totalItems / itemsPerPage) * 100}%`,
            }}
          >
            {products.map((p) => (
              <div
                key={p.price}
                className={`flex-none w-[312px] px-3  `}
              >
                <div className="bg-white p-2 shadow-sm rounded-xl overflow-hidden">
                <Link href={`product/${p.id}`} >
                  <Image
                    className="bg-bgcolor h-72"
                    src={p.image}
                    height={150}
                    width={500}
                    alt={p.name}
                  />
                  </Link> 
                  <div className="w-full py-5">
                    <div className="flex gap-1 items-center tracking-wide justify-between">
                      <p className="text-[16px] text-[#1D1D1D] font-[400]">{p.name}</p>
                      <p className="text-[19px] text-[#1D1D1D] ">{p.price}</p>
                    </div>
                    <Link href={`product/${p.id}`} >
                    <button className="w-full px-10 mt-5 rounded-[7px] py-[7px] border text-[16px] hover:bg-[#6F42C1] duration-500 border-[#7E53D4] tracking-wide hover:text-white">
                      Add to cart
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

