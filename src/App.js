import {
  BrowserRouter as Router,
  Routes,
  Route, Redirect, Navigate
} from "react-router-dom";
import Home from './Pages/Home';
import Podcast from './Pages/Podcast';
import Episode from './Pages/Episode';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/podcast/:podcastId" element={<Podcast />} />
        <Route path="/podcast/:podcastId/episode/:episodeId" element={<Episode />} />
      </Routes>
    </Router>
  );

}

export default App;
