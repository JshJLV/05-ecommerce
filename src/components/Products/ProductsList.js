import CardLarge from "../Cards/CardLarge";
import { products } from "../../data/products";

function ProductsList() {
  return (
    <div className="m-auto">
      <div>Banner de la marca</div>
      <div className="md:w-11/12 flex flex-wrap justify-around m-auto">
        {products.map((item, index) => {
          return <CardLarge item={item} index={index} />;
        })}
      </div>
    </div>
  );
}

export default ProductsList;
