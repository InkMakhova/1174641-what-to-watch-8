import {Film} from '../../types/film';

type ReviewProps = {
  film: Film;
  author: string;
  dateTime: string;
  dateText: string;
  quote: string;
  rating: number;
}

function Review({film, author, dateTime, dateText, quote, rating} : ReviewProps) : JSX.Element {
  const {id} = film;

  return (
    <div className="review" defaultValue={id}>
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
