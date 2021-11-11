import {State} from '../../types/state';
import {Dispatch} from 'redux';
import {changeFilmNumberLimit, changeLimitCounter} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';
import {getFilmNumberLimit, getLimitCounter} from '../../store/catalog-process/selectors';

const mapStateToProps = (state: State) => ({
  limitCounter: getLimitCounter(state),
  filmNumberLimit: getFilmNumberLimit(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onShowMore() {
    dispatch(changeLimitCounter());
    dispatch(changeFilmNumberLimit());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function ShowMore({onShowMore}: PropsFromRedux): JSX.Element {
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

export {ShowMore};
export default connector(ShowMore);
