import { Link, useParams } from 'react-router-dom';
import header from './css/Header.module.css';
import NavList from './NavList';
import { useAuth } from '../../hooks/auth.hook';
import { Button } from '@mui/material';

const Header = ({ titles }) => {
  const { token } = useAuth();
  const isAuthenticated = !!token;
  const auth = useAuth();

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
              <Button variant="default">Login</Button>
            </Link>
            <Link to={'/register'}>
              <Button variant="outlined" color="primary">
                Sign up
              </Button>
            </Link>
          </div>)
          :
          <Link onClick={doLogout} to={'/'} className={header['nav-links-right']}>
            <Button variant="outlined" color="primary">
              Log out
            </Button>
          </Link>}
      </nav>
    </header>
  );
};

export default Header;
