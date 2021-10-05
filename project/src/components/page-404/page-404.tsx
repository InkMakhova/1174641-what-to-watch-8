import Footer from '../footer/footer';

function Page404() : JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
      </header>

      <div className="page-not-found">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__text">Oops! The page you were looking for was not found. </p>
        <a className="page-not-found__link" href="#">Back to home</a>
      </div>
      <Footer />
    </div>
  );
}

export default Page404;
