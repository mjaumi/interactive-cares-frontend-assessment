import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import Login from './pages/Authentication/Login/Login';
import Signup from './pages/Authentication/Signup/Signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/videos/:videoId' element={<VideoPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
