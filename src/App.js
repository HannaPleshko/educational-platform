import { Routes, Route } from 'react-router-dom'
import GuestHome from './pages/GuestHomePage/GuestHomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPage from "./pages/LoginPage/LoginPage";
import './App.css';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<GuestHome />}></Route>
                <Route path='/register' element={<RegistrationPage />}></Route>
                <Route path='/login' element={<LoginPage />}></Route>
                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </>

    );
}

export default App;
