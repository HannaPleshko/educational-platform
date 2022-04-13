import { useState, useCallback, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DoTask from '../../components/DoTask/DoTask';
import NavListLessons from '../../components/NavListOfLessons/NavListLessons';
import Loader from '../../components/Loader/Loader';
import lesson from './css/LessonPage.module.css'
import { useGetLessonsQuery, useGetTopicsQuery } from '../../redux';
import SimpleSnackbar from '../../components/SimpleSnackbar/SimpleSnackbar';

const LessonPage = () => {
  const { courseId, topicId } = useParams()

  const [currentPage, setCurrentPage] = useState(1)
  const lessonsPerPage = 1

  let { data: lessons, isLoading, isError } = useGetLessonsQuery(`/lesson/${courseId}/${topicId}`)
  const { data: topics } = useGetTopicsQuery(`/topic/${courseId}`)

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
      <div className={lesson['flex-content']}>
        {topics ? <NavListLessons topics={topics} /> : null}
        {lessons ? <DoTask arrLength={lessons.length} currentLesson={currentLesson} lessonsPerPage={lessonsPerPage} paginate={paginate} /> :
          <SimpleSnackbar msg={'The list of lessons for this topic is empty'}/>}
      </div>
    </div>
  );
};

export default LessonPage;

