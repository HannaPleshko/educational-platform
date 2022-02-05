import Header from '../../components/Header/Header';
import Guest from '../../components/Registry/Guest/Guest';

const RegistrationPage = () => {
  let setTitle = ['Why HS?','Courses','Literature','WorkSpace','Contacts']

  return (
    <div>
      <Header setTitle={setTitle}></Header>
      <Guest></Guest>
    </div>
  );
};

export default RegistrationPage;
