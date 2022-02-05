import { Link } from 'react-router-dom';
import header from './css/Header.module.css';

const NavItem = ({ navTitle }) => {
    return (
        <Link to={'*'} className={header['nav-link']}>
            <div className="nav-link-text">{navTitle}</div>
        </Link>
    );
};

export default NavItem;
