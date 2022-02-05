import Header from '../../components/Header/Header';
import Teacher from '../../components/Registry/Teacher/Teacher';

const RegistrationTeacherPage = () => {
  let setTitle = ['Why HS?','Courses','Literature','WorkSpace','Contacts']

  return (
    <div>
      <Header setTitle={setTitle}></Header>
      <Teacher></Teacher>
    </div>
  );
};

export default RegistrationTeacherPage;
