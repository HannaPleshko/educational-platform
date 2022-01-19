import guest from './Guest.module.css';

const Guest = () => {
    return (
        <div className={guest["guest"]}>
            <div className={guest["content"]}>
                <div className={guest["mycontain"]}>
                    <h2>Which one describes you?</h2>
                    <div className={guest["mycontain-flex"]}>
                        <div className={guest["block-student"]}>
                            <div className={guest["img_log_as_student"]}></div>
                            <h3>Student</h3>
                            <p>I am a student, class participant, etc.</p>
                        </div>
                        <div className={guest["block-teacher"]}>
                            <div className={guest["img_log_as_teacher"]}></div>
                            <h3>Teacher</h3>
                            <p>I am a teacher, admin, principal, or guidance counselor.</p>
                        </div>
                    </div>
                    <p className={guest["mycontain--login"]}>Already have an account?<a href="/">Login</a></p>
                </div>
            </div>
        </div>
    )
}

export default Guest

