import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import teacher from '../css/Teacher.module.css';
import { useRegisterMutation } from '../../../redux';
import Loader from '../../Loader/Loader';

const Teacher = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        role: 2 // 1 - student, 2 - teacher, 0 - admin
    });

    const changeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const [register, { data, isLoading, isSuccess }] = useRegisterMutation();

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className={teacher["teacher"]}>
            <div className={teacher["content"]}>
                <div className={teacher["mycontain"]}>
                    <div className={teacher["block-logo-teacher"]}><h2>Create your HS Teacher account</h2></div>
                    <div className={teacher["block-teacher"]}>
                        <div className={teacher["block-email"]}>
                            <p>Name</p>
                            <input name="name" onChange={changeForm} type='text' />
                        </div>
                        <div className={teacher["block-email"]}>
                            <p>Surname</p>
                            <input name="surname" onChange={changeForm} type='text' />
                        </div>
                        <div className={teacher["block-email"]}>
                            <p>Email</p>
                            <input name="email" onChange={changeForm} type='text' />
                        </div>
                        <div className={teacher["block-pwd"]}>
                            <p>Password</p>
                            <input name="password" onChange={changeForm} type='text' />
                        </div>
                    </div>
                    <div className={teacher["block-bottom"]}>
                        <div className={teacher["btn-teacher"]}
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
                            Next
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

