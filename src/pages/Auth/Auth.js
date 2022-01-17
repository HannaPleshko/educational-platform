import auth from './Auth.module.css';

const Auth = () => {
    return (
        <div className="">
            <div className=""></div>

            <div className="">
                <div className=""><h2>Log in</h2></div>
                <div className="">
                    <p>E-mail</p>
                    <input type="text"/>
                </div>
                <div className="">
                    <p>Password</p>
                    <input type="text"/>
                </div>
                <div className=""><a>Log in</a></div>
                <div className=""><a>I forgot my password</a></div>
                <div className=""><p>or</p></div>
                <div className=""><a>Log in with GitHub</a></div>
                <div className=""><a>Log in with Google</a></div>

            </div>
        </div>
)
}

export default Auth

