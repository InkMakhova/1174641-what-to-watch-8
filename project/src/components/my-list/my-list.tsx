import Logo from '../logo/logo';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';
import UserBlock from '../user-block/user-block';
import {useEffect} from 'react';
import {store} from '../../index';
import {fetchFavoriteFilms} from '../../store/api-actions';
import {useSelector} from 'react-redux';
import {getFavoriteFilms} from '../../store/user-process/selectors';

function MyList() : JSX.Element {
  useEffect(() => {
    store.dispatch(fetchFavoriteFilms());
  }, []);

  const favoriteFilms = useSelector(getFavoriteFilms);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList
          filmsCount={favoriteFilms.length}
          films={favoriteFilms}
        />
      </section>

      <Footer/>
    </div>
  );
}

export default MyList;
