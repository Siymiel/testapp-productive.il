/* eslint-disable prettier/prettier */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { useSelector } from 'react-redux';

function App() {
  const authenticatedUser = useSelector((state) => state.currentUser);
  console.log("AuthUser", authenticatedUser)
  return (
    <>
      <Routes>
        <Route exact path="/" element={authenticatedUser == null ? <Login /> : <Home />} />
        <Route exact path="/login" element={authenticatedUser !== null ? <Home /> : <Login />} />
        <Route exact path="/profile" element={authenticatedUser == null ? <Login /> : <Profile />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
