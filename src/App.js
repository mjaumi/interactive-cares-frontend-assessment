import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/:videoId' element={<VideoPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
