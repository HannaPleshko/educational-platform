import { useState, useCallback, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DoTask from '../../components/DoTask/DoTask';
import Header from '../../components/Header/Header';
import NavListLessons from '../../components/NavListOfLessons/NavListLessons';
import Loader from '../../components/Loader/Loader';
import lesson from './css/LessonPage.module.css'
import { useGetLessonsQuery, useGetTopicsQuery } from '../../redux';

const LessonPage = () => {
  const { courseId, topicId } = useParams()

  const [currentPage, setCurrentPage] = useState(1)
  const lessonsPerPage = 1

  let { data: lessons, isLoading, isError } = useGetLessonsQuery(`/lesson/${courseId}/${topicId}`)
  const { data: topics } = useGetTopicsQuery(`/topic/${courseId}`)

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

  let lastLessonIndex, firstLessonIndex, currentLesson, paginate;
  if (lessons && !isError) {
    lastLessonIndex = currentPage * lessonsPerPage;
    firstLessonIndex = lastLessonIndex - lessonsPerPage;
    currentLesson = lessons.slice(firstLessonIndex, lastLessonIndex);

    paginate = pageNumber => setCurrentPage(pageNumber)
  } else lessons = null

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <Header titles={titles}></Header>
      <div className={lesson['flex-content']}>
        {topics ? <NavListLessons topics={topics} /> : null}
        {lessons ? <DoTask arrLength={lessons.length} currentLesson={currentLesson} lessonsPerPage={lessonsPerPage} paginate={paginate} /> : <h1>Для данной темы пока что нет уроков</h1>}
      </div>
    </div>
  );
};

export default LessonPage;
