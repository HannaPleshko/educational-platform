import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';

const LoginPage = () => {
  let setTitle = ['Why HS?','Courses','Literature','WorkSpace','Contacts']

  return (
    <div>
      <Header setTitle={setTitle}></Header>
      <Login></Login>
    </div>
  );
};

export default LoginPage;
