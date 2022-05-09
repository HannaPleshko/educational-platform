import { Link } from 'react-router-dom';
import lesson from './css/NavListLessons.module.css';

const ItemLesson = ({ title }) => {
  return (
    <li className={lesson['li-lesson']}>
      <Link to={'*'}>
        <p>{title}</p>{' '}
      </Link>
    </li>
  );
};

export default ItemLesson;
