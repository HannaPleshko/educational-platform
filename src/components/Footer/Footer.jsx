import classNames from 'classnames';
import footer from './Footer.module.css';

const Footer = () => {
    return (
        <div className={footer["footer"]}>
            <div className={footer["mycontain"]}>
                <div className={classNames(footer["footer-upper-wrap"], footer["p-v50"])}>
                    <div className={footer["footer-links-wrap"]}>
                        <a href="/" className={footer["footer-links"]}>About</a>
                        <a href="/" className={footer["footer-links"]}>Programs</a>
                        <a href="/" className={footer["footer-links"]}>Student Feedback</a>
                        <a href="/" className={footer["footer-links"]}>Pricing</a>
                        <a href="/" className={footer["footer-links"]}>Download</a>
                        <a href="/" className={footer["footer-links"]}>Careers</a>
                        <a href="/" className={footer["footer-links"]}>Status</a>
                    </div>
                    <div className={footer["footer-cta-wrap"]}>
                        <h3 className={footer["white"]}>Stay focused on coding.</h3>
                        <a href="/" className={footer["nav-btn"]}>Get started for free</a></div>
                    <div className="div-block">
                        <div className="lower-links-wrap">
                            <a href="/" className={footer["footer-links"]}>Privacy</a>
                            <a href="/" className={footer["footer-links"]}>Security</a>
                            <a href="/" className={footer["footer-links"]}>Terms of service</a>
                        </div>
                        <a href="/" className="footer-logo-wrap w-inline-block w--current"><div className={footer['footer-logo']}></div></a>
                    </div>
                </div>
                <div className={footer["small-caps"]}>© HS 2022</div>
            </div>
        </div>
    )
}

export default Footer

