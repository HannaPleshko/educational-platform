import { Link } from 'react-router-dom';
import login from './Login.module.css';

const Login = () => {
  return (
    <div className={login['login']}>
      <div className={login['content']}>
        <div className={login['mycontain']}>
          <div className={login['block-logo-login']}>
            <h2>Log In</h2>
          </div>
          <div className={login['block-login']}>
            <div className={login['block-email']}>
              <p>Email</p>
              <input type="text" />
            </div>
            <div className={login['block-pwd']}>
              <p>Password</p>
              <input type="text" />
            </div>
          </div>
          <div className={login['block-bottom']}>
            <p className={login['mycontain--login']}>
              Forgot password?
              <Link to={'*'} className={login['mycontain--login-link']}>
                Click Here
              </Link>
            </p>
            <Link to={'/student-home'} className={login['btn-login']}>
              Log In
            </Link>
          </div>
          <p className={login['mycontain--reg']}>
            Don't have an account?
            <Link to={'/register'} className={login['mycontain--reg-link']}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
