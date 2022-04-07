import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import singleCourse from './SingleCourse.module.css';

const TopicItem = ({ course, index }) => {

    return (
        <li>
            <h1>{index}</h1>
            <div className={singleCourse['course-lessons-content']}>
                <h2>{course.title}</h2>
                <p>
                    {course.description}
                </p>
            </div>

        </li>
    );
};

export default TopicItem;
