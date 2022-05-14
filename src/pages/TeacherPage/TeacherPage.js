import { useState } from 'react';
import NavTeacher from '../../components/NavTeacher/NavTeacher';
import ContentTeacher from '../../components/ContentTeacher/ContentTeacher';
import style from './TeacherPage.module.css';
import Header from '../../components/Header/Header';
import { useAllUsersQuery } from '../../redux';
import SimpleSnackbar from '../../components/SimpleSnackbar/SimpleSnackbar';

const TeacherPage = () => {
  let titles = [];
  const { data, isSuccess, isError } = useAllUsersQuery();

  const [currentId, setCurrentId] = useState(1);

  return (
    <>
      <Header titles={titles} />
      <div className={style['flex-items']}>
        {isSuccess ? <NavTeacher data={data} setCurrentId={setCurrentId} /> : null}
        {isSuccess ? <ContentTeacher currentId={currentId} /> : null}
      </div>
      {isError ? <SimpleSnackbar msg={'Users Not Found'} /> : null}
    </>
  );
};

export default TeacherPage;
