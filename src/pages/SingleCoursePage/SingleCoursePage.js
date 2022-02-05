import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SingleCourse from '../../components/SingleCourse/SingleCourse';

const SingleCoursePage = () => {
  let setTitle = ['Why HS?','Courses','Literature','WorkSpace','Contacts']

  return (
    <div>
      <Header setTitle={setTitle}></Header>
      <SingleCourse></SingleCourse>
      <Footer></Footer>
    </div>
  );
};

export default SingleCoursePage;
