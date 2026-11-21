import Badge from './Badge'

function BrownieCard() {
  const price = 450

  return (
    <div className="card">
      <h3>Brownies</h3>
      <p>Rs {price}</p>
      <Badge />
    </div>
  )
}

export default BrownieCard