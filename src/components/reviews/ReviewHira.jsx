import Avatar from './Avatar'
import Rating from './Rating'

function ReviewHira() {
  return (
    <div className="review">
      <Avatar />
      <div className="review-body">
        <h4>Hira M. <Rating /></h4>
        <p>The nankhatai tasted just like my grandmother's.</p>
      </div>
    </div>
  )
}

export default ReviewHira