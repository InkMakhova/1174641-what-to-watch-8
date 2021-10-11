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
            name= {'Fantastic Beasts: The Crimes of Grindelwald'}
            previewImage= {'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}
          />
          <FilmCard
            name= {'Bohemian Rhapsody'}
            previewImage= {'img/bohemian-rhapsody.jpg'}
          />
          <FilmCard
            name= {'Macbeth'}
            previewImage= {'img/macbeth.jpg'}
          />
          <FilmCard
            name= {'Aviator'}
            previewImage= {'img/aviator.jpg'}
          />
          <FilmCard
            name= {'We need to talk about Kevin'}
            previewImage= {'img/we-need-to-talk-about-kevin.jpg'}
          />
          <FilmCard
            name= {'What We Do in the Shadows'}
            previewImage= {'img/what-we-do-in-the-shadows.jpg'}
          />
          <FilmCard
            name= {'Revenant'}
            previewImage= {'img/revenant.jpg'}
          />
          <FilmCard
            name= {'Johnny English'}
            previewImage= {'img/johnny-english.jpg'}
          />
          <FilmCard
            name= {'Shutter Island'}
            previewImage= {'img/shutter-island.jpg'}
          />
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default MyList;
