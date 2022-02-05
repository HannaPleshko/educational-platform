import { Link } from 'react-router-dom';
import listOfCourses from './ListOfCourses.module.css';

const ListOfCourses = () => {
  return (
    <div className={listOfCourses['list_courses']}>
      <div className={listOfCourses['courses']}>
        <div className={listOfCourses['course']}>
          <Link to={'/course'}>
            <pre>
              <div className={listOfCourses['color-line-193eb8']}> </div>
            </pre>
            <p>Course</p>
            <h3>Web Development</h3>
            <div className={listOfCourses['continue']}>
              <h5>Continue</h5>
            </div>
          </Link>
        </div>
        <div className={listOfCourses['course']}>
          <Link to={'/course'}>
            <pre>
              <div className={listOfCourses['color-line-193eb8']}> </div>
            </pre>
            <p>Course</p>
            <h3>HTML + CSS</h3>
            <div className={listOfCourses['continue']}>
              <h5>Continue</h5>
            </div>
          </Link>
        </div>
        <div className={listOfCourses['course']}>
          <Link to={'/course'}>
            <pre>
              <div className={listOfCourses['color-line-193eb8']}> </div>
            </pre>
            <p>Course</p>
            <h3>Git</h3>
            <div className={listOfCourses['continue']}>
              <h5>Continue</h5>
            </div>
          </Link>
        </div>
        <div className={listOfCourses['course']}>
          <Link to={'/course'}>
            <pre>
              <div className={listOfCourses['color-line-193eb8']}> </div>
            </pre>
            <p>Course</p>
            <h3>JavaScript</h3>
            <div className={listOfCourses['continue']}>
              <h5>Continue</h5>
            </div>
          </Link>
        </div>
        <div className={listOfCourses['course']}>
          <Link to={'/course'}>
            <pre>
              <div className={listOfCourses['color-line-193eb8']}> </div>
            </pre>
            <p>Course</p>
            <h3>SQL</h3>
            <div className={listOfCourses['continue']}>
              <h5>Continue</h5>
            </div>
          </Link>
        </div>
        <div className={listOfCourses['course']}>
          <Link to={'/course'}>
            <pre>
              <div className={listOfCourses['color-line-193eb8']}> </div>
            </pre>
            <p>Course</p>
            <h3>Computer Science</h3>
            <div className={listOfCourses['continue']}>
              <h5>Continue</h5>
            </div>
          </Link>
        </div>
        <div className={listOfCourses['course']}>
          <Link to={'/course'}>
            <pre>
              <div className={listOfCourses['color-line-193eb8']}> </div>
            </pre>
            <p>Course</p>
            <h3>Node.js</h3>
            <div className={listOfCourses['continue']}>
              <h5>Continue</h5>
            </div>
          </Link>
        </div>
        <div className={listOfCourses['course']}>
          <Link to={'/course'}>
            <pre>
              <div className={listOfCourses['color-line-193eb8']}> </div>
            </pre>
            <p>Course</p>
            <h3>React</h3>
            <div className={listOfCourses['continue']}>
              <h5>Continue</h5>
            </div>
          </Link>
        </div>
        <div className={listOfCourses['course']}>
          <Link to={'/course'}>
            <pre>
              <div className={listOfCourses['color-line-193eb8']}> </div>
            </pre>
            <p>Course</p>
            <h3>TypeScript</h3>
            <div className={listOfCourses['continue']}>
              <h5>Continue</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListOfCourses;
