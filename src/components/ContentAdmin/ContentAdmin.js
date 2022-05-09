import { useEffect } from 'react';
import style from './ContentAdmin.module.css';
import ItemUsersAdmin from './ItemUsersAdmin';
import ItemCoursesAdmin from './ItemCoursesAdmin';
import ItemTopicsAdmin from './ItemTopicsAdmin';
import ItemLessonAdmin from './ItemLessonAdmin';

const ContentAdmin = ({ currentItem }) => {
  const changeContent = () => {
    if (currentItem === 'Users') {
      return <ItemUsersAdmin />;
    } else if (currentItem === 'Courses') {
      return <ItemCoursesAdmin />;
    } else if (currentItem === 'Topics') {
      return <ItemTopicsAdmin />;
    } else if (currentItem === 'Lessons') {
      return <ItemLessonAdmin />;
    }
  };

  useEffect(() => {}, [currentItem]);

  return <div className={style['wrapper-content']}>{changeContent()}</div>;
};

export default ContentAdmin;
