import { Link, useParams } from 'react-router-dom';
import header from './css/Header.module.css';
import NavList from './NavList';
import { useAuth } from '../../hooks/auth.hook';

const Header = ({ titles }) => {
  const { _id } = useParams()
  console.log(_id);
  const { token } = useAuth();
  const isAuthenticated = !!token;
  const auth = useAuth();


  const doRegistration = () => { };
  
  const doLogout = () => {
    auth.logout();
  };

  return (
    <header className={header['nav-desktop-sticky']}>
      <nav className={header['nav-desktop']}>
        <Link to={'/'}>
          <div className={header['nav-logo-link']}></div>
        </Link>

        {(<NavList titles={titles} />)}

        {!isAuthenticated
          ? (<div className={header['nav-links-right']}>
            <Link to={'/login'} className={header['nav-link']}>
              <div>Login</div>
            </Link>
            <Link to={'/register'}>
              <div onClick={doRegistration} className={header['nav-btn']}>
                Sign up
              </div>
            </Link>
          </div>)
          : <Link onClick={doLogout} to={'/'} className={header['nav-link']}>
            <div>Log out</div>
          </Link>}
      </nav>
    </header>
  );
};

export default Header;
