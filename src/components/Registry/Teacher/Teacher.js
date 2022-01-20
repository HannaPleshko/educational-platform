import teacher from './Teacher.module.css';
import {Link} from "react-router-dom";

const Teacher = () => {
    return (
        <div className={teacher["teacher"]}>
            <div className={teacher["content"]}>
                <div className={teacher["mycontain"]}>
                    <div className={teacher["block-logo-teacher"]}><h2>Create your HS Teacher account</h2></div>
                    <div className={teacher["block-teacher"]}>
                        <div className={teacher["block-email"]}>
                            <p>Name</p>
                            <input type='text'/>
                        </div>
                        <div className={teacher["block-email"]}>
                            <p>Surname</p>
                            <input type='text'/>
                        </div>
                        <div className={teacher["block-email"]}>
                            <p>Email</p>
                            <input type='text'/>
                        </div>
                        <div className={teacher["block-pwd"]}>
                            <p>Password</p>
                            <input type='text'/>
                        </div>
                    </div>
                    <div className={teacher["block-bottom"]}>
                        <Link to={"*"}>
                            <div className={teacher["btn-teacher"]}>Next</div>
                        </Link>
                    </div>
                    <p className={teacher["mycontain--log"]}>Already have an account?
                        <Link to={"/login"} className={teacher["reg-link"]}>Log In</Link>
                    </p>
                    <p className={teacher["teacher--forgotpwd"]}>Looking to create a student account?
                        <Link to={"/register/student"} className={teacher["forgotpwd-link"]}>Click Here</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Teacher

