import { useState, useCallback, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DoTask from '../../components/DoTask/DoTask';
import Header from '../../components/Header/Header';
import NavListLessons from '../../components/NavListOfLessons/NavListLessons';
import Loader from '../../components/Loader/Loader';
import lesson from './css/LessonPage.module.css'
import { useGetLessonsQuery, useGetTopicsQuery } from '../../redux';

const LessonPage = () => {
  const { course_id, topic_id } = useParams()

  const [currentPage, setCurrentPage] = useState(1)
  const lessonsPerPage = 1

  let { data: data_lesson, isLoading: loading_lesson, isError } = useGetLessonsQuery(`/lesson/${course_id}/${topic_id}`, { refetchOnFocus: true })
  const { data: data_topic } = useGetTopicsQuery(`/topic/${course_id}`, { refetchOnFocus: true })

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
  if (data_lesson && !isError) {
    lastLessonIndex = currentPage * lessonsPerPage;
    firstLessonIndex = lastLessonIndex - lessonsPerPage;
    currentLesson = data_lesson.slice(firstLessonIndex, lastLessonIndex);

    paginate = pageNumber => setCurrentPage(pageNumber)
  } else data_lesson = null

  if (loading_lesson) {
    return <Loader />
  }

  return (
    <div>
      <Header titles={titles}></Header>
      <div className={lesson['flex-content']}>
        {data_topic ? <NavListLessons data_topic={data_topic} /> : null}
        {data_lesson ? <DoTask arrLength={data_lesson.length} currentLesson={currentLesson} lessonsPerPage={lessonsPerPage} paginate={paginate} /> : <h1>Для данной темы пока что нет уроков</h1>}
      </div>
    </div>
  );
};

export default LessonPage;
