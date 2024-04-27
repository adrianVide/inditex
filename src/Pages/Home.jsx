import { useEffect, useState } from "react";
import { formatPodcasts } from "../services/formatPodcasts";
import { searchPodcasts } from "../services/searchPodcasts";
import PodcastCard from "../Components/PodcastCard";

const ARRAY_CACHE_KEY = "cachedPodcasts";
const FETCH_URL =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

const Home = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const renderPodcasts = searchTerm === "" ? podcasts : filteredPodcasts;

  useEffect(() => {
    const cachedData = JSON.parse(localStorage.getItem(ARRAY_CACHE_KEY));
    if (cachedData && Date.now() - cachedData.timestamp < 24 * 60 * 60 * 1000) {
      setPodcasts(cachedData.podcasts);
      setFilteredPodcasts(cachedData.podcasts);
    } else {
      fetch(FETCH_URL)
        .then((response) => response.json())
        .then((data) => {
          const formattedPodcasts = formatPodcasts(data);
          setPodcasts(formattedPodcasts);
          setFilteredPodcasts(formattedPodcasts);
          localStorage.setItem(
            ARRAY_CACHE_KEY,
            JSON.stringify({
              podcasts: formattedPodcasts,
              timestamp: Date.now(),
            })
          );
        })
        .catch((error) => {
          console.error("Error fetching podcasts:", error);
        });
    }
  }, []);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setFilteredPodcasts(searchPodcasts(podcasts, searchTerm));
  };
  return (
    <>
      <div className="text-right">
        <span>{renderPodcasts.length}</span>
        <input
          type="search"
          id="site-search"
          name="q"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Filter podcasts"
          className="ml-4 p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid grid-cols-4 gap-y-32 gap-x-8 mt-32">
        {renderPodcasts?.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </>
  );
};

export default Home;
