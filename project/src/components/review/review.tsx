type ReviewProps = {
  author: string;
  dateTime: string;
  dateText: string;
  quote: string;
  rating: number;
}

function Review({author, dateTime, dateText, quote, rating} : ReviewProps) : JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{quote}
        </p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={dateTime}>{dateText}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;
