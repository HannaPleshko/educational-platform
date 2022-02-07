import { Link } from 'react-router-dom';
import header from './css/Header.module.css';

const NavItem = ({ id, title }) => {
    return (
        <Link to={'*'} className={header['nav-link']}>
            <div id={id} className="nav-link-text">{title}</div>
        </Link>
    );
};

export default NavItem;
