"use client"
import { useState, useEffect } from "react";
import Image from "next/image";



const DealProductCard = ({ products }) => {


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
    <div className="mb-10">
      <div className="overflow-hidden">

        {/* Slider Section */}
        <div className="relative ">
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
                  <Image
                    className="bg-bgcolor h-72"
                    src={p.image}
                    height={150}
                    width={500}
                    alt={p.name}
                  />
                  <div className="w-full pt-5">
                    <div className="flex gap-1 items-center tracking-wide justify-between">
                      <p className="text-[17px] text-gray-500">{p.name}</p>
                      <p className="text-xl text-gray-600 font-semibold">{p.price}</p>
                    </div>
                    <button className="w-full px-10 mt-5 rounded-[7px] py-[7px] border text-[16px] hover:bg-[#6F42C1] duration-500 border-[#7E53D4] tracking-wide hover:text-white">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="text-center mt-8">
        <button className=" px-10 rounded-lg py-2 border text-[17px] divide-purple-300 hover:bg-[#6F42C1] duration-500 bg-[#7E53D4] tracking-wide text-white">
          See more
        </button>
      </div>

    </div>
  );
};

export default DealProductCard;

