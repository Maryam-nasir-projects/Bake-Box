
import { cart } from "../../data/cart";

export default function CartSummary() {
  let subtotal = 0;

  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price * cart[i].qty;
  }

  const delivery = subtotal >= 3000 ? 0 : 100;

  const total = subtotal + delivery;

  return (
    <section>
      <h2>Your box</h2>

      {cart.length === 0 ? (
        <p>Your box is empty. Add something yummy!</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <p>
                {item.name} × {item.qty}
              </p>

              <p>Rs. {item.price * item.qty}</p>
            </div>
          ))}

          <hr />

          <p>Subtotal: Rs. {subtotal}</p>

          <p>
            Delivery: {delivery === 0 ? "Free" : `Rs. ${delivery}`}
          </p>

          <h3>Total: Rs. {total}</h3>
        </>
      )}
    </section>
  );
}
