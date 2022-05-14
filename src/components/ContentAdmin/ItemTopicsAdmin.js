import { useNavigate } from 'react-router-dom';
import React, { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@mui/material';
import { useCreateTopicMutation, useUpdateTopicMutation, useDeleteTopicMutation } from '../../redux';
import SimpleSnackbar from '../SimpleSnackbar/SimpleSnackbar';
import style from './ContentAdmin.module.css';

function ItemTopicsAdmin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: '',
    course_id: '',
    title: '',
    description: '',
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const [ceateTopic, { isSuccess: isSuccessF, isError: isErrorF, error: errorF }] = useCreateTopicMutation();
  const [updateTopic, { isSuccess: isSuccessS, isError: isErrorS, error: errorS }] = useUpdateTopicMutation();
  const [deleteTopic, { isSuccess: isSuccessT, isError: isErrorT, error: errorT }] = useDeleteTopicMutation();

  return (
    <div className={style['container']}>
      <div className={style['subcontainer']}>
        <p>Add a new topic:</p>
        <div className={style['flex-container']}>
          <div>
            <div>
              <TextField name="course_id" onChange={changeForm} type="number" label="Course Id" />
            </div>
            <div>
              <TextField name="title" onChange={changeForm} type="text" label="Title" />
            </div>
            <div>
              <TextField id="standard-textarea" name="description" onChange={changeForm} label="Description" multiline />
            </div>
          </div>
          <Button
            onClick={async () => {
              try {
                const result = await ceateTopic(form);
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

      <div className={style['subcontainer']}>
        <p>Update topic:</p>
        <div className={style['flex-container']}>
          <div>
            <div>
              <TextField name="id" onChange={changeForm} type="text" label="Id" />
            </div>
            <div>
              <TextField name="title" onChange={changeForm} type="text" label="Title" />
            </div>
            <div>
              <TextField id="standard-textarea" name="description" onChange={changeForm} label="Description" multiline />
            </div>
          </div>
          <Button
            onClick={async () => {
              try {
                const result = await updateTopic(form);
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

      <div className={style['subcontainer']}>
        <p>Delete topic:</p>
        <div className={style['flex-container']}>
          <div>
            <TextField name="id" onChange={changeForm} type="number" label="Id" />
          </div>
          <Button
            onClick={async () => {
              try {
                const result = await deleteTopic(form);
                console.log(form);
                console.log(result);
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
      {isErrorF || isErrorS || isErrorT ? <SimpleSnackbar msg={'Not Found'} /> : null}
      {isSuccessF || isSuccessS || isSuccessT ? <SimpleSnackbar msg={'Success'} /> : null}
    </div>
  );
}

export default ItemTopicsAdmin;
