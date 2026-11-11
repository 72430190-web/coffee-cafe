import { useState } from 'react';
import '../allcss/Reviews.css';

const starterReviews = [
  { name: 'Maya', rating: 5, comment: 'Wonderful coffee and a cozy atmosphere. My favorite place to relax!' },
  { name: 'Karim', rating: 5, comment: 'Friendly staff and delicious cappuccino. Highly recommended!' },
  { name: 'Rana', rating: 4, comment: 'Lovely place to meet friends. The pastries are amazing.' }
];

export default function Reviews() {
  const [reviews, setReviews] = useState(starterReviews);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  function addReview(event) {
    event.preventDefault();
    if (!name.trim() || !comment.trim()) return;
    setReviews([{ name: name.trim(), rating: Number(rating), comment: comment.trim() }, ...reviews]);
    setName('');
    setRating(5);
    setComment('');
  }

  return (
    <main className="reviews-page">
      <section className="reviews-hero">
        <p className="reviews-eyebrow">COFFEE CAFE · COMMUNITY</p>
        <h1>Customer <em>Reviews</em></h1>
        <p>Good coffee tastes even better when shared. Here's what our guests say.</p>
      </section>
      <div className="container reviews-content">
        <h2>What Our Guests Say</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <article className="review-card" key={index}>
              <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
              <p>“{review.comment}”</p>
              <strong>— {review.name}</strong>
            </article>
          ))}
        </div>
        <section className="review-form-section">
          <h2>Leave a Review</h2>
          <p>We'd love to hear about your visit!</p>
          <form onSubmit={addReview} className="review-form">
            <label htmlFor="review-name">Your Name</label>
            <input id="review-name" value={name} onChange={e => setName(e.target.value)} maxLength="60" placeholder="Enter your name" required />
            <label htmlFor="review-rating">Your Rating</label>
            <select id="review-rating" value={rating} onChange={e => setRating(e.target.value)}>
              <option value="5">★★★★★ — Excellent</option>
              <option value="4">★★★★☆ — Very Good</option>
              <option value="3">★★★☆☆ — Good</option>
              <option value="2">★★☆☆☆ — Fair</option>
              <option value="1">★☆☆☆☆ — Poor</option>
            </select>
            <label htmlFor="review-comment">Your Review</label>
            <textarea id="review-comment" rows="4" value={comment} onChange={e => setComment(e.target.value)} maxLength="500" placeholder="Tell us about your experience..." required />
            <button type="submit">Submit Review</button>
          </form>
          <small>Reviews added here are displayed during this visit only.</small>
        </section>
      </div>
    </main>
  );
}
