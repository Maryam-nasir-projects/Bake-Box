
import ReviewCard from './ReviewCard'
import { reviews } from '../../data/reviews'

function ReviewSection() {
  let total = 0

  for (let i = 0; i < reviews.length; i++) {
    total += reviews[i].rating
  }

  const average = reviews.length > 0
    ? (total / reviews.length).toFixed(1)
    : 0

  return (
    <section className="reviews-section">
      <h2>What students say</h2>

      {reviews.length > 0 ? (
        <>
          <p>Average rating: {average}</p>

          <div className="reviews">
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                rating={review.rating}
                comment={review.comment}
              />
            ))}
          </div>
        </>
      ) : (
        <p>No reviews yet. Be the first!</p>
      )}
    </section>
  )
}

export default ReviewSection
