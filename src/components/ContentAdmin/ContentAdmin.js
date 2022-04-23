import { useEffect } from 'react';
import ItemUsersAdmin from './ItemUsersAdmin';
import style from './ContentAdmin.module.css';

const ContentAdmin = ({ currentItem }) => {



    const changeContent = () => {
        if (currentItem === 'Users') {
            return (
                <ItemUsersAdmin />
            )
        } else if (currentItem === 'Courses') {
            return (
                <h1>{currentItem}</h1>
            )
        } else if (currentItem === 'Topics') {
            return (
                <h1>{currentItem}</h1>
            )
        } else if (currentItem === 'Lessons') {
            return (
                <h1>{currentItem}</h1>
            )
        }
    }

    useEffect(() => {

    }, [currentItem])

    return (
        <div className={style['wrapper-content']}>
            {changeContent()}
        </div>
    );
};

export default ContentAdmin;
