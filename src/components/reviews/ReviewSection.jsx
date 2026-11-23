
import ReviewCard from './ReviewCard'

function ReviewSection() {
  return (
    <section className="reviews-section">
      <h2>What students say</h2>
      <div className="reviews">
        <ReviewCard
          name="Sara A."
          comment="Best brownies on campus. I ordered twice in one week!"
        />

        <ReviewCard
          name="Hira M."
          comment="The nankhatai tasted just like my grandmother's."
        />
      </div>
    </section>
  )
}

export default ReviewSection
