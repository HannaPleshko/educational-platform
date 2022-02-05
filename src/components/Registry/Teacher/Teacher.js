import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import teacher from './Teacher.module.css';

const Teacher = () => {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const doRegistrationAsTeacher = async () => {
    try {
      const axiosData = await axios.post(`/`, { form });
      console.log(axiosData);
    } catch (e) {}
  };

  return (
    <div className={teacher['teacher']}>
      <div className={teacher['content']}>
        <div className={teacher['mycontain']}>
          <div className={teacher['block-logo-teacher']}>
            <h2>Create your HS Teacher account</h2>
          </div>
          <div className={teacher['block-teacher']}>
            <div className={teacher['block-email']}>
              <p>Name</p>
              <input type="text" />
            </div>
            <div className={teacher['block-email']}>
              <p>Surname</p>
              <input type="text" />
            </div>
            <div className={teacher['block-email']}>
              <p>Email</p>
              <input type="text" />
            </div>
            <div className={teacher['block-pwd']}>
              <p>Password</p>
              <input type="text" />
            </div>
          </div>
          <div className={teacher['block-bottom']}>
            <Link className={teacher['btn-teacher']} to={'*'} onClick={doRegistrationAsTeacher}>
              Next
            </Link>
          </div>
          <p className={teacher['mycontain--log']}>
            Already have an account?
            <Link to={'/login'} className={teacher['reg-link']}>
              Log In
            </Link>
          </p>
          <p className={teacher['teacher--forgotpwd']}>
            Looking to create a student account?
            <Link to={'/register/student'} className={teacher['forgotpwd-link']}>
              Click Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
