import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import student from './Student.module.css';

const Student = () => {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const doRegistrationAsStudent = async () => {
    try {
      // const axiosData = await axios.post('/api/register', { form })
      // console.log(axiosData)
    } catch (e) {}
  };

  return (
    <div className={student['student']}>
      <div className={student['content']}>
        <div className={student['mycontain']}>
          <div className={student['block-logo-student']}>
            <h2>Create your HS Student account</h2>
          </div>
          <div className={student['block-student']}>
            <div className={student['block-email']}>
              <p>Name</p>
              <input name="name" onChange={changeForm} type="text" />
            </div>
            <div className={student['block-email']}>
              <p>Surname</p>
              <input name="surname" onChange={changeForm} type="text" />
            </div>
            <div className={student['block-email']}>
              <p>Email</p>
              <input name="email" onChange={changeForm} type="text" />
            </div>
            <div className={student['block-pwd']}>
              <p>Password</p>
              <input name="password" onChange={changeForm} type="text" />
            </div>
          </div>
          <div className={student['block-bottom']}>
            <Link to={'*'} className={student['btn-student']} onClick={doRegistrationAsStudent}>
              Next
            </Link>
          </div>
          <p className={student['mycontain--log']}>
            Already have an account?
            <Link to={'/login'} className={student['reg-link']}>
              Log In
            </Link>
          </p>
          <p className={student['student--forgotpwd']}>
            Looking to create a teacher account?
            <Link to={'/register/teacher'} className={student['forgotpwd-link']}>
              Click Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Student;
