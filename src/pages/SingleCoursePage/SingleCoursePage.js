import Header from '../../components/Header/Header';
import SingleCourse from '../../components/SingleCourse/SingleCourse';

const SingleCoursePage = () => {
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
      <SingleCourse></SingleCourse>
    </div>
  );
};

export default SingleCoursePage;
