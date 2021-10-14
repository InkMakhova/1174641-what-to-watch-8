import {useState, FormEvent, ChangeEvent} from 'react';

const grades = ['1','2','3','4','5','6','7','8','9','10'];

function ReviewForm() : JSX.Element {
  const [userGrades, setUserGrades] = useState('1');
  const [userComment, setUserComment] = useState('');

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={(evt: FormEvent<HTMLFormElement>) => {
          evt.preventDefault();
        }}
      >
        <div className="rating">
          <div className="rating__stars">
            {grades.map((grade) => (
              <>
                <input
                  className="rating__input"
                  id={`star-${grade}`}
                  type="radio"
                  name="rating"
                  value={grade}
                  checked={grade >= userGrades}
                  onChange={() => {
                    setUserGrades(grade);
                  }}
                />
                <label className="rating__label" htmlFor={`star-${grade}`}>Rating {grade}</label>
              </>),
            ).reverse()}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text" id="review-text"
            placeholder="Review text"
            onChange={({target} : ChangeEvent<HTMLTextAreaElement>) => {
              setUserComment(target.value);
            }}
          >
            {userComment}
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
