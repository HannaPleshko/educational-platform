import { Link, useParams } from 'react-router-dom';
import { useGetTopicsQuery } from '../../redux';
import Loader from '../../components/Loader/Loader';
import singleCourse from './SingleCourse.module.css';

const SingleCourse = () => {
    const { course_id, course_title } = useParams()
    const { data: data_topic, isLoading: isLoading_topic } = useGetTopicsQuery(`/topic/${course_id}`, { refetchOnFocus: true })

    if (isLoading_topic) {
        return <Loader />
    }

    return (
        <div className={singleCourse['course-wrapper']}>
            <div className={singleCourse['single-course']}>
                <div className={singleCourse['course-main-info']}>
                    <div className={singleCourse['course-main-info-width']}>
                        <p>Course</p>
                        <div className={singleCourse['course-name']}>{course_title}</div>
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
                                <li>
                                    <h1>1</h1>
                                    <div className={singleCourse['course-lessons-content']}>
                                        <h2>The first lesson</h2>
                                        <p>
                                            Understand what a programming language is. Why the syntax of the language is, although necessary, but not a
                                            self-sufficient thing. We discuss which language to start learning with and how important the choice is at this stage.
                                        </p>
                                    </div>

                                </li>
                                <li>
                                    <h1>2</h1>
                                    <div className={singleCourse['course-lessons-content']}>
                                        <h2>The second lesson</h2>
                                        <p>
                                            Understand what a programming language is. Why the syntax of the language is, although necessary, but not a
                                            self-sufficient thing. We discuss which language to start learning with and how important the choice is at this stage.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <h1>3</h1>
                                    <div className={singleCourse['course-lessons-content']}>
                                        <h2>The third lesson</h2>
                                        <p>
                                            Understand what a programming language is. Why the syntax of the language is, although necessary, but not a
                                            self-sufficient thing. We discuss which language to start learning with and how important the choice is at this stage.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <h1>4</h1>
                                    <div className={singleCourse['course-lessons-content']}>
                                        <h2>The fourth lesson</h2>
                                        <p>
                                            Understand what a programming language is. Why the syntax of the language is, although necessary, but not a
                                            self-sufficient thing. We discuss which language to start learning with and how important the choice is at this stage.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <h1>5</h1>
                                    <div className={singleCourse['course-lessons-content']}>
                                        <h2>The fifth lesson</h2>
                                        <p>
                                            Understand what a programming language is. Why the syntax of the language is, although necessary, but not a
                                            self-sufficient thing. We discuss which language to start learning with and how important the choice is at this stage.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <h1>6</h1>
                                    <div className={singleCourse['course-lessons-content']}>
                                        <h2>The sixth lesson</h2>
                                        <p>
                                            Understand what a programming language is. Why the syntax of the language is, although necessary, but not a
                                            self-sufficient thing. We discuss which language to start learning with and how important the choice is at this stage.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <h1>7</h1>
                                    <div className={singleCourse['course-lessons-content']}>
                                        <h2>The seventh lesson</h2>
                                        <p>
                                            Understand what a programming language is. Why the syntax of the language is, although necessary, but not a
                                            self-sufficient thing. We discuss which language to start learning with and how important the choice is at this stage.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <h1>8</h1>
                                    <div className={singleCourse['course-lessons-content']}>
                                        <h2>The eighth lesson</h2>
                                        <p>
                                            Understand what a programming language is. Why the syntax of the language is, although necessary, but not a
                                            self-sufficient thing. We discuss which language to start learning with and how important the choice is at this stage.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <h1>9</h1>
                                    <div className={singleCourse['course-lessons-content']}>
                                        <h2>The ninth lesson</h2>
                                        <p>
                                            Understand what a programming language is. Why the syntax of the language is, although necessary, but not a
                                            self-sufficient thing. We discuss which language to start learning with and how important the choice is at this stage.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <h1>10</h1>
                                    <div className={singleCourse['course-lessons-content']}>
                                        <h2>The tenth lesson</h2>
                                        <p>
                                            Understand what a programming language is. Why the syntax of the language is, although necessary, but not a
                                            self-sufficient thing. We discuss which language to start learning with and how important the choice is at this stage.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={singleCourse['course-get-started']}>
                        <div className={singleCourse['course-img']}></div>
                        {data_topic ? <Link
                            to={`/course/${course_title}/${course_id}/${data_topic[0].title}/${data_topic[0].id}`}><div className={singleCourse['course-btn']}>Continue</div>
                        </Link> : null}
                        <p className={singleCourse['course-get-started-p1']}>Trainer with practice</p>
                        <p className={singleCourse['course-get-started-p2']}>Lifetime access to theory</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;
