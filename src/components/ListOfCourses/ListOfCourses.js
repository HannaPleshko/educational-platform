import { Link } from 'react-router-dom';
import CourseItem from './CourseItem';
import listOfCourses from './css/ListOfCourses.module.css';

const ListOfCourses = () => {
  let setCourses = [{
    id: Math.random() * 1000,
    title: 'Web Development'
  },
  {
    id: Math.random() * 1000,
    title: 'HTML & CSS'
  },
  {
    id: Math.random() * 1000,
    title: 'Git'
  },
  {
    id: Math.random() * 1000,
    title: 'JavaScript'
  },
  {
    id: Math.random() * 1000,
    title: 'SQL'
  },
  {
    id: Math.random() * 1000,
    title: 'Computer Science'
  },
  {
    id: Math.random() * 1000,
    title: 'Node.js'
  },
  {
    id: Math.random() * 1000,
    title: 'React'
  },
  {
    id: Math.random() * 1000,
    title: 'TypeScript'
  }]

  return (
    <div className={listOfCourses['list_courses']}>
      <div className={listOfCourses['courses']}>
        {setCourses.map((item) => (
          <CourseItem key={item.id} title={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ListOfCourses;
