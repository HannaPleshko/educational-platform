import { Link } from 'react-router-dom';
import listOfCourses from './css/ListOfCourses.module.css';

const CourseItem = ({ id, title }) => {

  return (
    <div id={id} className={listOfCourses['course']}>
      <Link to={`/course/${title}`}>
        <pre>
          <div className={listOfCourses['color-line-193eb8']}> </div>
        </pre>
        <p>Course</p>
        <h3>{title}</h3>
        <div className={listOfCourses['continue']}>
          <h5>Continue</h5>
        </div>
      </Link>
    </div>
  );
};

export default CourseItem;
