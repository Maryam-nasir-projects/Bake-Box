
function ReviewCard({ name, rating, comment }) {
  return (
    <div className="review-card">
      <h3>{name}</h3>
      <p className="stars">{"★".repeat(rating)}</p>
      <p>{comment}</p>
    </div>
  )
}

export default ReviewCard
