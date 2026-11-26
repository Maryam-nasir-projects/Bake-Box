import Badge from "./Badge";

function ProductCard({ name, price, inStock, left }) {
  return (
    <div className="card">
      {!inStock && <Badge text="Sold out" />}

      <h3>{name}</h3>

      <p className="price">Rs {price}</p>

      {inStock && left < 5 && <p className="low-stock">Only {left} left!</p>}

      {inStock ? (
        <button className="add-btn">Add to box</button>
      ) : (
        <button className="unavailable-btn" disabled>
          Unavailable
        </button>
      )}
    </div>
  );
}

export default ProductCard;
