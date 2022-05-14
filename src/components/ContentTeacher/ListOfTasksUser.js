import style from './ContentTeacher.module.css';
import ItemTask from './ItemTask';

const ListOfTasksUser = ({ listOfTasks }) => {
  return (
    <div className={style['wrapper-content']}>
      <h3>{listOfTasks[0].name}</h3>
      {listOfTasks.map((item) => (
        <ItemTask key={item.id} task={item} />
      ))}
    </div>
  );
};

export default ListOfTasksUser;
