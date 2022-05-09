import Header from '../../components/Header/Header';
import Guest from '../../components/Registry/Guest/Guest';

const RegistrationPage = () => {
  let titles = [
    {
      id: Math.random() * 1000,
      title: 'Why HS?',
    },
    {
      id: Math.random() * 1000,
      title: 'Courses',
    },
    {
      id: Math.random() * 1000,
      title: 'Literature',
    },
    {
      id: Math.random() * 1000,
      title: 'WorkSpace',
    },
    {
      id: Math.random() * 1000,
      title: 'Contacts',
    },
  ];
  return (
    <div>
      <Header titles={titles}></Header>
      <Guest></Guest>
    </div>
  );
};

export default RegistrationPage;
