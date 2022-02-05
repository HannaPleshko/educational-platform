import Header from '../../components/Header/Header';
import Student from '../../components/Registry/Student/Student';

const RegistrationStudentPage = () => {
  let setTitle = ['Why HS?','Courses','Literature','WorkSpace','Contacts']

  return (
    <div>
      <Header setTitle={setTitle}></Header>
      <Student></Student>
    </div>
  );
};

export default RegistrationStudentPage;
