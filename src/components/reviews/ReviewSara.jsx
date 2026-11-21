import Avatar from './Avatar'
import Rating from './Rating'

function ReviewSara() {
  return (
    <div className="review">
      <Avatar />
      <div className="review-body">
        <h4>Sara A. <Rating /></h4>
        <p>Best brownies on campus. I ordered twice in one week!</p>
      </div>
    </div>
  )
}

export default ReviewSara