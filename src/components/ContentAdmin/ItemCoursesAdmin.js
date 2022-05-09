import { useNavigate } from 'react-router-dom';
import React, { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@mui/material';
import { useCreateCourseMutation, useDeleteCourseMutation, useUpdateCourseMutation } from '../../redux';
import SimpleSnackbar from '../SimpleSnackbar/SimpleSnackbar';
import style from './ContentAdmin.module.css';

const ItemCoursesAdmin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: '',
    title: '',
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const [ceateCourse, { isSuccess: isSuccessF, isError: isErrorF }] = useCreateCourseMutation();
  const [updateCourse, { isSuccess: isSuccessS, isError: isErrorS }] = useUpdateCourseMutation();
  const [deleteCourse, { isSuccess: isSuccessT, isError: isErrorT }] = useDeleteCourseMutation();

  return (
    <div className={style['container']}>
      <div className={style['subcontainer']}>
        <p>Add a new course:</p>
        <div className={style['flex-container']}>
          <div>
            <TextField name="title" onChange={changeForm} type="text" label="Title" />
          </div>
          <Button
            onClick={async () => {
              try {
                const result = await ceateCourse(form);
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
        <p>Update course:</p>
        <div className={style['flex-container']}>
          <div>
            <div>
              <TextField name="id" onChange={changeForm} type="text" label="Id" />
            </div>
            <div>
              <TextField name="title" onChange={changeForm} type="text" label="Title" />
            </div>
          </div>

          <Button
            onClick={async () => {
              try {
                const result = await updateCourse(form);
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
        <p>Delete course:</p>
        <div className={style['flex-container']}>
          <div>
            <TextField name="id" onChange={changeForm} type="number" label="Id" />
          </div>
          <Button
            onClick={async () => {
              try {
                const result = await deleteCourse(form);
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
};

export default ItemCoursesAdmin;
