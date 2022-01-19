import { Link } from 'react-router-dom'
import header from './Header.module.css';

const Header = () => {

    const doRegistration = () => {

    }

    return (
        <header className={header['nav-desktop-sticky']}>
            <nav className={header['nav-desktop']}>
                <div className={header['nav-logo-link']}></div>
                <div className={header['nav-links-center']}>
                    <a href="/" className={header["nav-link"]}>
                        <div className="nav-link-text">Why HS?</div>
                    </a>
                    <a href="/" className={header["nav-link"]}>
                        <div className="nav-link-text">Courses</div>
                    </a>
                    <a href="/" className={header["nav-link"]}>
                        <div className="nav-link-text">Literature</div>
                    </a>
                    <a href="/" className={header["nav-link"]}>
                        <div className="nav-link-text">WorkSpace</div>
                    </a>
                    <a href="/" className={header["nav-link"]}>
                        <div className="nav-link-text">Contacts</div>
                    </a>
                </div>
                <div className={header["nav-links-right"]}>
                    <Link to={"*"} className={header["nav-link"]}>
                        <div className={header["nav-link-text"]}>Login</div>
                    </Link>
                    <Link to={"/register"}>
                        <div onClick={doRegistration} className={header['nav-btn']}>Sign up</div>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header

