import ReviewSara from './ReviewSara'
import ReviewHira from './ReviewHira'

function ReviewSection() {
  return (
    <section className="reviews-section">
      <h2>What students say</h2>
      <div className="reviews">
        <ReviewSara />
        <ReviewHira />
      </div>
    </section>
  )
}

export default ReviewSection