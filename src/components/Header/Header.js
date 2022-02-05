import { Link } from 'react-router-dom';
import header from './css/Header.module.css';
import NavList from './NavList';

const Header = ({ setTitle }) => {
  const doRegistration = () => {};

  return (
    <header className={header['nav-desktop-sticky']}>
      <nav className={header['nav-desktop']}>
        <Link to={'/'}>
          <div className={header['nav-logo-link']}></div>
        </Link>

        {( <NavList setTitle={setTitle} />)}

        <div className={header['nav-links-right']}>
          <Link to={'/login'} className={header['nav-link']}>
            <div className={header['nav-link-text']}>Login</div>
          </Link>
          <Link to={'/register'}>
            <div onClick={doRegistration} className={header['nav-btn']}>
              Sign up
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
