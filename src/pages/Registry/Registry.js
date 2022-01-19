import classNames from 'classnames';
import registry from './Registry.module.css';
import Header from "../../components/Header/Header";

const Registry = () => {
    return (
        <div className={registry["registry"]}>
            <Header></Header>

            <div className={registry["content"]}>
                <div className={registry["mycontain"]}>
                    <h2>Which one describes you?</h2>
                    <div className={registry["mycontain-flex"]}>
                        <div className={registry["block-student"]}>
                            <div className={registry["img_log_as_student"]}></div>

                            <h3>Student</h3>
                            <p>I am a student, class participant, etc.</p>
                        </div>
                        <div className={registry["block-teacher"]}>
                            <div className={registry["img_log_as_teacher"]}></div>

                            <h3>Teacher</h3>
                            <p>I am a teacher, admin, principal, or guidance counselor.</p>
                        </div>
                    </div>
                    <p className={registry["mycontain--login"]}>Already have an account?<a href="/">Login</a></p>
                </div>
            </div>
        </div>
    )
}

export default Registry

