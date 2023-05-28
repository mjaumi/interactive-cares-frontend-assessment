import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import Login from './pages/Authentication/Login/Login';
import Signup from './pages/Authentication/Signup/Signup';
import PrivateRoute from './components/Routes/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';

function App() {

  // rendering the application here
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/videos/:videoId' element={
          <PrivateRoute>
            <VideoPlayer />
          </PrivateRoute>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
