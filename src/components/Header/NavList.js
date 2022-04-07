import header from './css/Header.module.css';
import NavItem from './NavItem';

const NavList = ({ titles }) => {
    return (
        <div className={header['nav-links-center']}>
            {titles.map((item) => (
                <NavItem key={item.id} title={item.title} {...item} />
            ))}
        </div>
    );
};

export default NavList;
