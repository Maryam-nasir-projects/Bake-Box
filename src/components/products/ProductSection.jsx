
import ProductCard from './ProductCard'

function ProductSection() {
  return (
    <section className="products-section">
      <h2>Fresh from the oven</h2>

      <div className="products">
        <ProductCard
          name="Brownies"
          price={450}
          description="Delicious chocolate brownies"
        />

        <ProductCard
          name="Nankhatai"
          price={350}
          description="Traditional homemade cookies"
        />

        <ProductCard
          name="Roll"
          price={500}
          description="Freshly baked rolls"
        />
      </div>
    </section>
  )
}

export default ProductSection
