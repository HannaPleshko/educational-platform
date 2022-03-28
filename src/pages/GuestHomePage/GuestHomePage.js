import Footer from '../../components/Footer/Footer';
import GuestHomeSection from '../../components/GuestHomeSection/GuestHomeSection';
import Header from '../../components/Header/Header';

const GuestHome = () => {
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
      <GuestHomeSection></GuestHomeSection>
      <Footer></Footer>
    </div>
  );
};

export default GuestHome;
