import ItemLesson from './ItemLesson';
import lesson from './css/NavListLessons.module.css';

const ItemTopic = ({ id, topic, setLessons }) => {

    return (
        <div className={lesson['topic-container']} id={id}>
            <h1>{topic}</h1>
            <ul>
                {setLessons.map((item) =>
                    item.topic_id === id ?
                        (<ItemLesson title={item.lesson} {...item} />) : null)}
            </ul>
        </div>
    );
};

export default ItemTopic;
