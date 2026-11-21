import Badge from './Badge'

function NankhataiCard() {
  const price = 300

  return (
    <div className="card">
      <h3>Nankhatai</h3>
      <p>Rs {price}</p>
      <Badge />
    </div>
  )
}

export default NankhataiCard