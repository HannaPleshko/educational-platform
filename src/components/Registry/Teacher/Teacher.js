import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import teacher from '../css/Teacher.module.css';
import { useRegisterMutation } from '../../../redux';
import Loader from '../../Loader/Loader';
import TextField from '@material-ui/core/TextField';
import { FormControl, Input, InputLabel, InputAdornment, IconButton, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Teacher = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        role: 2 // 1 - student, 2 - teacher, 0 - admin
    });

    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const changeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const [register, { data, isLoading, isSuccess }] = useRegisterMutation();

    if (isLoading) {
        return <Loader />;
    }

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
        <div className={teacher["teacher"]}>
            <div className={teacher["content"]}>
                <div className={teacher["mycontain"]}>
                    <div className={teacher["block-logo-teacher"]}><h2>Create your HS Teacher account</h2></div>
                    <div className={teacher["block-teacher"]}>
                        <TextField name='name' onChange={changeForm} type='text' label="Name" />
                        <TextField name='surname' onChange={changeForm} type='text' label="Surname" />
                        <TextField name='email' onChange={changeForm} type='text' label="Email" />
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
                    <div className={teacher["block-bottom"]}>
                        <div
                            onClick={async () => {
                                try {
                                    const result = await register(form);
                                    if (result.data) {
                                        navigate('/');
                                    }
                                } catch (err) {
                                    console.log(err);
                                }
                            }}>
                            <Button variant="contained">Next</Button>
                        </div>
                    </div>
                    <p className={teacher["mycontain--log"]}>Already have an account?
                        <Link to={"/login"} className={teacher["reg-link"]}>Log In</Link>
                    </p>
                    <p className={teacher["teacher--forgotpwd"]}>Looking to create a student account?
                        <Link to={"/register/student"} className={teacher["forgotpwd-link"]}>Click Here</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Teacher

