import { Link, useParams } from 'react-router-dom';
import lesson from './css/NavListLessons.module.css';

const NavListLessons = ({ data_topic }) => {
    const { course_title, course_id } = useParams()

    return (
        <nav className={lesson['nav-container']}>
            <h1>{course_title}</h1>
            {data_topic.map((item) =>
                <Link to={`/course/${course_title}/${course_id}/${item.title}/${item.id}`}>
                    <div className={lesson['topic-container']} id={item.id}>
                        <h1>{item.title}</h1>
                    </div>
                </Link>

            )}
        </nav>

    );
};

export default NavListLessons;
