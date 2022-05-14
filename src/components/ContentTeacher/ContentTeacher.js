import { useGetTasksQuery } from '../../redux';
import SimpleSnackbar from '../SimpleSnackbar/SimpleSnackbar';
import style from './ContentTeacher.module.css';
import ListOfTasksUser from './ListOfTasksUser';

const ContentTeacher = ({ currentId }) => {
  const { data, isSuccess, isError } = useGetTasksQuery(currentId);

  return (
    <div className={style['wrapper-content']}>
      {isSuccess ? <ListOfTasksUser listOfTasks={data} /> : <SimpleSnackbar msg={'Tasks Not Found'} />}
    </div>
  );
};

export default ContentTeacher;
