import Footer from '../../components/Footer/Footer';
import GuestHomeSection from '../../components/GuestHomeSection/GuestHomeSection';
import Header from '../../components/Header/Header';

const GuestHome = () => {
  let setTitle = ['Why HS?','Courses','Literature','WorkSpace','Contacts']

  return (
    <div>
      <Header setTitle={setTitle}></Header>
      <GuestHomeSection></GuestHomeSection>
      <Footer></Footer>
    </div>
  );
};

export default GuestHome;
