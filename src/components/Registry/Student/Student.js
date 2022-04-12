import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import student from './Student.module.css';
import { useRegisterMutation } from '../../../redux';
import Loader from '../../Loader/Loader';

const Student = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        role: 1 // 1 - student, 2 - teacher, 0 - admin
    });

    const changeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const [register, { data, isLoading, isSuccess }] = useRegisterMutation();

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className={student["student"]}>
            <div className={student["content"]}>
                <div className={student["mycontain"]}>
                    <div className={student["block-logo-student"]}><h2>Create your HS Student account</h2></div>
                    <div className={student["block-student"]}>
                        <div className={student["block-email"]}>
                            <p>Name</p>
                            <input name="name" onChange={changeForm} type='text' />
                        </div>
                        <div className={student["block-email"]}>
                            <p>Surname</p>
                            <input name="surname" onChange={changeForm} type='text' />
                        </div>
                        <div className={student["block-email"]}>
                            <p>Email</p>
                            <input name="email" onChange={changeForm} type='text' />
                        </div>
                        <div className={student["block-pwd"]}>
                            <p>Password</p>
                            <input name="password" onChange={changeForm} type='text' />
                        </div>
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

