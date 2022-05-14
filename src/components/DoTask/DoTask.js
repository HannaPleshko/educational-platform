import React, { useState } from 'react';
import doTask from './css/DoTask.module.css';
import { Pagination } from '@mui/material';
import TextField from '@material-ui/core/TextField';
import { Button } from '@mui/material';
import { useCreateTaskMutation } from '../../redux';
import SimpleSnackbar from '../SimpleSnackbar/SimpleSnackbar';
import jwt_decode from 'jwt-decode';
import Loader from '../Loader/Loader';
import { useAuth } from '../../hooks/auth.hook';

const DoTask = ({ arrLength, currentLesson, paginate }) => {
  const { token, logout } = useAuth();

  const [form, setForm] = useState({
    id: '',
    user_id: '',
    lesson_id: '',
    code: '',
  });

  const [err, setErr] = useState(false);
  

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const [createTask, { isSuccess, isLoading, isError, error }] = useCreateTaskMutation();

  if (isLoading) {
    return <Loader />;
  }

  const generateForm = () => {
    form.user_id = jwt_decode(token).id
    form.lesson_id = currentLesson[0].id
  };

  return (
    <div id={currentLesson[0].id} className={doTask['main-content']}>
      <h2 id={currentLesson[0].id}>{currentLesson[0].title}</h2>
      <p id={currentLesson[0].id}>{currentLesson[0].content}</p>
      {!currentLesson[0].is_read ? (
        <div className={doTask['div-task_code']}>
          <div><TextField name="code" onChange={changeForm} id="outlined-multiline-static" label="Your code" multiline rows={4} variant="outlined" /> </div>
          <div className={doTask['button-task_code']}>
            <Button
              onClick={async () => {
                try {
                  if (form.code) {
                    generateForm()
                    const result = await createTask(form);
                    setForm({
                      id: '',
                      user_id: '',
                      lesson_id: '',
                      code: '',
                    })
                    setErr(false)
                  } else {
                    setErr(true)
                  }
                } catch (err) {
                  console.log(err);
                }
              }}
              variant="contained"
            >
              Next
            </Button>
          </div>
        </div>
      ) : null}

      <div className={doTask['pagination']}>
        <Pagination
          className={doTask['pagination']}
          onChange={(event, value) => paginate(value)}
          count={arrLength}
          variant="outlined"
          color="primary"
        />
      </div>
      {isSuccess ? <SimpleSnackbar msg={'Success'} /> : null}
      {err ? <SimpleSnackbar msg={'Repeat the value in the field'} /> : null}
    </div>
  );
};

export default DoTask;
