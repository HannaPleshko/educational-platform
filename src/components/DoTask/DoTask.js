import classNames from 'classnames';
import { Link } from 'react-router-dom';
import doTask from './css/DoTask.module.css';
import { Pagination } from '@mui/material';

const DoTask = ({ arrLength, currentLesson, paginate }) => {

  return (
    <div className={doTask['main-content']}>
      <h2>{currentLesson[0].title}</h2>
      <p>{currentLesson[0].content}</p>
      <Pagination  count={arrLength} variant="outlined" color="primary" />
    </div>
  );
};

export default DoTask;
