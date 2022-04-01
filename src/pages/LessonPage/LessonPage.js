import { useState, useCallback, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DoTask from '../../components/DoTask/DoTask';
import Header from '../../components/Header/Header';
import NavListLessons from '../../components/NavListOfLessons/NavListLessons';
import Loader from '../../components/Loader/Loader';
import lesson from './css/LessonPage.module.css'
import { useHttp } from "../../hooks/http.hook";
import { useGetLessonsQuery } from '../../redux';

const LessonPage = () => {
  const { course_id, course_title } = useParams()

  const [currentPage, setCurrentPage] = useState(1)
  const [lessonsPerPage] = useState(1)

  const { data, error, isLoading, isSuccess } = useGetLessonsQuery(`/lesson/${course_id}/5`, { refetchOnFocus: true })


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

  let lastLessonIndex;
  let firstLessonIndex;
  let currentLesson;
  let paginate;

  if (data) {
    lastLessonIndex = currentPage * lessonsPerPage;
    firstLessonIndex = lastLessonIndex - lessonsPerPage;
    currentLesson = data.slice(firstLessonIndex, lastLessonIndex);

    paginate = pageNumber => setCurrentPage(pageNumber)
  }

  // if (error.status === 404) {
  //   return <h1>404</h1>
  // }
  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <Header titles={titles}></Header>
      <div className={lesson['flex-content']}>
        <NavListLessons />
        <DoTask arrLength={data.length} currentLesson={currentLesson} lessonsPerPage={lessonsPerPage} paginate={paginate} />
      </div>
    </div>
  );
};

export default LessonPage;
