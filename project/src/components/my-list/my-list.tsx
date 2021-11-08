import Logo from '../logo/logo';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';
import {Film} from '../../types/film';
import UserBlock from '../user-block/user-block';
import {FilmListType} from '../../const';

type MyListProps = {
  myFilms: Film[];
}

function MyList({myFilms} : MyListProps) : JSX.Element {
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
          filmsCount={9}
          listType={FilmListType.UserList}
        />
      </section>

      <Footer/>
    </div>
  );
}

export default MyList;
