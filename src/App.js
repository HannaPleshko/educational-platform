import { RoutesTest } from './routes/Routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import './App.css';

function App() {
  const { token, login, logout } = useAuth();
  console.log(token);
  const isAuthenticated = !!token;
  const routes = RoutesTest(isAuthenticated)

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isAuthenticated,
      }}
    >
      <div>
        <h1>{routes}</h1>
      </div>
    </AuthContext.Provider>
  );

}

export default App;
