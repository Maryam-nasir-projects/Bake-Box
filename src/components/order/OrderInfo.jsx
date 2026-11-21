function OrderInfo() {
  const quantity = 5
  const price = 450
  const delivery = 100
  const total = quantity * price + delivery

  return (
    <section className="order">
      <h2>Your Order</h2>
      <p>Brownies: {quantity} x Rs {price}</p>
      <p>Delivery: Rs {delivery}</p>
      <p className="total">Total: Rs {total}</p>
    </section>
  )
}

export default OrderInfo