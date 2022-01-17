import classNames from 'classnames';
import auth from './Auth.module.css';

const Auth = () => {
    return (
        <div className={auth["auth"]}>
            <div className={auth["mycontain"]}>
                <div className={auth["img_hs_logo"]}>

                </div>
                <div className={auth["mycontain-auth"]}>
                    <div className={auth["auth-logo-h2"]}><h2>Log in</h2></div>
                    <div className={auth[""]}>
                        <p>E-mail</p>
                        <input type="text"/>
                    </div>
                    <div className={auth[""]}>
                        <p>Password</p>
                        <input type="text"/>
                    </div>
                    <div className={auth[""]}><a>Log in</a></div>
                    <div className={auth[""]}><a>I forgot my password</a></div>
                    <div className={auth[""]}><p>or</p></div>
                    <div className={auth[""]}><a>Log in with GitHub</a></div>
                    <div className={auth[""]}><a>Log in with Google</a></div>

                </div>
            </div>
        </div>
    )
}

export default Auth

