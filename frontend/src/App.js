import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Forms/Login';
import Register from './components/Forms/Register';
import Home from './components/Pages/HomePage/Home';
import ProfilePage from './components/Pages/ProfilePage/ProfilePage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import { useAuthContext } from './hooks/useAuthContext';
import FiProfilePage from './components/Pages/ProfilePage/FiProfilePage';
import InterestPage from './components/Pages/InternshipPage/InterestPage';
import ChatPage from './components/Chat/ChatPage';
import ChatPageMain from './components/Chat/ChatPageMain';

function App() {

  const { user } = useAuthContext();  //we are grabbing the user from useAuthCONTEXT

  return (
    <>
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              exact path="/"
              element = {user ? <Home/> : <Navigate to='/login'/>} 
            />
            <Route
              exact path="/chathe"
              element = {user ? <ChatPageMain/> : <Navigate to='/login'/>} 
            />
            <Route
              exact path="/fipro"
              element = {user ? <FiProfilePage/> : <Navigate to='/login'/>} 
            />
            <Route
              exact path="/interest"
              element = {user ? <InterestPage/> : <Navigate to='/login'/>} 
            />
            <Route
              exact path="/about"
              element = {user ? <AboutPage/> : <Navigate to='/login'/>} 
            />
            <Route
              exact path="/profile"
              element = {user ? <ProfilePage/> : <Navigate to='/login'/>} 
            />
            <Route
              exact path="/login"
              element = {!user ? <Login/> : <Navigate to='/' />}
            />
            <Route
              exact path="/signup"
              element = {!user ? <Register/> : <Navigate to='/' />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
