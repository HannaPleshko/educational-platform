import { Link, useParams } from 'react-router-dom';
import lesson from './css/NavListLessons.module.css';

const NavListLessons = ({ topics }) => {
    const { courseTitle, courseId } = useParams()

    return (
        <nav className={lesson['nav-container']}>
            <h1>{courseTitle}</h1>
            {topics.map((item) =>
                <Link to={`/course/${courseTitle}/${courseId}/${item.title}/${item.id}`}>
                    <div className={lesson['topic-container']} id={item.id}>
                        <h1>{item.title}</h1>
                    </div>
                </Link>

            )}
        </nav>

    );
};

export default NavListLessons;
