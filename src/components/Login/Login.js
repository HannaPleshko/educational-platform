import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Login.module.css';
import { AuthContext } from '../../context/AuthContext';
import TextField from '@material-ui/core/TextField';
import { FormControl, Input, InputLabel, InputAdornment, IconButton, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useLoginMutation } from '../../redux';
import Loader from '../Loader/Loader';
import jwt_decode from 'jwt-decode';
import SimpleSnackbar from '../SimpleSnackbar/SimpleSnackbar';

const Login = () => {
  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  const [form, setForm] = useState({
    email: '',
    password: '',
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

  const [login, { data, isLoading, isSuccess, isError }] = useLoginMutation();

  if (isLoading) {
    return <Loader />;
  }

  if (isSuccess) {
    auth.login(data.token);
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

  const decodeToken = (data) => {
    const { role } = jwt_decode(data.token);
    return role;
  };

  return (
    <div className={style['login']}>
      <div className={style['content']}>
        <div className={style['mycontain']}>
          <div className={style['block-logo-login']}>
            <h2>Log In</h2>
          </div>
          <div className={style['block-login']}>
            <TextField name="email" onChange={changeForm} type="text" label="Email" />

            <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                name="password"
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
          <div className={style['block-bottom']}>
            <p className={style['mycontain--login']}>
              Forgot password?
              <Link to={'*'} className={style['mycontain--login-link']}>
                <Button>Click Here</Button>
              </Link>
            </p>

            <Button
              variant="contained"
              onClick={async () => {
                try {
                  const result = await login(form);
                  setForm('');
                  if (result.data) {
                    const role = decodeToken(result.data);
                    if (role === 1) navigate('/course');
                    else if (role === 2) navigate('/teacher');
                    else if (role === 0) navigate('/admin');
                  }
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              Log In
            </Button>
          </div>
          <p className={style['mycontain--reg']}>
            Don't have an account?
            <Link to={'/register'} className={style['mycontain--reg-link']}>
              <Button>Register</Button>
            </Link>
          </p>
          {isError ? <SimpleSnackbar msg={'Not Found'} /> : null}
        </div>
      </div>
    </div>
  );
};
export default Login;
