import { Routes, Route } from 'react-router-dom'
import GuestHome from './pages/GuestHome/GuestHome';
import Registry from './pages/Registry/Registry';
import NotFound from './components/NotFound/NotFound';
import './App.css';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<GuestHome />}></Route>
                <Route path='/register' element={<Registry />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </>

    );
}

export default App;
