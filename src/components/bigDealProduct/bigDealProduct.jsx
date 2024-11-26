import ProductCard from "../product/prodcutCard";


import img1 from "../../images/images1.png";
import img2 from "../../images/images2.png";
import img3 from "../../images/images3.png";
import img4 from "../../images/images4.png";
import DealProductCard from "./DealProductDatails";


const BigDealProduct = () => {
  const products = [
    { id: 1, name: "Indian Sharee", price: "BDT 2,300", image: img1 },
    { id: 2, name: "Dahka Sharee", price: "BDT 3,500", image: img2 },
    { id: 3, name: "Indian Sharee", price: "BDT 2,800", image: img3 },
    { id: 4, name: "Indian Sharee", price: "BDT 4,000", image: img4 },
    { id: 5, name: "Indian Sharee", price: "BDT 4,100", image: img1 },
    { id: 6, name: "Indian Sharee", price: "BDT 4,500", image: img1 },
    { id: 6, name: "Indian Sharee", price: "BDT 4,600", image: img1 },
    { id: 6, name: "Indian Sharee", price: "BDT 4,700", image: img1 },
    { id: 6, name: "Indian Sharee", price: "BDT 4,800", image: img1 },
    { id: 6, name: "Indian Sharee", price: "BDT 4,900", image: img1 },
    { id: 6, name: "Indian Sharee", price: "BDT 4,200", image: img1 },
  ];



  return (
    <div className="px-5 md:px-8 mt-24">
      <h2 className="text-textBlue px-2">SUMMER</h2>

      <ProductCard title='Big Deal' products={products} ></ProductCard>

      <DealProductCard title='Big Deal' products={products} ></DealProductCard>
    </div>
  )
}

export default BigDealProduct;