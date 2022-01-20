import {Link} from 'react-router-dom';
import guest from './Guest.module.css';

const Guest = () => {
    return (
        <div className={guest["guest"]}>
            <div className={guest["content"]}>
                <div className={guest["mycontain"]}>
                    <h2>Which one describes you?</h2>
                    <div className={guest["mycontain-flex"]}>
                        <div className={guest["block-student"]}>
                            <Link to={'*'}>
                                <div className={guest["img_log_as_student"]}></div>
                                <h3>Student</h3>
                                <p>I am a student, class participant, etc.</p>
                            </Link>
                        </div>
                        <div className={guest["block-teacher"]}>
                            <Link to={'*'}>
                                <div className={guest["img_log_as_teacher"]}></div>
                                <h3>Teacher</h3>
                                <p>I am a teacher, admin, principal, or guidance counselor.</p>
                            </Link>
                        </div>
                    </div>
                    <p className={guest["mycontain--login"]}>Already have an account?<Link to={"/login"}>Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Guest

