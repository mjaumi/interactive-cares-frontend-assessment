import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import Login from './pages/Authentication/Login/Login';
import Signup from './pages/Authentication/Signup/Signup';
import PrivateRoute from './components/Routes/PrivateRoute/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute/PublicRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path='/signup' element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        } />
        <Route path='/videos/:videoId' element={
          <PrivateRoute>
            <VideoPlayer />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
