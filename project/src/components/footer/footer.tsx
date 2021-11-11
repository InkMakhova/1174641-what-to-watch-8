import Logo from '../logo/logo';
import React from 'react';

function Footer() : JSX.Element {
  return (
    <footer className="page-footer">
      <div className="logo">
        <Logo
          extraClassNameProp={' logo__link--light'}
        />
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
