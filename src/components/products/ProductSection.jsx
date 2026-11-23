
import ProductCard from './ProductCard'

function ProductSection() {
  return (
    <section className="products-section">
      <h2>Fresh from the oven</h2>

      <div className="products">
        <ProductCard
          name="Chocolate Brownies"
          price={450}
          description="Box of 6, fudgy and warm"
          badge="Bestseller"
        />

        <ProductCard
          name="Nankhatai Box"
          price={350}
          description="Box of 12, cardamom flavour"
          badge="New"
        />

        <ProductCard
          name="Cinnamon Rolls"
          price={500}
          description="Box of 4, with cream cheese"
          badge="Bestseller"
        />

        <ProductCard
          name="Chocolate Cookies"
          price={400}
          description="Freshly baked chocolate cookies"
          badge="New"
        />
      </div>
    </section>
  )
}

export default ProductSection
