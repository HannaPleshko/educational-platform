import React, { useState, useContext } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const [login, { data, isLoading, isSuccess }] = useLoginMutation();

  if (isLoading) {
    return <Loader />;
  }

  if (isSuccess) {
    auth.login(data.token);
  }

  return (
    <div className={styles['login']}>
      <div className={styles['content']}>
        <div className={styles['mycontain']}>
          <div className={styles['block-logo-login']}>
            <h2>Log In</h2>
          </div>
          <div className={styles['block-login']}>
            <div className={styles['block-email']}>
              <p>Email</p>
              <input name="email" onChange={changeForm} type="text" />
            </div>
            <div className={styles['block-pwd']}>
              <p>Password</p>
              <input name="password" onChange={changeForm} type="text" />
            </div>
          </div>
          <div className={styles['block-bottom']}>
            <p className={styles['mycontain--login']}>
              Forgot password?
              <Link to={'*'} className={styles['mycontain--login-link']}>
                Click Here
              </Link>
            </p>
            <button
              onClick={async () => {
                try {
                  const result = await login(form);
                  if (result.data) {
                    navigate('/course');
                  }
                } catch (err) {
                  console.log(err);
                }
              }}
              className={styles['btn-login']}
            >
                Log In
            </button>
          </div>
          <p className={styles['mycontain--reg']}>
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
