import React, { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import login from './Login.module.css';
import { AuthContext } from "../../context/AuthContext"
import { TextField } from '@material-ui/core';
import { FormControl, Input, InputLabel, InputAdornment, IconButton, Button } from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { useLoginMutation } from '../../redux';
import Loader from '../Loader/Loader';

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

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className={login["login"]}>
            <div className={login["content"]}>
                <div className={login["mycontain"]}>
                    <div className={login["block-logo-login"]}><h2>Log In</h2></div>
                    <div className={login["block-login"]}>
                        <TextField name='email' onChange={changeForm} type='text' label="Email" />

                        {/* <TextField name='password' onChange={changeForm} type='password' label="Password" /> */}

                        <FormControl variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                name='password'
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                    </div>
                    <div className={login["block-bottom"]}>
                        <p className={login["mycontain--login"]}>Forgot password?
                            <Link to={"*"} className={login["mycontain--login-link"]}><Button>Click Here</Button></Link>
                        </p>

                            <Button variant="contained"
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
                            >Log In</Button>
                    </div>
                    <p className={login["mycontain--reg"]}>Don't have an account?<Link to={"/register"} className={login["mycontain--reg-link"]}><Button>Register</Button></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Login
