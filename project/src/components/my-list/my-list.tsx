import Logo from '../logo/logo';
import FilmCard from '../film-card/film-card';
import Footer from '../footer/footer';

function MyList() : JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmCard
            title = {'Fantastic Beasts: The Crimes of Grindelwald'}
            image = {'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}
          />
          <FilmCard
            title = {'Bohemian Rhapsody'}
            image = {'img/bohemian-rhapsody.jpg'}
          />
          <FilmCard
            title = {'Macbeth'}
            image = {'img/macbeth.jpg'}
          />
          <FilmCard
            title = {'Aviator'}
            image = {'img/aviator.jpg'}
          />
          <FilmCard
            title = {'We need to talk about Kevin'}
            image = {'img/we-need-to-talk-about-kevin.jpg'}
          />
          <FilmCard
            title = {'What We Do in the Shadows'}
            image = {'img/what-we-do-in-the-shadows.jpg'}
          />
          <FilmCard
            title = {'Revenant'}
            image = {'img/revenant.jpg'}
          />
          <FilmCard
            title = {'Johnny English'}
            image = {'img/johnny-english.jpg'}
          />
          <FilmCard
            title = {'Shutter Island'}
            image = {'img/shutter-island.jpg'}
          />
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default MyList;
