import {AppRoute} from '../../const';
import React from 'react';
import {useHistory} from 'react-router-dom';

type PlayerButtonProps = {
  id: string;
}

function PlayerButton({id}: PlayerButtonProps): JSX.Element {
  const history = useHistory();

  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={() => history.push(`${AppRoute.Player}${id}`)}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default PlayerButton;
