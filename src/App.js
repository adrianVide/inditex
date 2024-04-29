import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import Episode from './pages/Episode';
import './App.css';
import Divider from "./components/Divider";
import OneTwo from "./components/OneTwo";
import LoadingProvider from "./context/LoadingContext";
import Header from "./components/Header";

function App() {

  return (
    <LoadingProvider>
      <Router>
        <div className="container mx-auto mt-32 mb-32">
          <Header />
          <Divider />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="podcast" element={<OneTwo />} >
              <Route path=":podcastId" element={<Podcast />} />
              <Route path="/podcast/:podcastId/episode/:episodeId" element={<Episode />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </LoadingProvider>
  );

}

export default App;
