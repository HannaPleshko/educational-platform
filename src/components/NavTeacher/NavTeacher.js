import ItemNavTeacher from './ItemNavTeacher';
import style from './ContentTeacher.module.css';

const NavTeacher = ({ data, setCurrentId }) => {
  return (
    <ul>
      <div className={style['nav-items']}>
        <h3>Users:</h3>
        {data.map((item, index) => (
          <ItemNavTeacher key={index} item={item} setCurrentId={setCurrentId} {...item} />
        ))}
      </div>
    </ul>
  );
};

export default NavTeacher;
