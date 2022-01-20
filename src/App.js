import { Routes, Route } from 'react-router-dom'
import GuestHome from './pages/GuestHomePage/GuestHomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationStudentPage from "./pages/RegistrationStudentPage/RegistrationStudentPage";
import RegistrationTeacherPage from "./pages/RegistrationTeacherPage/RegistrationTeacherPage";
import './App.css';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<GuestHome />}></Route>
                <Route path='/login' element={<LoginPage />}></Route>
                <Route path='/register' element={<RegistrationPage />}></Route>
                <Route path='/register/student' element={<RegistrationStudentPage />}></Route>
                <Route path='/register/teacher' element={<RegistrationTeacherPage />}></Route>
                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </>

    );
}

export default App;
