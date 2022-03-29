import { useState, useCallback, useEffect } from 'react';
import DoTask from '../../components/DoTask/DoTask';
import Header from '../../components/Header/Header';
import NavListLessons from '../../components/NavListOfLessons/NavListLessons';
import Loader from '../../components/Loader/Loader';
import lesson from './css/LessonPage.module.css'
import { useHttp } from "../../hooks/http.hook";
import { useCreateMutation, useReadQuery } from '../../redux';

const LessonPage = () => {
  const { data, error, isLoading } = useReadQuery('/lesson/all-les/5/4', { refetchOnFocus: true })

  console.log(data);
  console.log(error);

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

  if (isLoading) {
    return <Loader />
  }

  // const lastLessonIndex = currentPage * lessonsPerPage;
  // const firstLessonIndex = lastLessonIndex - lessonsPerPage;
  // const currentLesson = lessons.slice(firstLessonIndex, lastLessonIndex);

  // const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div>
      <Header titles={titles}></Header>
      <div className={lesson['flex-content']}>
        <NavListLessons />
        {/* <DoTask arrLength={lessons} currentLesson={currentLesson} lessonsPerPage={lessonsPerPage} paginate={paginate} /> */}
      </div>
    </div>
  );
};

export default LessonPage;
