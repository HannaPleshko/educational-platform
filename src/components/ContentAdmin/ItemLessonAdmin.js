import { useNavigate } from 'react-router-dom';
import React, { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@mui/material';
import { useCreateLessonMutation, useDeleteLessonMutation, useUpdateLessonMutation } from '../../redux';
import SimpleSnackbar from '../SimpleSnackbar/SimpleSnackbar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import style from './ContentAdmin.module.css';

function ItemLessonAdmin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: '',
    topic_id: '',
    is_read: 'Yes',
    title: '',
    content: '',
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const [ceateLesson, { isSuccess: isSuccessF, isError: isErrorF, error: errorF }] = useCreateLessonMutation();
  const [updateLesson, { isSuccess: isSuccessS, isError: isErrorS, error: errorS }] = useUpdateLessonMutation();
  const [deleteLesson, { isSuccess: isSuccessT, isError: isErrorT, error: errorT }] = useDeleteLessonMutation();

  return (
    <div className={style['container']}>
      <div className={style['subcontainer']}>
        <p>Add a new lesson:</p>
        <div className={style['flex-container']}>
          <div>
            <div>
              <TextField name="topic_id" onChange={changeForm} type="number" label="Topic Id" />
            </div>
            <div>
              <TextField name="title" onChange={changeForm} type="text" label="Title" />
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Is Read</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={form.is_read}
                  onChange={changeForm}
                >
                  <FormControlLabel name="is_read" value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel name="is_read" value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <TextField id="standard-textarea" name="content" onChange={changeForm} label="Content" multiline />
            </div>
          </div>
          <Button
            onClick={async () => {
              try {
                const result = await ceateLesson(form);
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
        <p>Update lesson:</p>
        <div className={style['flex-container']}>
          <div>
            <div>
              <TextField name="id" onChange={changeForm} type="number" label="Id" />
            </div>
            <div>
              <TextField name="topic_id" onChange={changeForm} type="number" label="Topic Id" />
            </div>
            <div>
              <TextField name="title" onChange={changeForm} type="text" label="Title" />
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Is Read</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={form.is_read}
                  onChange={changeForm}
                >
                  <FormControlLabel name="is_read" value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel name="is_read" value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <TextField id="standard-textarea" name="content" onChange={changeForm} label="Content" multiline />
            </div>
          </div>
          <Button
            onClick={async () => {
              try {
                const result = await updateLesson(form);
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
        <p>Delete lesson:</p>
        <div className={style['flex-container']}>
          <div>
            <TextField name="id" onChange={changeForm} type="number" label="Id" />
          </div>
          <Button
            onClick={async () => {
              try {
                const result = await deleteLesson(form);
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
      {isErrorF || isErrorS || isErrorT ? <SimpleSnackbar msg={errorF.data.message || errorS.data.message || errorT.data.message} /> : null}
      {isSuccessF || isSuccessS || isSuccessT ? <SimpleSnackbar msg={'Success'} /> : null}
    </div>
  );
}

export default ItemLessonAdmin;
