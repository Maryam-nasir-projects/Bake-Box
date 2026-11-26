
import ProductCard from "./ProductCard";
import { products } from "../../data/products.js";

function ProductSection() {
  return (
    <section className="products-section">
      <h2>Fresh from the oven</h2>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
            left={product.left}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
