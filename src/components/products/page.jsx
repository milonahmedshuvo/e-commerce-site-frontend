import ProductCard from "../product/prodcutCard"

import img1 from "../../images/productImg/icon (1).png";
import img2 from "../../images/productImg/img2.png";
import img3 from "../../images/productImg/img3.png";
import img4 from "../../images/productImg/img4.png";



const Products = () => {
  const products = [
    { id: 1, name: "Indian Sharee", price: "BDT 2,300", image: img1 },
    { id: 2, name: "Hoodie", price: "BDT 3,500", image: img2 },
    { id: 3, name: "Plazu", price: "BDT 2,800", image: img3 },
    { id: 4, name: "Jacket", price: "BDT 4,000", image: img4 },
    { id: 5, name: "Indian Sharee", price: "BDT 4,100", image: img1 },
    { id: 6, name: "Plazu", price: "BDT 4,500", image: img3 },
    { id: 6, name: "Hoodie", price: "BDT 4,600", image: img2 },
    { id: 6, name: "Indian Sharee", price: "BDT 4,700", image: img1 },
    { id: 6, name: "Plazu", price: "BDT 4,800", image: img3 },
    { id: 6, name: "Hoodie", price: "BDT 4,900", image: img2 },
    { id: 6, name: "Indian Sharee", price: "BDT 4,200", image: img1 },
  ];


  return (
    <div className="px-5 md:px-8 mt-16 md:mt-24 mb-20">
        <h2 className="text-textBlue px-2">FEATURED PRODUCT</h2>
        <ProductCard title='New Arrivals' products={products} ></ProductCard>

        <div className="text-center">
          <button className=" px-10 rounded-lg py-2 border text-[17px] divide-purple-300 hover:bg-[#6F42C1] duration-500 bg-[#7E53D4] tracking-wide text-white">
            See moredd
          </button>
        </div>
    </div>
  )
}

export default Products;