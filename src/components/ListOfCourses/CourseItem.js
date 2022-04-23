import { Link } from 'react-router-dom';
import { useState } from 'react';
import listOfCourses from './css/ListOfCourses.module.css';

const CourseItem = ({ id, title }) => {
  const [currentCourse, setCurrentCourse] = useState(null)

  const changeId = (e) => {
    setCurrentCourse(e.target.id)
  }

  return (
    <div onClick={changeId} id={id} className={listOfCourses['course']}>
      <Link to={`/course/${title}/${id}`}>
        <pre>
          <div id={id} className={listOfCourses['color-line-193eb8']}> </div>
        </pre>
        <p id={id}>Course</p>
        <h3 id={id}>{title}</h3>
        <div id={id} className={listOfCourses['continue']}>
          <h5 id={id}>Continue</h5>
        </div>
      </Link>
    </div >
  );
};

export default CourseItem;
