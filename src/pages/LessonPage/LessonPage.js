import DoTask from '../../components/DoTask/DoTask';
import Header from '../../components/Header/Header';
import NavListLessons from '../../components/NavListOfLessons/NavListLessons';
import lesson from './css/LessonPage.module.css'

const LessonPage = () => {
  let titles = [
    {
      id: Math.random() * 1000,
      title: 'Why HS?'
    },
    {
      id: Math.random() * 1000,
      title: 'Courses'
    },
    {
      id: Math.random() * 1000,
      title: 'Literature'
    },
    {
      id: Math.random() * 1000,
      title: 'WorkSpace'
    },
    {
      id: Math.random() * 1000,
      title: 'Contacts'
    }]

  return (
    <div>
      <Header titles={titles}></Header>
      <div className={lesson['flex-content']}>
        <NavListLessons />
        <DoTask />
      </div>
    </div>
  );
};

export default LessonPage;
