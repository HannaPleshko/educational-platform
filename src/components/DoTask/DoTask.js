import doTask from './css/DoTask.module.css';
import { Pagination } from '@mui/material';

const DoTask = ({ arrLength, currentLesson, paginate }) => {
  return (
    <div id={currentLesson[0].id} className={doTask['main-content']}>
      <h2 id={currentLesson[0].id}>{currentLesson[0].title}</h2>
      <p id={currentLesson[0].id}>{currentLesson[0].content}</p>
      <Pagination
        className={doTask['pagination']}
        onChange={(event, value) => paginate(value)}
        count={arrLength}
        variant="outlined"
        color="primary"
      />
    </div>
  );
};

export default DoTask;
