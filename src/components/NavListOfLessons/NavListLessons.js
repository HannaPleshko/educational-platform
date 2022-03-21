import { Link, useParams } from 'react-router-dom';
import lesson from './css/NavListLessons.module.css';
import ItemTopic from './ItemTopic';

const NavListLessons = ({ }) => {
    const { _id } = useParams()

    const set = {
        topic: [
            {
                id: 1,
                topic: 'topic 1'
            },
            {
                id: 2,
                topic: 'topic 2'
            },
            {
                id: 3,
                topic: 'topic 3'
            },
            {
                id: 4,
                topic: 'topic 4'
            },
        ],
        lesson: [
            {
                id: 1,
                topic_id: 1,
                lesson: 'the first lesson'
            },
            {
                id: 2,
                topic_id: 1,
                lesson: 'the second lesson'
            },
            {
                id: 3,
                topic_id: 2,
                lesson: 'the first lesson'
            },
            {
                id: 4,
                topic_id: 3,
                lesson: 'the first lesson'
            },
            {
                id: 5,
                topic_id: 3,
                lesson: 'the second lesson'
            },
        ]
    }


    return (
        <nav className={lesson['nav-container']}>
            <h1>{_id}</h1>
            {set.topic.map((item) =>
                <ItemTopic id={item.id} topic={item.topic} lessons={set.lesson} />
            )}
        </nav>

    );
};

export default NavListLessons;
