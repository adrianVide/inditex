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
import OneTwo from "./Components/OneTwo";
import LoadingProvider from "./Context/LoadingContext";
import Header from "./Components/Header";

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
