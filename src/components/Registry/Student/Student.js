import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import student from './Student.module.css';
import { useRegisterMutation } from '../../../redux';
import Loader from '../../Loader/Loader';
import TextField from '@material-ui/core/TextField';
import { FormControl, Input, InputLabel, InputAdornment, IconButton, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const Student = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        role: 1 // 1 - student, 2 - teacher, 0 - admin
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
        <div className={student["student"]}>
            <div className={student["content"]}>
                <div className={student["mycontain"]}>
                    <div className={student["block-logo-student"]}><h2>Create your HS Student account</h2></div>
                    <div className={student["block-student"]}>
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
                    <div className={student["block-bottom"]}>
                        <button
                            onClick={async () => {
                                try {
                                    const result = await register(form);
                                    if (result.data) {
                                        navigate('/');
                                    }
                                } catch (err) {
                                    console.log(err);
                                }
                            }}
                            className={student["btn-student"]}
                        >
                            Next
                        </button>
                    </div>
                    <p className={student["mycontain--log"]}>Already have an account?
                        <Link to={"/login"} className={student["reg-link"]}>Log In</Link>
                    </p>
                    <p className={student["student--forgotpwd"]}>Looking to create a teacher account?
                        <Link to={"/register/teacher"} className={student["forgotpwd-link"]}>Click Here</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Student

