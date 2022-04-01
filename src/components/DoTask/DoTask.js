import classNames from 'classnames';
import { Link } from 'react-router-dom';
import doTask from './css/DoTask.module.css';
import { Pagination } from '@mui/material';

const DoTask = ({ arrLength, currentLesson, paginate }) => {

  const test = (event, value) => {
    paginate(value)
  }

  return (
    <div id={currentLesson[0].id} className={doTask['main-content']}>
      <h2 id={currentLesson[0].id}>{currentLesson[0].title}</h2>
      <p id={currentLesson[0].id}>{currentLesson[0].content}</p>
      <Pagination onChange={test} count={arrLength} variant="outlined" color="primary" />
    </div>
  );
};

export default DoTask;
