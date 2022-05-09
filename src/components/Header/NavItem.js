import { Link } from 'react-router-dom';
import header from './css/Header.module.css';
import { Button } from '@mui/material';

const NavItem = ({ id, title }) => {
  return (
    <Link to={'*'} className={header['nav-link']}>
      <Button id={id} variant="default">
        {title}
      </Button>
    </Link>
  );
};

export default NavItem;
