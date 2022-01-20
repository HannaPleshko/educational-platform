import student from './Student.module.css';
import {Link} from "react-router-dom";

const Student = () => {
    return (
        <div className={student["student"]}>
            <div className={student["content"]}>
                <div className={student["mycontain"]}>
                    <div className={student["block-logo-student"]}><h2>Create your HS Student account</h2></div>
                    <div className={student["block-student"]}>
                        <div className={student["block-email"]}>
                            <p>Name</p>
                            <input type='text'/>
                        </div>
                        <div className={student["block-email"]}>
                            <p>Surname</p>
                            <input type='text'/>
                        </div>
                        <div className={student["block-email"]}>
                            <p>Email</p>
                            <input type='text'/>
                        </div>
                        <div className={student["block-pwd"]}>
                            <p>Password</p>
                            <input type='text'/>
                        </div>
                    </div>
                    <div className={student["block-bottom"]}>
                        <Link to={"*"}>
                            <div className={student["btn-student"]}>Next</div>
                        </Link>
                    </div>
                    <p className={student["mycontain--log"]}>Already have an account?
                        <Link to={"/login"} className={student["reg-link"]}>Log In</Link>
                    </p>
                    <p className={student["student--forgotpwd"]}>Looking to create a teacher account?
                        <Link to={"/register/teacher"} className={student["forgotpwd-link"]}>Click Here</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Student

