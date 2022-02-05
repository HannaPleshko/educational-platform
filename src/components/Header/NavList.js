import header from './css/Header.module.css';
import NavItem from './NavItem';

const NavList = ({ setTitle }) => {
    return (
        <div className={header['nav-links-center']}>
            {setTitle.map((item) => (
                <NavItem navTitle={item} {...item} />
            ))}
        </div>


    );
};

export default NavList;
