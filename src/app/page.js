import Banner from "@/components/banner/banner";
import BigDealProduct from "@/components/bigDealProduct/bigDealProduct";
import Collection from "@/components/collection/collection";
import Customers from "@/components/customers/customers";
import Products from "@/components/products/page";
import Quality from "@/components/quality/quality";


export default function Home() {
  return (
    <div>
      <Banner/>
      <Quality/>
      <Products/>
      <Customers/>
      <Collection/>
      <BigDealProduct/>
    </div>
  );
}
