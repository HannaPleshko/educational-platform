import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SingleCourse from '../../components/SingleCourse/SingleCourse';

const SingleCoursePage = () => {
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
    <div>
      <Header setTitle={setTitle}></Header>
      <SingleCourse></SingleCourse>
      <Footer></Footer>
    </div>
  );
};

export default SingleCoursePage;
