import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Podcast from './Pages/Podcast';
import Episode from './Pages/Episode';
import './App.css';
import Divider from "./Components/Divider";

function App() {

  return (
    <Router>
      <div className="container mx-auto mt-32 mb-32">
        PODCASTER
        <Divider />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/podcast/:podcastId" element={<Podcast />} />
          <Route path="/podcast/:podcastId/episode/:episodeId" element={<Episode />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
