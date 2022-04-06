import { Link } from 'react-router-dom';
import CourseItem from './CourseItem';
import listOfCourses from './css/ListOfCourses.module.css';
import { useGetCoursesQuery } from '../../redux';

const ListOfCourses = () => {
  const { data, error, isLoading } = useGetCoursesQuery('/course')

  return (
    <div className={listOfCourses['list_courses']}>
      <div className={listOfCourses['courses']}>
        {data && data.map((item) => (
          <CourseItem key={item.id} title={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ListOfCourses;
