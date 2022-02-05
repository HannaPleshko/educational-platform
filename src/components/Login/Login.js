import { Link } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";
import login from './Login.module.css';

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const changeForm = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    };

    const doAuthorization = async () => {
        try {
            const axiosData = await axios.post('/api/auth', form)
        } catch (e) {
        }
    }

    return (
        <div className={login["login"]}>
            <div className={login["content"]}>
                <div className={login["mycontain"]}>
                    <div className={login["block-logo-login"]}><h2>Log In</h2></div>
                    <div className={login["block-login"]}>
                        <div className={login["block-email"]}>
                            <p>Email</p>
                            <input name='email' onChange={changeForm} type='text' />
                        </div>
                        <div className={login["block-pwd"]}>
                            <p>Password</p>
                            <input name='password' onChange={changeForm} type='text' />
                        </div>
                    </div>
                    <div className={login["block-bottom"]}>
                        <p className={login["mycontain--login"]}>Forgot password?
                            <Link to={"*"} className={login["mycontain--login-link"]}>Click Here</Link>
                        </p>
                        <Link onClick={doAuthorization} to={'/student-home'} className={login["btn-login"]}>Log In</Link>
                    </div>
                    <p className={login["mycontain--reg"]}>Don't have an account?<Link to={"/register"} className={login["mycontain--reg-link"]}>Register</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Login