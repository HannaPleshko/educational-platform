import { Link } from 'react-router-dom';
import ListOfCourses from '../../components/ListOfCourses/ListOfCourses';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import studentHomePage from './StudentHomePage.module.css';

const StudentHomePage = () => {
  let setTitle = [
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
    <div className={studentHomePage['student-home']}>
      <Header setTitle={setTitle}></Header>
      <div className={studentHomePage['main-information-navagate']}>
        <div className={studentHomePage['left-nav']}>
          <Link to={'*'}>
            <p>Now</p>
          </Link>
          <Link to={'*'}>
            <p>Catalog</p>
          </Link>
          <Link to={'*'}>
            <p>Status</p>
          </Link>
          <Link to={'*'}>
            <p>Discussions</p>
          </Link>
          <Link to={'*'}>
            <p>Literature</p>
          </Link>
        </div>
        <div className={studentHomePage['main-information']}>
          <Link to={'*'}>
            <div className={studentHomePage['about-user']}>
              <div className={studentHomePage['img-user']}></div>
              <div className={studentHomePage['user-info']}>
                <div className={studentHomePage['user-name']}>Hanna</div>
                <div className={studentHomePage['user-email']}>anna-pleshko2000@mail.ru</div>
              </div>
              <div className={studentHomePage['link-profile']}>Go to profile...</div>
            </div>
          </Link>
          <ListOfCourses></ListOfCourses>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default StudentHomePage;
