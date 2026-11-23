import Badge from './Badge'

function ProductCard({ name, price, description }) {
  return (
    <div className="card">
      <Badge text="Bestseller" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Rs{price}</p>
    </div>
  )
}

export default ProductCard