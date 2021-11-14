import {changeFilmNumberLimit, changeLimitCounter} from '../../store/action';
import {useDispatch} from 'react-redux';

function ShowMore(): JSX.Element {
  const dispatch = useDispatch();

  const onShowMore = () => {
    dispatch(changeLimitCounter());
    dispatch(changeFilmNumberLimit());
  };

  return (
    <div className='catalog__more'>
      <button
        className='catalog__button'
        type='button'
        onClick={() : void => {
          onShowMore();
        }}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMore;
