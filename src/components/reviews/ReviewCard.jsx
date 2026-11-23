
import Avatar from './Avatar'
import Rating from './Rating'

function ReviewCard({ name, comment }) {
  return (
    <div className="review">
      <Avatar />
      <div className="review-body">
        <h4>{name} <Rating /></h4>
        <p>{comment}</p>
      </div>
    </div>
  )
}

export default ReviewCard
