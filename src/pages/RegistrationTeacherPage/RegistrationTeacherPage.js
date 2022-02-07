import Header from '../../components/Header/Header';
import Teacher from '../../components/Registry/Teacher/Teacher';

const RegistrationTeacherPage = () => {
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
      <Teacher></Teacher>
    </div>
  );
};

export default RegistrationTeacherPage;
