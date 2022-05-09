import { Link, useParams } from 'react-router-dom';
import { useGetTopicsQuery } from '../../redux';
import Loader from '../../components/Loader/Loader';
import singleCourse from './SingleCourse.module.css';
import TopicItem from './TopicItem';

const SingleCourse = () => {
  const { courseId, courseTitle } = useParams();
  const { data: dataTopic, isLoading } = useGetTopicsQuery(`/topic/${courseId}`);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={singleCourse['course-wrapper']}>
      <div className={singleCourse['single-course']}>
        <div className={singleCourse['course-main-info']}>
          <div className={singleCourse['course-main-info-width']}>
            <p>Course</p>
            <div className={singleCourse['course-name']}>{courseTitle}</div>
            <div className={singleCourse['course-count-student']}>65 students</div>
          </div>
        </div>
        <div className={singleCourse['course-context']}>
          <div className={singleCourse['course-info']}>
            <div className={singleCourse['course-progress']}>
              <h2>My progress</h2>
              <ul>
                <li>Course started: November 17, 2021</li>
                <li>Completed lessons: 0 out of 16</li>
              </ul>
            </div>
            <div className={singleCourse['course-result']}>
              <h2>What will you learn</h2>
              <ul>
                <li>Use basic language constructs: conditions, loops, functions, and others</li>
                <li>Divide code into modules for reuse and no naming conflicts</li>
                <li>Understand key concepts for writing good code, such as cleanliness and determinism</li>
              </ul>
            </div>
            <div className={singleCourse['course-description']}>
              <h2>Description</h2>
              <p>
                What is a computer really? Does he understand programming languages? How to write code and your programs? This course is an
                introduction to modern programming and answers many interesting and sometimes strange questions. We will explore the nature
                of computers and code, as well as look at the important fundamental concepts that helped give rise to modern machines,
                mobile phones, the internet - just about everything we deal with every day!
              </p>
            </div>
            <div className={singleCourse['course-lessons']}>
              <h2>Course Lessons</h2>
              <p className={singleCourse['course-p-lessons']}>Duration 24 hours</p>
              <ul>
                {dataTopic ? dataTopic.map((item, index) => <TopicItem key={item.id} course={item} index={index + 1} {...item} />) : null}
              </ul>
            </div>
          </div>

          <div className={singleCourse['course-get-started']}>
            <div className={singleCourse['course-img']}></div>
            {dataTopic ? (
              <Link to={`/course/${courseTitle}/${courseId}/${dataTopic[0].title}/${dataTopic[0].id}`}>
                <div className={singleCourse['course-btn']}>Continue</div>
              </Link>
            ) : null}
            <p className={singleCourse['course-get-started-p1']}>Trainer with practice</p>
            <p className={singleCourse['course-get-started-p2']}>Lifetime access to theory</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
